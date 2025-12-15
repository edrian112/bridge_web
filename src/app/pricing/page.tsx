import Link from "next/link";
import type { Metadata } from "next";
import { Header, Footer } from "@/components";
import PricingContent from "./PricingContent";

export const metadata: Metadata = {
  title: "Pricing - BRIDGE | From Chat to Brand",
  description:
    "AI 대화를 브랜드로 만드는 BRIDGE의 심플한 가격 정책. 동일한 가격, 제품별 최적화된 사용 횟수.",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            심플한 <span className="text-bridge">가격 정책</span>
          </h1>
          <p className="text-xl text-foreground-light max-w-2xl mx-auto">
            동일한 가격, 제품별 최적화된 사용 횟수.
            <br />
            필요한 만큼만 사용하세요.
          </p>
        </div>
      </section>

      {/* Dynamic Pricing Content */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <PricingContent />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background-alt">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">자주 묻는 질문</h2>
          <div className="space-y-6">
            {/* FAQ 1 */}
            <div className="bg-background rounded-2xl p-6 border border-border">
              <h3 className="font-semibold text-foreground mb-2">
                BRIDGE Notes와 BRIDGE Pages의 가격이 같은데, 횟수가 다른 이유는?
              </h3>
              <p className="text-foreground-light">
                BRIDGE Notes는 짧은 글(SNS용)을 생성하고, BRIDGE Pages는 긴 글(블로그용)을 생성합니다.
                긴 글 생성에는 더 많은 AI 리소스가 필요하기 때문에, 동일한 가격에서 횟수를 조정했습니다.
              </p>
            </div>
            {/* FAQ 2 */}
            <div className="bg-background rounded-2xl p-6 border border-border">
              <h3 className="font-semibold text-foreground mb-2">
                Basic/Standard 플랜은 언제까지 사용할 수 있나요?
              </h3>
              <p className="text-foreground-light">
                Basic과 Standard 플랜은 1회 구매로 해당 횟수만큼 사용할 수 있습니다.
                유효기간 없이 사용 횟수가 소진될 때까지 이용 가능합니다.
              </p>
            </div>
            {/* FAQ 3 */}
            <div className="bg-background rounded-2xl p-6 border border-border">
              <h3 className="font-semibold text-foreground mb-2">
                Free 플랜의 무료 횟수는 매월 리셋되나요?
              </h3>
              <p className="text-foreground-light">
                네, Free 플랜의 무료 사용 횟수(Notes 5회, Pages 3회)는 매월 1일에 리셋됩니다.
                사용하지 않은 횟수는 다음 달로 이월되지 않습니다.
              </p>
            </div>
            {/* FAQ 4 */}
            <div className="bg-background rounded-2xl p-6 border border-border">
              <h3 className="font-semibold text-foreground mb-2">
                MAX 구독을 중단하면 어떻게 되나요?
              </h3>
              <p className="text-foreground-light">
                구독 기간이 만료되면 Free 플랜으로 전환됩니다.
                저장된 히스토리는 유지되지만, Free 플랜의 제한이 적용됩니다.
              </p>
            </div>
            {/* FAQ 5 */}
            <div className="bg-background rounded-2xl p-6 border border-border">
              <h3 className="font-semibold text-foreground mb-2">
                Notes와 Pages는 같이 결제되나요?
              </h3>
              <p className="text-foreground-light">
                아니요, BRIDGE Notes와 BRIDGE Pages는 <strong>완전히 별도의 과금 시스템</strong>입니다.
                각각 독립적으로 플랜을 선택하고 구매합니다.
                단, <strong>MAX 플랜</strong>은 Notes와 Pages가 연동되어 하나의 구독으로 두 제품 모두 무제한 사용이 가능합니다.
              </p>
            </div>
            {/* FAQ 6 */}
            <div className="bg-background rounded-2xl p-6 border border-border">
              <h3 className="font-semibold text-foreground mb-2">
                캡처도 횟수에 포함되나요?
              </h3>
              <p className="text-foreground-light">
                아니요, <strong>캡처는 항상 무료</strong>입니다.
                AI 변환 기능(대화 정리, 콘텐츠 생성)을 사용할 때만 횟수가 차감됩니다.
                마음껏 캡처하고, 필요할 때만 AI 변환을 사용하세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            지금 무료로 시작하세요
          </h2>
          <p className="text-lg text-foreground-light mb-10">
            매월 무료로 시작. 신용카드 필요 없음. 언제든 업그레이드 가능.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/download"
              className="px-8 py-4 bg-bridge text-white rounded-xl font-semibold text-lg hover:bg-bridge-secondary transition-colors shadow-lg shadow-bridge/25"
            >
              무료로 다운로드
            </Link>
            <Link
              href="/notes"
              className="px-8 py-4 bg-background border-2 border-notes text-notes rounded-xl font-semibold text-lg hover:bg-notes-light transition-colors"
            >
              Notes 자세히 보기
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
