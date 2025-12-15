"use client";

import { useState } from "react";
import Link from "next/link";

type Product = "notes" | "pages";

const PLANS = {
  notes: {
    free: { count: "5회", period: "/월" },
    basic: { count: "30회", period: "" },
    standard: { count: "70회", period: "" },
    max: { count: "무제한", period: "" },
  },
  pages: {
    free: { count: "3회", period: "/월" },
    basic: { count: "10회", period: "" },
    standard: { count: "30회", period: "" },
    max: { count: "무제한", period: "" },
  },
};

const FEATURES = {
  notes: [
    { name: "두 클릭 캡처", free: true, basic: true, standard: true, max: true },
    { name: "AI 자동 정리", free: true, basic: true, standard: true, max: true },
    { name: "히스토리 저장", free: "3개", basic: "10개", standard: "10개", max: "무제한" },
    { name: "템플릿 (개인화/전문화)", free: "2가지", basic: "2가지", standard: "2가지", max: "2가지" },
    { name: "다른 AI 모델 선택", free: false, basic: false, standard: true, max: true },
    { name: "베타 기능 조기 접근", free: false, basic: false, standard: false, max: true },
  ],
  pages: [
    { name: "두 클릭 캡처", free: true, basic: true, standard: true, max: true },
    { name: "AI 블로그 확장", free: true, basic: true, standard: true, max: true },
    { name: "히스토리 저장", free: "3개", basic: "10개", standard: "10개", max: "무제한" },
    { name: "SEO 최적화", free: true, basic: true, standard: true, max: true },
    { name: "블로그 자동 발행", free: false, basic: false, standard: true, max: true },
    { name: "다른 AI 모델 선택", free: false, basic: false, standard: true, max: true },
    { name: "베타 기능 조기 접근", free: false, basic: false, standard: false, max: true },
  ],
};

