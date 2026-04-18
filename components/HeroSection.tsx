"use client";
import { motion } from "framer-motion";
import { Phone, MapPin } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/명숯불갈비 메인.jpeg"
          alt="자양동 명숯불갈비 돼지갈비와 가마솥밥"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Layered overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 30%, #064635 120%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-5 max-w-3xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-white/30 backdrop-blur-sm bg-white/10 text-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-300 animate-pulse" />
          <span className="tracking-widest text-xs font-light">서울 광진구 자양동</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="font-myeongjo text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5"
          style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
        >
          숯불향 가득한 돼지갈비의<br />
          <span className="text-yellow-300">고소한 풍미,</span> 명숯불갈비
        </motion.h1>

        {/* Sub copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-base sm:text-xl text-white/85 leading-relaxed mb-10 font-light"
        >
          주문 즉시 갓 지어낸 따뜻한 가마솥밥과 함께하는<br className="hidden sm:block" />
          정성스러운 한 끼
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <a
            href="tel:0507-1359-6271"
            className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-semibold text-white text-base shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
            style={{ background: "var(--color-deep-green)" }}
          >
            <Phone size={18} />
            전화 예약하기
          </a>
          <a
            href="https://naver.me/xhz33qjr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-semibold text-deep-green text-base bg-white shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
          >
            <MapPin size={18} />
            길찾기
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/50"
      >
        <span className="text-xs tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
