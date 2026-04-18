"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type MenuItem = {
  name: string;
  price: number | string;
  image: string;
  note?: string;
  includeSotbab?: boolean;
  badge?: string;
};

type Category = {
  id: string;
  label: string;
  emoji: string;
  note?: string;
  items: MenuItem[];
};

const CATEGORIES: Category[] = [
  {
    id: "meat",
    label: "고기류",
    emoji: "🥩",
    note: "고기메뉴에는 솥밥이 미포함입니다. 추가 주문해주세요.",
    items: [
      { name: "돼지갈비 700g", price: 36000, image: "/images/돼지갈비 700g.jpg" },
      { name: "돼지갈비 1인분 200g", price: 15000, image: "/images/돼지갈비 1인분 200g.jpg" },
      { name: "생오겹살 1인분 180g", price: 13000, image: "/images/생오겹살 1인분 180g.jpg" },
      { name: "소갈비살(양념 가능) 500g", price: 42000, image: "/images/소갈비살(양념 가능) 500g.jpg" },
    ],
  },
  {
    id: "meal",
    label: "식사류",
    emoji: "🍲",
    note: "식사메뉴에는 솥밥이 포함되어 있습니다.",
    items: [
      { name: "닭도리탕", price: 30000, image: "/images/닭도리탕.jpg", note: "솥밥 별도" },
      { name: "스지도가니탕", price: 15000, image: "/images/스지도가니탕.jpg", includeSotbab: true, badge: "+솥밥" },
      { name: "한우우거지탕", price: 11000, image: "/images/한우 우거지탕.jpg", includeSotbab: true, badge: "+솥밥" },
      { name: "해물순두부", price: 10000, image: "/images/해물순두부.jpg", includeSotbab: true, badge: "+솥밥" },
      { name: "돌솥비빔밥", price: 10000, image: "/images/돌솥비빔밥.jpg" },
      { name: "김치찌개 1인분", price: 10000, image: "/images/김치찌개1인분.jpg", includeSotbab: true, badge: "+솥밥" },
      { name: "뚝배기불고기", price: 13000, image: "/images/돼지갈비 1인분 200g.jpg", includeSotbab: true, badge: "+솥밥" },
      { name: "오징어볶음 1인분", price: 10000, image: "/images/오징어볶음.jpg", includeSotbab: true, badge: "+솥밥" },
      { name: "갈치조림", price: 11000, image: "/images/갈치조림.jpg", includeSotbab: true, badge: "+솥밥" },
      { name: "고등어구이", price: 12000, image: "/images/고등어구이.jpg", includeSotbab: true, badge: "+솥밥" },
      { name: "고등어조림", price: 12000, image: "/images/고등어조림.jpg", includeSotbab: true, badge: "+솥밥" },
      { name: "제육볶음 1인분", price: 12000, image: "/images/제육볶음 1인분.jpg", includeSotbab: true, badge: "+솥밥" },
      { name: "코다리조림", price: 12000, image: "/images/코다리 조림.jpg", includeSotbab: true, badge: "+솥밥" },
      { name: "백반", price: 9000, image: "/images/백반.jpg", badge: "+공기밥" },
    ],
  },
  {
    id: "side",
    label: "사이드",
    emoji: "🍚",
    items: [
      { name: "솥밥", price: 3000, image: "/images/추가 솥밥.jpg" },
      { name: "공기밥", price: 1000, image: "/images/공기밥.jpg" },
    ],
  },
  {
    id: "noodle",
    label: "면류",
    emoji: "🍜",
    note: "면류에는 솥밥이 미포함입니다.",
    items: [
      { name: "비빔국수", price: 9000, image: "/images/비빔국수.jpg" },
      { name: "해물칼국수", price: 10000, image: "/images/해물칼국수.jpg" },
    ],
  },
  {
    id: "drinks",
    label: "주류/음료",
    emoji: "🍺",
    items: [
      { name: "소주", price: "2,000원 🎉 할인가", image: "/images/소주.jpg", badge: "EVENT" },
      { name: "맥주", price: "3,500원 🎉 할인가", image: "/images/맥주.jpg", badge: "EVENT" },
      { name: "막걸리", price: "4,000원", image: "/images/막걸리.jpg" },
      { name: "청하", price: "6,000원", image: "/images/청하.jpg" },
      { name: "음료", price: "2,000원", image: "/images/음료.jpg" },
    ],
  },
];

const formatPrice = (price: number | string) => {
  if (typeof price === "string") return price;
  return price.toLocaleString("ko-KR") + "원";
};

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState("meat");

  const activeCategory = CATEGORIES.find((c) => c.id === activeTab)!;

  return (
    <section id="menu" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs tracking-widest text-deep-green font-semibold uppercase">Menu</span>
          <h2 className="font-myeongjo text-3xl sm:text-4xl font-bold mt-3 mb-4">메뉴</h2>
          <p className="text-gray-500 text-sm">
            모든 식사메뉴는 갓 지은 가마솥밥과 함께 제공됩니다
          </p>
        </motion.div>

        {/* Tab navigation */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeTab === cat.id
                  ? "text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              style={
                activeTab === cat.id
                  ? { background: "var(--color-deep-green)" }
                  : {}
              }
            >
              <span>{cat.emoji}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Category note */}
        {activeCategory.note && (
          <motion.p
            key={activeCategory.id + "-note"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-sm text-gray-500 mb-8 bg-gray-50 rounded-xl py-3 px-4"
          >
            ℹ️ {activeCategory.note}
          </motion.p>
        )}

        {/* Items grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          {activeCategory.items.map((item) => (
            <div
              key={item.name}
              className="menu-card bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
            >
              {/* Image */}
              <div className="relative aspect-square bg-gray-50">
                <Image
                  src={item.image}
                  alt={`자양동 명숯불갈비 ${item.name}`}
                  fill
                  className="object-cover"
                  sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
                />
                {/* Badges */}
                <div className="absolute top-2 left-2 flex flex-col gap-1">
                  {item.badge === "EVENT" && (
                    <span
                      className="text-white text-[10px] font-bold px-2 py-0.5 rounded-full"
                      style={{ background: "var(--color-accent-red)" }}
                    >
                      이벤트
                    </span>
                  )}
                  {item.includeSotbab && item.badge && item.badge !== "EVENT" && (
                    <span
                      className="text-white text-[10px] font-bold px-2 py-0.5 rounded-full"
                      style={{ background: "var(--color-deep-green)" }}
                    >
                      솥밥포함
                    </span>
                  )}
                  {item.badge && item.badge !== "EVENT" && !item.includeSotbab && (
                    <span className="bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </div>
              </div>

              {/* Info */}
              <div className="p-3.5">
                <p className="text-sm font-semibold text-gray-900 leading-snug mb-1">{item.name}</p>
                <p className="text-sm font-bold" style={{ color: "var(--color-deep-green)" }}>
                  {formatPrice(item.price)}
                </p>
                {item.note && (
                  <p className="text-[11px] text-gray-400 mt-1">{item.note}</p>
                )}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Drink event note */}
        {activeTab === "drinks" && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 text-center p-5 rounded-2xl border-2 border-dashed"
            style={{ borderColor: "var(--color-accent-red)", background: "rgba(225,29,72,0.04)" }}
          >
            <p className="font-bold text-lg" style={{ color: "var(--color-accent-red)" }}>
              🎉 감사 이벤트 진행 중
            </p>
            <p className="text-gray-600 mt-1 text-sm">
              소주 <strong>2,000원</strong> · 맥주 <strong>3,500원</strong>으로 파격 할인!
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
