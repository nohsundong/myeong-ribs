"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { UtensilsCrossed, ParkingCircle, UserCheck, Baby } from "lucide-react";

const features = [
  {
    icon: UtensilsCrossed,
    title: "갓 지은 가마솥밥",
    desc: "주문 즉시 화로에서 직접 지어내는 따뜻한 가마솥밥. 매 끼니 새로 짓습니다.",
  },
  {
    icon: ParkingCircle,
    title: "넉넉한 무료 주차",
    desc: "건물 뒤편 전용 주차장 완비. 차량 방문도 편리합니다.",
  },
  {
    icon: UserCheck,
    title: "혼밥 환영",
    desc: "혼자 오셔도 편안하게 즐기실 수 있는 따뜻한 공간입니다.",
  },
  {
    icon: Baby,
    title: "유아의자 완비",
    desc: "어린 자녀와 함께 방문하시는 가족분들을 위해 유아의자를 준비했습니다.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.55, ease: "easeOut" },
  }),
};

export default function USPSection() {
  return (
    <section className="py-20 sm:py-28" style={{ background: "var(--color-wood)" }}>
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs tracking-widest text-deep-green font-semibold uppercase">Our Story</span>
          <h2 className="font-myeongjo text-3xl sm:text-4xl font-bold mt-3 mb-5 text-gray-900">
            광진구 자양동의<br className="sm:hidden" /> 숨은 밥상
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-xl mx-auto text-base sm:text-lg">
            자양시장 입구에 자리한 명숯불갈비는 단순한 고깃집이 아닙니다.<br />
            정성껏 재운 돼지갈비와, 주문마다 새로 짓는 <strong className="text-deep-green">가마솥밥</strong>으로<br />
            매일 한 분 한 분께 따뜻한 한 끼를 대접합니다.
          </p>
        </motion.div>

        {/* Image + Feature grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Images */}
          <div className="grid grid-cols-2 gap-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden aspect-[3/4] col-span-1 row-span-1"
            >
              <Image
                src="/images/명숯불갈비 외부.jpeg"
                alt="자양동 명숯불갈비 외부 전경"
                fill
                className="object-cover"
                sizes="(max-width:768px) 50vw, 25vw"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative rounded-2xl overflow-hidden aspect-[3/4] col-span-1 row-span-1 mt-6"
            >
              <Image
                src="/images/명숯붉갈비 외부2.jpeg"
                alt="자양동 명숯불갈비 외부2"
                fill
                className="object-cover"
                sizes="(max-width:768px) 50vw, 25vw"
              />
            </motion.div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-white rounded-2xl p-6 shadow-sm"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "rgba(6,70,53,0.08)" }}
                >
                  <f.icon size={22} style={{ color: "var(--color-deep-green)" }} />
                </div>
                <h3 className="font-myeongjo font-bold text-lg mb-2 text-gray-900">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
