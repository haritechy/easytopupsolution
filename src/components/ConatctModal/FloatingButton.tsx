// components/ContactFloatingButton.tsx

import { MessageCircle } from "lucide-react";


export default function ContactFloatingButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-4 right-4 z-40 p-3 bg-[#394499]  text-white rounded-full shadow-lg hover:bg-orange-600"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
}
