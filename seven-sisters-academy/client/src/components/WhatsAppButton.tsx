/* =============================================================
   WHATSAPP FLOATING BUTTON — Seven Sisters Academy
   Design: Persistent chat widget for student inquiries
   ============================================================= */

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const whatsappLink = "https://wa.me/message/EBK2OQL2RU2SC1";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      title="Chat with us on WhatsApp"
      aria-label="Open WhatsApp chat"
    >
      <MessageCircle size={24} className="group-hover:animate-bounce" />
    </a>
  );
}