export default function PricingContent() {
  const [activeProduct, setActiveProduct] = useState<Product>("notes");

  const isNotes = activeProduct === "notes";
  const plans = PLANS[activeProduct];
  const features = FEATURES[activeProduct];

  return (
    <>
      {/* Product Tabs */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex bg-background-alt rounded-2xl p-1.5 gap-1">
          <button
            onClick={() => setActiveProduct("notes")}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
              activeProduct === "notes"
                ? "bg-notes text-white shadow-lg"
                : "text-foreground-light hover:text-foreground hover:bg-background"
            }`}
          >
            <span className="text-lg">⚡</span>
            BRIDGE Notes
            <span className={`text-xs px-2 py-0.5 rounded-full ${
              activeProduct === "notes" ? "bg-white/20" : "bg-notes-light text-notes"
            }`}>
              출시됨
            </span>
          </button>
          <button
            onClick={() => setActiveProduct("pages")}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
              activeProduct === "pages"
                ? "bg-pages text-white shadow-lg"
                : "text-foreground-light hover:text-foreground hover:bg-background"
            }`}
          >
            <span className="text-lg">📝</span>
            BRIDGE Pages
            <span className={`text-xs px-2 py-0.5 rounded-full ${
              activeProduct === "pages" ? "bg-white/20" : "bg-pages-light text-pages"
            }`}>
              Coming
            </span>
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {/* Free */}
        <div className="bg-background rounded-2xl p-6 border border-border">
          <h3 className="font-semibold text-foreground mb-2">Free</h3>
          <div className="text-3xl font-bold text-foreground mb-1">₩0</div>
          <p className="text-sm text-foreground-light mb-4">매월</p>
          <div className={`text-2xl font-bold mb-4 ${isNotes ? "text-notes" : "text-pages"}`}>
            {plans.free.count}
            <span className="text-sm font-normal text-foreground-light">{plans.free.period}</span>
          </div>
          <Link
            href="/download"
            className="block w-full py-3 text-center bg-foreground/10 text-foreground rounded-lg font-medium hover:bg-foreground/20 transition-colors"
          >
            무료로 시작
          </Link>
        </div>

        {/* Basic */}
        <div className="bg-background rounded-2xl p-6 border border-border">
          <h3 className="font-semibold text-foreground mb-2">Basic</h3>
          <div className="text-3xl font-bold text-foreground mb-1">₩4,900</div>
          <p className="text-sm text-foreground-light mb-4">1회 구매</p>
          <div className={`text-2xl font-bold mb-4 ${isNotes ? "text-notes" : "text-pages"}`}>
            {plans.basic.count}
          </div>
          {isNotes ? (
            <Link
              href="/checkout?plan=basic30&product=notes"
              className="block w-full py-3 text-center bg-foreground/10 text-foreground rounded-lg font-medium hover:bg-foreground/20 transition-colors"
            >
              ₩4,900 구매
            </Link>
          ) : (
            <span className="block w-full py-3 text-center bg-pages/10 text-pages rounded-lg font-medium">
              출시 후 구매
            </span>
          )}
        </div>

        {/* Standard */}
        <div className={`rounded-2xl p-6 border-2 relative ${isNotes ? "bg-notes-light border-notes" : "bg-pages-light border-pages"}`}>
          <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-white text-xs font-medium rounded-full ${isNotes ? "bg-notes" : "bg-pages"}`}>
            인기
          </div>
          <h3 className="font-semibold text-foreground mb-2">Standard</h3>
          <div className="text-3xl font-bold text-foreground mb-1">₩9,900</div>
          <p className="text-sm text-foreground-light mb-4">1회 구매</p>
          <div className={`text-2xl font-bold mb-4 ${isNotes ? "text-notes" : "text-pages"}`}>
            {plans.standard.count}
          </div>
          {isNotes ? (
            <Link
              href="/checkout?plan=standard70&product=notes"
              className="block w-full py-3 text-center bg-notes text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              ₩9,900 구매
            </Link>
          ) : (
            <span className="block w-full py-3 text-center bg-pages text-white rounded-lg font-medium">
              출시 후 구매
            </span>
          )}
        </div>

        {/* MAX */}
        <div className="bg-background rounded-2xl p-6 border border-border">
          <h3 className="font-semibold text-foreground mb-2">MAX</h3>
          <div className="text-3xl font-bold text-foreground mb-1">₩29,000</div>
          <p className="text-sm text-foreground-light mb-4">월 구독</p>
          <div className={`text-2xl font-bold mb-2 ${isNotes ? "text-notes" : "text-pages"}`}>
            {plans.max.count}
          </div>
          <p className="text-xs text-bridge mb-4">Notes + Pages 통합</p>
          {isNotes ? (
            <Link
              href="/checkout?plan=max&product=notes"
              className="block w-full py-3 text-center bg-foreground/10 text-foreground rounded-lg font-medium hover:bg-foreground/20 transition-colors"
            >
              ₩29,000/월 구독
            </Link>
          ) : (
            <span className="block w-full py-3 text-center bg-pages/10 text-pages rounded-lg font-medium">
              출시 후 구독
            </span>
          )}
        </div>
      </div>

      {/* Feature Comparison */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 text-center">기능 비교</h2>
        <div className="bg-background rounded-2xl border border-border overflow-hidden overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="bg-background-alt">
                <th className="text-left p-4 font-semibold text-foreground">기능</th>
                <th className="text-center p-4 font-semibold text-foreground">Free</th>
                <th className="text-center p-4 font-semibold text-foreground">Basic</th>
                <th className={`text-center p-4 font-semibold text-foreground ${isNotes ? "bg-notes-light" : "bg-pages-light"}`}>Standard</th>
                <th className="text-center p-4 font-semibold text-foreground">MAX</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {features.map((feature, index) => (
                <tr key={index}>
                  <td className="p-4 text-foreground">{feature.name}</td>
                  <td className="p-4 text-center">
                    {renderFeatureValue(feature.free, isNotes)}
                  </td>
                  <td className="p-4 text-center">
                    {renderFeatureValue(feature.basic, isNotes)}
                  </td>
                  <td className={`p-4 text-center ${isNotes ? "bg-notes-light/50" : "bg-pages-light/50"}`}>
                    {renderFeatureValue(feature.standard, isNotes)}
                  </td>
                  <td className="p-4 text-center">
                    {renderFeatureValue(feature.max, isNotes)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Important Notes */}
      <div className="p-6 bg-background-alt rounded-2xl border border-border">
        <div className="flex items-start gap-3">
          <span className="text-2xl">💡</span>
          <div>
            <h3 className="font-semibold text-foreground mb-2">알아두세요</h3>
            <ul className="space-y-2 text-foreground-light text-sm">
              <li>• <strong>캡처는 항상 무료</strong>입니다. AI 변환 횟수만 차감됩니다.</li>
              <li>• BRIDGE Notes와 BRIDGE Pages는 <strong>별도 과금</strong>입니다.</li>
              <li>• <strong>MAX 플랜만</strong> Notes와 Pages가 연동되어 모두 무제한으로 사용 가능합니다.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

function renderFeatureValue(value: boolean | string, isNotes: boolean) {
  if (value === true) {
    return <span className={isNotes ? "text-notes" : "text-pages"}>✓</span>;
  }
  if (value === false) {
    return <span className="text-foreground-light">-</span>;
  }
  return <span className="text-foreground-light">{value}</span>;
}
