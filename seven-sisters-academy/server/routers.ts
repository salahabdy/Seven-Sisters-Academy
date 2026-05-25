import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { createContactSubmission } from "./db";
import { sendEmail, generateConfirmationEmailHTML } from "./_core/emailService";

export const appRouter = router({
  // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  contact: router({
    submit: publicProcedure
      .input(
        z.object({
          fullName: z.string().min(2, "Full name is required").max(255),
          email: z.string().email("Valid email is required"),
          phone: z.string().optional(),
          programInterest: z.string().optional(),
          message: z.string().min(10, "Message must be at least 10 characters").max(5000),
        })
      )
      .mutation(async ({ input }) => {
        try {
          // Save the submission to the database
          await createContactSubmission({
            fullName: input.fullName,
            email: input.email,
            phone: input.phone,
            programInterest: input.programInterest,
            message: input.message,
            status: "new",
          });

          // Send confirmation email to applicant
          const confirmationHtml = generateConfirmationEmailHTML(
            input.fullName,
            input.programInterest
          );
          const emailSent = await sendEmail({
            to: input.email,
            subject: "We Received Your Inquiry - Seven Sisters Academy",
            html: confirmationHtml,
          });

          return {
            success: true,
            message: "Thank you for your inquiry. A confirmation email has been sent to your inbox.",
            emailSent,
          };
        } catch (error) {
          console.error("Error processing contact submission:", error);
          throw new Error("Failed to process your submission. Please try again later.");
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
