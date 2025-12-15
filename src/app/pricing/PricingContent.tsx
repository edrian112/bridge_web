"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Product = "notes" | "pages";
type Plan = "free" | "basic" | "standard" | "max" | null;

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

// MAX 플랜 통합 혜택 (Notes + Pages)
const MAX_INTEGRATED_FEATURES = [
  "BRIDGE Notes 무제한",
  "BRIDGE Pages 무제한",
  "하나의 구독으로 모든 제품 이용",
];

export default function PricingContent() {
  const [activeProduct, setActiveProduct] = useState<Product>("notes");
  const [selectedPlan, setSelectedPlan] = useState<Plan>("standard");

  const isNotes = activeProduct === "notes";
  const plans = PLANS[activeProduct];
  const features = FEATURES[activeProduct];

  const handleProductChange = (product: Product) => {
    setActiveProduct(product);
    setSelectedPlan("standard"); // Reset to standard when switching products
  };

  const getPlanCardClass = (plan: Plan) => {
    const isSelected = selectedPlan === plan;
    const selectedBg = isNotes ? "bg-notes-light" : "bg-pages-light";
    const selectedBorder = isNotes ? "border-notes" : "border-pages";
    const selectedRing = isNotes ? "ring-notes" : "ring-pages";

    if (isSelected) {
      return `rounded-2xl p-6 border-2 cursor-pointer transition-all ${selectedBg} ${selectedBorder} ring-2 ${selectedRing} ring-offset-2 ${plan === "standard" ? "relative" : ""}`;
    }

    return `bg-background rounded-2xl p-6 border cursor-pointer transition-all border-border hover:border-foreground/30 ${plan === "standard" ? "relative" : ""}`;
  };

  const getColumnHighlightClass = (plan: Plan) => {
    if (selectedPlan !== plan) return "";
    return isNotes ? "bg-notes/10" : "bg-pages/10";
  };

  const getHeaderHighlightClass = (plan: Plan) => {
    if (selectedPlan !== plan) return "";
    return isNotes ? "bg-notes text-white" : "bg-pages text-white";
  };

  return (
    <>
      {/* Product Tabs */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex bg-background-alt rounded-2xl p-1.5 gap-1">
          <button
            onClick={() => handleProductChange("notes")}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
              activeProduct === "notes"
                ? "bg-notes text-white shadow-lg"
                : "text-foreground-light hover:text-foreground hover:bg-background"
            }`}
          >
            <Image
              src="/icons/Notes_icon32.png"
              alt="Notes"
              width={20}
              height={20}
              className="object-contain"
            />
            BRIDGE Notes
            <span
              className={`text-xs px-2 py-0.5 rounded-full ${
                activeProduct === "notes" ? "bg-white/20" : "bg-notes-light text-notes"
              }`}
            >
              출시됨
            </span>
          </button>
          <button
            onClick={() => handleProductChange("pages")}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
              activeProduct === "pages"
                ? "bg-pages text-white shadow-lg"
                : "text-foreground-light hover:text-foreground hover:bg-background"
            }`}
          >
            <Image
              src="/icons/Pages_icon32.png"
              alt="Pages"
              width={20}
              height={20}
              className="object-contain"
            />
            BRIDGE Pages
            <span
              className={`text-xs px-2 py-0.5 rounded-full ${
                activeProduct === "pages" ? "bg-white/20" : "bg-pages-light text-pages"
              }`}
            >
              Coming
            </span>
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {/* Free */}
        <div className={getPlanCardClass("free")} onClick={() => setSelectedPlan("free")}>
          <h3 className="font-semibold text-foreground mb-2">Free</h3>
          <div className="text-3xl font-bold text-foreground mb-1">₩0</div>
          <p className="text-sm text-foreground-light mb-4">매월</p>
          <div className={`text-2xl font-bold mb-4 ${isNotes ? "text-notes" : "text-pages"}`}>
            {plans.free.count}
            <span className="text-sm font-normal text-foreground-light">{plans.free.period}</span>
          </div>
          <Link
            href="/download"
            className={`block w-full py-3 text-center text-white rounded-lg font-medium hover:opacity-90 transition-opacity ${isNotes ? "bg-notes" : "bg-pages"}`}
            onClick={(e) => e.stopPropagation()}
          >
            무료로 시작
          </Link>
        </div>

        {/* Basic */}
        <div className={getPlanCardClass("basic")} onClick={() => setSelectedPlan("basic")}>
          <h3 className="font-semibold text-foreground mb-2">Basic</h3>
          <div className="text-3xl font-bold text-foreground mb-1">₩4,900</div>
          <p className="text-sm text-foreground-light mb-4">1회 구매</p>
          <div className={`text-2xl font-bold mb-4 ${isNotes ? "text-notes" : "text-pages"}`}>
            {plans.basic.count}
          </div>
          {isNotes ? (
            <Link
              href="/checkout?plan=basic30&product=notes"
              className="block w-full py-3 text-center bg-notes text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
              onClick={(e) => e.stopPropagation()}
            >
              ₩4,900 구매
            </Link>
          ) : (
            <Link
              href="/checkout?plan=basic10&product=pages"
              className="block w-full py-3 text-center bg-pages text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
              onClick={(e) => e.stopPropagation()}
            >
              출시 후 구매
            </Link>
          )}
        </div>

        {/* Standard */}
        <div className={getPlanCardClass("standard")} onClick={() => setSelectedPlan("standard")}>
          <div
            className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-white text-xs font-medium rounded-full ${
              isNotes ? "bg-notes" : "bg-pages"
            }`}
          >
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
              onClick={(e) => e.stopPropagation()}
            >
              ₩9,900 구매
            </Link>
          ) : (
            <Link
              href="/checkout?plan=standard30&product=pages"
              className="block w-full py-3 text-center bg-pages text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
              onClick={(e) => e.stopPropagation()}
            >
              출시 후 구매
            </Link>
          )}
        </div>

        {/* MAX */}
        <div className={getPlanCardClass("max")} onClick={() => setSelectedPlan("max")}>
          <h3 className="font-semibold text-foreground mb-2">MAX</h3>
          <div className="text-3xl font-bold text-foreground mb-1">₩29,000</div>
          <p className="text-sm text-foreground-light mb-4">월 구독</p>
          <div className={`text-2xl font-bold ${isNotes ? "text-notes" : "text-pages"}`}>
            {plans.max.count}
            <span className="text-sm font-medium text-bridge ml-1">
              · Notes + Pages
            </span>
          </div>
          <div className="mb-4" />
          {isNotes ? (
            <Link
              href="/checkout?plan=max&product=notes"
              className="block w-full py-3 text-center bg-notes text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
              onClick={(e) => e.stopPropagation()}
            >
              ₩29,000/월 구독
            </Link>
          ) : (
            <Link
              href="/checkout?plan=max&product=pages"
              className="block w-full py-3 text-center bg-pages text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
              onClick={(e) => e.stopPropagation()}
            >
              출시 후 구독
            </Link>
          )}
        </div>
      </div>

      {/* Selected Plan Indicator */}
      {selectedPlan && (
        <div className="text-center mb-6">
          <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
            isNotes ? "bg-notes/10 text-notes" : "bg-pages/10 text-pages"
          }`}>
            <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
            {selectedPlan === "free" && "Free"}
            {selectedPlan === "basic" && "Basic"}
            {selectedPlan === "standard" && "Standard"}
            {selectedPlan === "max" && "MAX"}
            {" "}플랜 기능 비교
          </span>
        </div>
      )}

      {/* Feature Comparison */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 text-center">기능 비교</h2>
        <div className="bg-background rounded-2xl border border-border overflow-hidden overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="bg-background-alt">
                <th className="text-left p-4 font-semibold text-foreground">기능</th>
                <th
                  className={`text-center p-4 font-semibold cursor-pointer transition-all rounded-t-lg ${
                    getHeaderHighlightClass("free") || "text-foreground hover:bg-foreground/5"
                  }`}
                  onClick={() => setSelectedPlan("free")}
                >
                  Free
                </th>
                <th
                  className={`text-center p-4 font-semibold cursor-pointer transition-all rounded-t-lg ${
                    getHeaderHighlightClass("basic") || "text-foreground hover:bg-foreground/5"
                  }`}
                  onClick={() => setSelectedPlan("basic")}
                >
                  Basic
                </th>
                <th
                  className={`text-center p-4 font-semibold cursor-pointer transition-all rounded-t-lg ${
                    getHeaderHighlightClass("standard") || "text-foreground hover:bg-foreground/5"
                  }`}
                  onClick={() => setSelectedPlan("standard")}
                >
                  Standard
                </th>
                <th
                  className={`text-center p-4 font-semibold cursor-pointer transition-all rounded-t-lg ${
                    getHeaderHighlightClass("max") || "text-foreground hover:bg-foreground/5"
                  }`}
                  onClick={() => setSelectedPlan("max")}
                >
                  MAX
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {features.map((feature, index) => (
                <tr key={index}>
                  <td className="p-4 text-foreground">{feature.name}</td>
                  <td className={`p-4 text-center transition-all ${getColumnHighlightClass("free")}`}>
                    {renderFeatureValue(feature.free, isNotes, selectedPlan === "free")}
                  </td>
                  <td className={`p-4 text-center transition-all ${getColumnHighlightClass("basic")}`}>
                    {renderFeatureValue(feature.basic, isNotes, selectedPlan === "basic")}
                  </td>
                  <td className={`p-4 text-center transition-all ${getColumnHighlightClass("standard")}`}>
                    {renderFeatureValue(feature.standard, isNotes, selectedPlan === "standard")}
                  </td>
                  <td className={`p-4 text-center transition-all ${getColumnHighlightClass("max")}`}>
                    {renderFeatureValue(feature.max, isNotes, selectedPlan === "max")}
                  </td>
                </tr>
              ))}
              {/* MAX 플랜 통합 혜택 행 */}
              <tr>
                <td className="p-4 text-foreground">Notes + Pages 통합</td>
                <td className={`p-4 text-center transition-all ${getColumnHighlightClass("free")}`}>
                  {renderFeatureValue(false, isNotes, selectedPlan === "free")}
                </td>
                <td className={`p-4 text-center transition-all ${getColumnHighlightClass("basic")}`}>
                  {renderFeatureValue(false, isNotes, selectedPlan === "basic")}
                </td>
                <td className={`p-4 text-center transition-all ${getColumnHighlightClass("standard")}`}>
                  {renderFeatureValue(false, isNotes, selectedPlan === "standard")}
                </td>
                <td className={`p-4 text-center transition-all ${getColumnHighlightClass("max")}`}>
                  {renderFeatureValue(true, isNotes, selectedPlan === "max")}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* MAX 플랜 통합 혜택 상세 */}
        <div
          className={`mt-4 p-4 rounded-xl border-2 transition-all cursor-pointer ${
            selectedPlan === "max"
              ? "bg-gradient-to-r from-notes/10 via-bridge/15 to-pages/10 border-bridge shadow-lg"
              : "bg-background-alt border-border hover:border-bridge/50"
          }`}
          onClick={() => setSelectedPlan("max")}
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-notes to-pages rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-white text-lg">∞</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h4 className="font-bold text-foreground">MAX 플랜 특별 혜택</h4>
                <span className="px-2 py-0.5 bg-bridge text-white text-xs font-medium rounded-full">
                  Only MAX
                </span>
              </div>
              <div className="grid sm:grid-cols-3 gap-3">
                {MAX_INTEGRATED_FEATURES.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <span className="text-bridge">✓</span>
                    <span className={selectedPlan === "max" ? "text-foreground font-medium" : "text-foreground-light"}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-2 text-xs text-foreground-light">
                MAX 플랜은 BRIDGE Notes와 BRIDGE Pages를 하나의 구독으로 무제한 이용할 수 있는 유일한 플랜입니다.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Important Notes */}
      <div className="p-6 bg-background-alt rounded-2xl border border-border">
        <div className="flex items-start gap-3">
          <span className="text-2xl">💡</span>
          <div>
            <h3 className="font-semibold text-foreground mb-2">알아두세요</h3>
            <ul className="space-y-2 text-foreground-light text-sm">
              <li>
                • <strong>캡처는 항상 무료</strong>입니다. AI 변환 횟수만 차감됩니다.
              </li>
              <li>
                • BRIDGE Notes와 BRIDGE Pages는 <strong>별도 과금</strong>입니다.
              </li>
              <li>
                • <strong>MAX 플랜만</strong> Notes와 Pages가 연동되어 모두 무제한으로 사용 가능합니다.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

function renderFeatureValue(value: boolean | string, isNotes: boolean, isHighlighted: boolean) {
  const baseClass = isHighlighted ? "font-semibold scale-110 inline-block" : "";

  if (value === true) {
    return (
      <span className={`${isNotes ? "text-notes" : "text-pages"} ${baseClass}`}>
        {isHighlighted ? "✓" : "✓"}
      </span>
    );
  }
  if (value === false) {
    return <span className={`text-foreground-light ${baseClass}`}>-</span>;
  }
  return (
    <span className={`${isHighlighted ? (isNotes ? "text-notes" : "text-pages") : "text-foreground-light"} ${baseClass}`}>
      {value}
    </span>
  );
}
