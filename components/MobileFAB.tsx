"use client";
import { Phone, MapPin } from "lucide-react";

export default function MobileFAB() {
  return (
    <div className="fixed bottom-5 left-0 right-0 z-50 flex justify-center gap-3 sm:hidden px-5">
      <a
        href="tel:0507-1359-6271"
        className="flex-1 flex items-center justify-center gap-2.5 py-3.5 rounded-full text-white font-bold text-sm shadow-2xl active:scale-95 transition-transform"
        style={{ background: "var(--color-deep-green)" }}
      >
        <Phone size={17} />
        전화하기
      </a>
      <a
        href="https://naver.me/xhz33qjr"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2.5 py-3.5 rounded-full text-deep-green font-bold text-sm bg-white shadow-2xl active:scale-95 transition-transform"
      >
        <MapPin size={17} />
        지도보기
      </a>
    </div>
  );
}
