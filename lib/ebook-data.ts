import type { Ebook } from "@/models/ebook";

export interface ExtendedEbook extends Ebook {
  pdfUrl: string;
}

export const HARDCODED_EBOOKS: ExtendedEbook[] = [
  {
    id: "whispers-of-grace",
    slug: "whispers-of-grace",
    title: "Walking with Jesus",
    author: "Faith Rising Media",
    description:
      "A 30-Day Journey to Know Christ More Deeply. Walk closer with Jesus through deeper Bible understanding, stronger faith, and a life-transforming relationship with Christ. Each day brings you one step nearer to the heart of God.",
    shortDescription:
      "A 30-Day Journey to Know Christ More Deeply — deeper Bible understanding, stronger faith, and spiritual growth.",
    price: 1997, // $19.97
    coverUrl: "/images/price$19.97.png",
    screenshots: [
      "/images/sc_price$19.97.png",
    ],
    pdfUrl: "/images/Whispers_of_Grace_Typeset.pdf",
    storagePath: "Whispers_of_Grace_Typeset_czsvpo",
    tags: ["Bible Study", "Faith", "Discipleship", "Spiritual Growth"],
    pageCount: 42,
    readingTime: "15 min daily",
    createdAt: new Date("2026-07-01"),
    updatedAt: new Date("2026-07-01"),
  },
  {
    id: "the-power-of-the-seed",
    slug: "the-power-of-the-seed",
    title: "The Hidden Harvest",
    author: "Faith Rising Media",
    description:
      "Discovering God's Work Beyond What You Can See. God is always working — even in the unseen, the silent, and the waiting seasons. This book opens your eyes to the hidden harvest He is preparing in your life right now.",
    shortDescription:
      "Pay as you want — Discovering God's Work Beyond What You Can See.",
    price: 1000, // Default suggested amount $10.00
    isPayWhatYouWant: true,
    minPrice: 100, // Minimum $1.00
    coverUrl: "/images/price_pay_what_you_want.png",
    screenshots: [
      "/images/sc_price_pay_what_you_want.png",
    ],
    pdfUrl: "/images/The_Power_of_the_Seed.pdf",
    storagePath: "The_Power_of_the_Seed_c3184o",
    tags: ["Pay What You Want", "Faith", "God's Timing", "Harvest"],
    pageCount: 38,
    readingTime: "22 min",
    createdAt: new Date("2026-07-10"),
    updatedAt: new Date("2026-07-10"),
  },
  {
    id: "letters-of-grace",
    slug: "letters-of-grace",
    title: "Praying with Power",
    author: "Faith Rising Media",
    description:
      "How to Build a Life-Changing Prayer Life. \"The effective, fervent prayer of a righteous man avails much.\" — James 5:16. Discover how to pray boldly, live powerfully, and walk in God's will through deeper connection, stronger faith, and divine guidance.",
    shortDescription:
      "How to Build a Life-Changing Prayer Life — pray boldly, live powerfully, walk in His will.",
    price: 2497, // $24.97
    coverUrl: "/images/price$24.97.png",
    screenshots: [
      "/images/sc_price$24.97.png",
    ],
    pdfUrl: "/images/Letters_of_Grace_Final.pdf",
    storagePath: "Letters_of_Grace_Final_kc84lj",
    tags: ["Prayer", "Spiritual Strength", "Faith", "Transformed Life"],
    pageCount: 42,
    readingTime: "18 min",
    createdAt: new Date("2026-07-15"),
    updatedAt: new Date("2026-07-15"),
  },
];
