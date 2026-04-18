"use client";
import { MapPin, Phone, Clock, ExternalLink, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ background: "var(--color-deep-green)" }} className="text-white">
      <div className="max-w-5xl mx-auto px-5 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h2 className="font-myeongjo text-2xl font-bold mb-3">명숯불갈비</h2>
            <p className="text-white/60 text-sm leading-relaxed">
              성자초등학교 사거리/자양동 자양시장 입구에서<br />정성을 다해 한 끼를 대접합니다.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://www.instagram.com/simyeonyeop/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                <Instagram size={16} />
                Instagram
              </a>
              <span className="text-white/30">·</span>
              <a
                href="https://blog.naver.com/simyeonyeop"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                <ExternalLink size={14} />
                블로그
              </a>
            </div>
          </div>

          {/* Info */}
          <div className="space-y-4">
            <div className="flex gap-3">
              <MapPin size={16} className="text-yellow-300 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium">주소</p>
                <p className="text-white/65 text-sm mt-0.5 leading-relaxed">
                  서울 광진구 뚝섬로 657 1층<br />
                  <span className="text-white/40 text-xs">(성자초등학교 사거리/자양시장 입구)</span>
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Clock size={16} className="text-yellow-300 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium">영업시간</p>
                <p className="text-white/65 text-sm mt-0.5">
                  09:30 – 23:00
                  <span className="text-white/40 ml-2 text-xs">(마감주문(L.O) 22:00)</span>
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Phone size={16} className="text-yellow-300 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium">전화</p>
                <a
                  href="tel:0507-1359-6271"
                  className="text-white/65 text-sm mt-0.5 hover:text-white transition-colors block"
                >
                  0507-1359-6271
                </a>
              </div>
            </div>
          </div>

          {/* Map links */}
          <div>
            <p className="text-sm font-medium mb-4 text-white/80">지도로 찾아오기</p>
            <div className="flex flex-col gap-3">
              <a
                href="https://naver.me/xhz33qjr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-sm group"
              >
                <span>네이버 지도</span>
                <ExternalLink size={14} className="text-white/40 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://place.map.kakao.com/1156915626"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-sm group"
              >
                <span>카카오 지도</span>
                <ExternalLink size={14} className="text-white/40 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/15 text-center text-white/35 text-xs">
          © 2026 명숯불갈비. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
