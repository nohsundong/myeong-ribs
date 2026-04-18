"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Tag, Clock } from "lucide-react";

export default function EventSection() {
  return (
    <section
      className="py-20 sm:py-28 relative overflow-hidden"
      style={{ background: "var(--color-deep-green)" }}
    >
      {/* Decorative pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 20px,
            rgba(255,255,255,0.3) 20px,
            rgba(255,255,255,0.3) 21px
          )`,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <div className="flex items-center gap-2 mb-5">
              <Tag size={16} className="text-yellow-300" />
              <span className="text-yellow-300 text-sm tracking-widest font-semibold uppercase">
                Special Event
              </span>
            </div>

            <h2 className="font-myeongjo text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
              한우 우거지탕<br />점심 특선
            </h2>

            {/* Price */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-white/50 text-2xl line-through font-light">12,000원</span>
              <span
                className="text-4xl font-bold"
                style={{ color: "var(--color-accent-red)" }}
              >
                9,000원
              </span>
            </div>

            <div className="flex items-center gap-2.5 mb-6 text-white/70 text-sm">
              <Clock size={15} className="text-yellow-300 shrink-0" />
              <span>09:30 ~ 14:30 점심특선 | 한우 우거지탕 + 솥밥</span>
            </div>

            <p className="text-white/75 leading-relaxed text-base border-l-2 border-yellow-300/50 pl-4">
              변함없는 사랑에 보답하고자 준비했습니다.<br />
              진한 국물과 구수한 솥밥으로 든든한 한 끼를<br />
              대접합니다.
            </p>

            <a
              href="tel:0507-1359-6271"
              className="mt-8 inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-deep-green bg-yellow-300 text-sm hover:bg-yellow-200 transition-colors shadow-lg"
            >
              예약 문의하기
            </a>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-square shadow-2xl ring-1 ring-white/10">
              <Image
                src="/images/한우 우거지탕.jpg"
                alt="자양동 명숯불갈비 한우우거지탕 점심특선"
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 50vw"
              />
              {/* Badge */}
              <div
                className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-white text-sm font-bold shadow"
                style={{ background: "var(--color-accent-red)" }}
              >
                25% 할인
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
