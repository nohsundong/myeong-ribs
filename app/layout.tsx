import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "명숯불갈비 | 자양동 돼지갈비 & 갓 지은 가마솥밥 맛집",
  description:
    "광진구 자양동 명숯불갈비. 잡내 없는 돼지갈비와 주문 즉시 짓는 가마솥밥, 정성 가득한 한식 식사. 주차 완비, 단체 환영, 혼밥 가능.",
  keywords:
    "자양동 맛집, 자양동 돼지갈비, 광진구 한식, 자양시장 맛집, 가마솥밥, 자양동 점심, 명숯불갈비",
  openGraph: {
    title: "명숯불갈비 | 자양동 돼지갈비 & 갓 지은 가마솥밥 맛집",
    description:
      "광진구 자양동 명숯불갈비. 잡내 없는 돼지갈비와 주문 즉시 짓는 가마솥밥, 정성 가득한 한식 식사.",
    url: "https://myeongribs.kr",
    siteName: "명숯불갈비",
    images: [
      {
        url: "/images/명숯불갈비 메인.jpeg",
        width: 1200,
        height: 630,
        alt: "명숯불갈비 자양동 돼지갈비 맛집",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "additionalType": "https://schema.org/Restaurant",
  name: "명숯불갈비",
  description: "광진구 자양동 명숯불갈비. 잡내 없는 돼지갈비와 주문 즉시 짓는 가마솥밥, 정성 가득한 한식 식사.",
  image: "/images/명숯불갈비 메인.jpeg",
  url: "https://myeongribs.kr",
  telephone: "0507-1359-6271",
  address: {
    "@type": "PostalAddress",
    streetAddress: "뚝섬로 657 1층",
    addressLocality: "광진구",
    addressRegion: "서울특별시",
    postalCode: "05027",
    addressCountry: "KR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 37.5375,
    longitude: 127.0675,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:30",
      closes: "23:00",
    },
  ],
  servesCuisine: "Korean Cuisine",
  priceRange: "₩₩",
  paymentAccepted: ["Cash", "Credit Card"],
  currenciesAccepted: "KRW",
  hasMenu: {
    "@type": "Menu",
    hasMenuSection: [
      {
        "@type": "MenuSection",
        name: "고기류",
        hasMenuItem: [
          {
            "@type": "MenuItem",
            name: "돼지갈비 700g",
            offers: { "@type": "Offer", price: "36000", priceCurrency: "KRW" },
          },
          {
            "@type": "MenuItem",
            name: "소갈비살 500g",
            offers: { "@type": "Offer", price: "42000", priceCurrency: "KRW" },
          },
        ],
      },
    ],
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "주차장", value: true },
    { "@type": "LocationFeatureSpecification", name: "무선인터넷", value: true },
    { "@type": "LocationFeatureSpecification", name: "유아의자", value: true },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
