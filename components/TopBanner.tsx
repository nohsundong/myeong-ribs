"use client";
import { useState } from "react";
import { X, Sparkles } from "lucide-react";

export default function TopBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div
      className="relative z-50 w-full text-white py-2.5 px-4"
      style={{ background: "var(--color-deep-green)" }}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-center gap-3 text-sm sm:text-base">
        <Sparkles size={16} className="shrink-0 text-yellow-300" />
        <p className="text-center leading-snug">
          <span className="font-myeongjo font-bold mr-2">감사 이벤트</span>
          <span className="opacity-80 mr-2">|</span>
          <span className="font-bold text-red-300">소주 2,000원</span>
          <span className="mx-1.5 opacity-60">·</span>
          <span className="font-bold text-red-300">맥주 2,000원</span>
          <span className="ml-2 opacity-80 text-xs sm:text-sm">파격 할인 진행 중!</span>
        </p>
        <button
          onClick={() => setVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 opacity-60 hover:opacity-100 transition-opacity"
          aria-label="배너 닫기"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
