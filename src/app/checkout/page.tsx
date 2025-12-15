"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import { Header, Footer } from "@/components";

// 플랜 정보 데이터
const PLANS = {
  notes: {
    free: { name: "Free", price: 0, priceLabel: "무료", usage: "5회/월", period: "매월", history: "3개" },
    basic30: { name: "Basic 30", price: 4900, priceLabel: "₩4,900", usage: "30회", period: "1회 구매", history: "10개" },
    standard70: { name: "Standard 70", price: 9900, priceLabel: "₩9,900", usage: "70회", period: "1회 구매", history: "10개" },
    max: { name: "MAX", price: 29000, priceLabel: "₩29,000", usage: "무제한", period: "월 구독", history: "무제한" },
  },
  pages: {
    free: { name: "Free", price: 0, priceLabel: "무료", usage: "3회/월", period: "매월", history: "3개" },
    basic10: { name: "Basic 10", price: 4900, priceLabel: "₩4,900", usage: "10회", period: "1회 구매", history: "10개" },
    standard30: { name: "Standard 30", price: 9900, priceLabel: "₩9,900", usage: "30회", period: "1회 구매", history: "10개" },
    max: { name: "MAX", price: 29000, priceLabel: "₩29,000", usage: "무제한", period: "월 구독", history: "무제한" },
  },
};

// 제품 이름 매핑
const PRODUCT_NAMES: Record<string, string> = {
  notes: "BRIDGE Notes",
  pages: "BRIDGE Pages",
};

function CheckoutContent() {
  const searchParams = useSearchParams();
  const planId = searchParams.get("plan") || "";
  const product = (searchParams.get("product") || "notes") as "notes" | "pages";

  // 플랜 ID에서 플랜 키 추출 (예: "standard70" -> "standard70", "basic30" -> "basic30")
  const planKey = planId.toLowerCase();
  const productPlans = PLANS[product] || PLANS.notes;
  const plan = (productPlans as Record<string, typeof PLANS.notes.free>)[planKey];

  // 플랜을 찾지 못한 경우
  if (!plan) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto text-center">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">❌</span>
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-4">
              플랜을 찾을 수 없습니다
            </h1>
            <p className="text-foreground-light mb-8">
              요청하신 플랜 정보가 올바르지 않습니다.
            </p>
            <Link
              href="/pricing"
              className="inline-flex px-6 py-3 bg-bridge text-white rounded-xl font-medium hover:bg-bridge-secondary transition-colors"
            >
              가격 페이지로 돌아가기
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  const productName = PRODUCT_NAMES[product] || "BRIDGE Notes";
  const isSubscription = planKey === "max";

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* 페이지 타이틀 */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              결제하기
            </h1>
            <p className="text-foreground-light">
              선택하신 플랜을 확인하고 결제를 진행해주세요.
            </p>
          </div>

          {/* 선택된 플랜 정보 카드 */}
          <div className="bg-background rounded-2xl border-2 border-bridge p-8 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center overflow-hidden">
                <Image
                  src={product === "notes" ? "/icons/Notes_icon64.png" : "/icons/Pages_icon64.png"}
                  alt={product === "notes" ? "BRIDGE Notes" : "BRIDGE Pages"}
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-sm text-foreground-light">{productName}</p>
                <h2 className="text-2xl font-bold text-foreground">{plan.name} 플랜</h2>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center py-3 border-b border-border">
                <span className="text-foreground-light">사용 횟수</span>
                <span className="font-semibold text-foreground">{plan.usage}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border">
                <span className="text-foreground-light">결제 유형</span>
                <span className="font-semibold text-foreground">{plan.period}</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-foreground-light">결제 금액</span>
                <span className="text-3xl font-bold text-bridge">{plan.priceLabel}</span>
              </div>
            </div>

            {isSubscription && (
              <div className="bg-bridge-light rounded-xl p-4 mb-6">
                <p className="text-sm text-foreground">
                  <span className="font-semibold">구독 플랜 안내:</span> MAX 플랜은 매월 자동 결제되며,
                  언제든지 해지할 수 있습니다. Notes와 Pages 모두 무제한으로 사용 가능합니다.
                </p>
              </div>
            )}
          </div>

          {/* 베타 기간 안내 */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8">
            <div className="flex items-start gap-4">
              <span className="text-3xl">🚧</span>
              <div>
                <h3 className="font-semibold text-amber-800 mb-2">
                  결제 시스템 준비 중
                </h3>
                <p className="text-amber-700 text-sm mb-4">
                  현재 베타 서비스 기간으로, 결제 시스템이 아직 준비 중입니다.
                  <br />
                  베타 기간 동안은 <strong>무료로 서비스를 이용</strong>하실 수 있습니다!
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/download"
                    className="inline-flex justify-center px-6 py-3 bg-bridge text-white rounded-xl font-medium hover:bg-bridge-secondary transition-colors"
                  >
                    무료로 시작하기
                  </Link>
                  <Link
                    href="/pricing"
                    className="inline-flex justify-center px-6 py-3 bg-white border border-amber-300 text-amber-800 rounded-xl font-medium hover:bg-amber-50 transition-colors"
                  >
                    가격 페이지로 돌아가기
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 추후 결제 시스템 연동 시 사용될 영역 (주석 처리) */}
          {/*
          <div className="bg-background rounded-2xl border border-border p-8 mb-8">
            <h3 className="font-semibold text-foreground mb-4">로그인 필요</h3>
            <p className="text-foreground-light text-sm mb-4">
              결제를 진행하려면 먼저 로그인해주세요.
            </p>
            <button className="w-full py-3 bg-white border border-border rounded-xl font-medium text-foreground hover:bg-background-alt transition-colors flex items-center justify-center gap-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Google로 로그인
            </button>
          </div>

          <button className="w-full py-4 bg-bridge text-white rounded-xl font-semibold text-lg hover:bg-bridge-secondary transition-colors">
            {isSubscription ? "구독 시작하기" : "결제하기"}
          </button>
          */}

          {/* 안내 사항 */}
          <div className="text-center text-sm text-foreground-light">
            <p>
              결제 시 <Link href="/terms" className="text-bridge hover:underline">이용약관</Link> 및{" "}
              <Link href="/privacy" className="text-bridge hover:underline">개인정보처리방침</Link>에 동의하게 됩니다.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// Loading fallback
function CheckoutLoading() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="animate-pulse">
            <div className="h-10 bg-background-alt rounded w-48 mx-auto mb-4"></div>
            <div className="h-6 bg-background-alt rounded w-64 mx-auto mb-12"></div>
            <div className="bg-background-alt rounded-2xl h-80"></div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<CheckoutLoading />}>
      <CheckoutContent />
    </Suspense>
  );
}
