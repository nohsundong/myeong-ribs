"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Baby,
  ShoppingBag,
  Bike,
  CalendarCheck,
  Wifi,
  Accessibility,
  ParkingCircle,
  CreditCard,
  Smartphone,
  Users,
} from "lucide-react";

const amenities = [
  { icon: Baby, label: "유아의자" },
  { icon: ShoppingBag, label: "포장" },
  { icon: Bike, label: "배달" },
  { icon: CalendarCheck, label: "예약" },
  { icon: Wifi, label: "무선 인터넷" },
  { icon: Accessibility, label: "휠체어 이용" },
  { icon: ParkingCircle, label: "무료 주차" },
  { icon: Users, label: "단체석" },
];

const payments = [
  { icon: CreditCard, label: "제로페이" },
  { icon: Smartphone, label: "네이버페이" },
  { icon: Smartphone, label: "간편결제" },
];

export default function ServicesSection() {
  return (
    <section className="py-20 sm:py-28" style={{ background: "var(--color-wood)" }}>
      <div className="max-w-5xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs tracking-widest text-deep-green font-semibold uppercase">Services</span>
          <h2 className="font-myeongjo text-3xl sm:text-4xl font-bold mt-3 mb-4">서비스 및 편의시설</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl"
          >
            <Image
              src="/images/명숯불갈비 포장.jpeg"
              alt="명숯불갈비 포장 서비스"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <p className="absolute bottom-5 left-5 text-white font-myeongjo text-lg font-bold">
              포장도 가능합니다 🥡
            </p>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Amenities grid */}
            <div className="grid grid-cols-4 gap-3 mb-8">
              {amenities.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-2 bg-white rounded-2xl p-3 shadow-sm"
                >
                  <item.icon size={22} style={{ color: "var(--color-deep-green)" }} />
                  <span className="text-xs text-gray-600 text-center leading-tight">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Parking info */}
            <div
              className="rounded-2xl p-5 mb-5 text-white"
              style={{ background: "var(--color-deep-green)" }}
            >
              <div className="flex items-center gap-2.5 mb-1.5">
                <ParkingCircle size={18} className="text-yellow-300" />
                <span className="font-bold">무료 주차장</span>
              </div>
              <p className="text-white/75 text-sm">건물 뒤편 전용 주차장 이용 가능합니다.</p>
            </div>

            {/* Seating */}
            <div className="bg-white rounded-2xl p-5 mb-5 shadow-sm">
              <p className="font-semibold text-gray-800 mb-1">좌석 형태</p>
              <p className="text-sm text-gray-500">입식 테이블 · 남/녀 화장실 별도</p>
            </div>

            {/* Payment */}
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="font-semibold text-gray-800 mb-3">결제 수단</p>
              <div className="flex flex-wrap gap-2">
                {payments.map((p) => (
                  <span
                    key={p.label}
                    className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-gray-100 text-gray-700"
                  >
                    <p.icon size={12} />
                    {p.label}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
