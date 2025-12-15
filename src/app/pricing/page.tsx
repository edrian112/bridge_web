import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Header, Footer } from "@/components";

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
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
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

      {/* Pricing Comparison */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Plan Headers */}
          <div className="grid grid-cols-5 gap-4 mb-8">
            <div className="col-span-1"></div>
            {/* Free */}
            <div className="text-center p-4">
              <h3 className="font-semibold text-foreground mb-2">Free</h3>
              <div className="text-3xl font-bold text-foreground">₩0</div>
              <p className="text-sm text-foreground-light mt-1">매월</p>
            </div>
            {/* Basic */}
            <div className="text-center p-4">
              <h3 className="font-semibold text-foreground mb-2">Basic</h3>
              <div className="text-3xl font-bold text-foreground">₩4,900</div>
              <p className="text-sm text-foreground-light mt-1">1회 구매</p>
            </div>
            {/* Standard */}
            <div className="text-center p-4 bg-bridge-light rounded-t-2xl relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-bridge text-white text-xs font-medium rounded-full">
                인기
              </div>
              <h3 className="font-semibold text-foreground mb-2">Standard</h3>
              <div className="text-3xl font-bold text-foreground">₩9,900</div>
              <p className="text-sm text-foreground-light mt-1">1회 구매</p>
            </div>
            {/* MAX */}
            <div className="text-center p-4">
              <h3 className="font-semibold text-foreground mb-2">MAX</h3>
              <div className="text-3xl font-bold text-foreground">₩29,000</div>
              <p className="text-sm text-foreground-light mt-1">월 구독</p>
              <p className="text-xs text-bridge mt-1">Notes + Pages</p>
            </div>
          </div>

          {/* BRIDGE Notes Section */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-notes rounded-xl flex items-center justify-center">
                <span className="text-xl">⚡</span>
              </div>
              <h2 className="text-2xl font-bold text-foreground">BRIDGE Notes</h2>
              <span className="px-3 py-1 bg-notes-light text-notes text-sm font-medium rounded-full">
                출시됨
              </span>
            </div>
            <div className="grid grid-cols-5 gap-4">
              {/* Row Label */}
              <div className="bg-background-alt rounded-xl p-4">
                <p className="text-foreground-light text-sm">사용 횟수</p>
              </div>
              {/* Free */}
              <div className="bg-background border border-border rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-notes">5회</p>
                <p className="text-sm text-foreground-light">/월</p>
              </div>
              {/* Basic */}
              <div className="bg-background border border-border rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-notes">30회</p>
              </div>
              {/* Standard */}
              <div className="bg-bridge-light border-2 border-bridge rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-notes">70회</p>
              </div>
              {/* MAX */}
              <div className="bg-background border border-border rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-notes">무제한</p>
              </div>
            </div>
          </div>

          {/* BRIDGE Pages Section */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-pages rounded-xl flex items-center justify-center">
                <span className="text-xl">📝</span>
              </div>
              <h2 className="text-2xl font-bold text-foreground">BRIDGE Pages</h2>
              <span className="px-3 py-1 bg-pages-light text-pages text-sm font-medium rounded-full">
                Coming Soon
              </span>
            </div>
            <div className="grid grid-cols-5 gap-4">
              {/* Row Label */}
              <div className="bg-background-alt rounded-xl p-4">
                <p className="text-foreground-light text-sm">사용 횟수</p>
              </div>
              {/* Free */}
              <div className="bg-background border border-border rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-pages">3회</p>
                <p className="text-sm text-foreground-light">/월</p>
              </div>
              {/* Basic */}
              <div className="bg-background border border-border rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-pages">10회</p>
              </div>
              {/* Standard */}
              <div className="bg-bridge-light border-2 border-bridge rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-pages">30회</p>
              </div>
              {/* MAX */}
              <div className="bg-background border border-border rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-pages">무제한</p>
              </div>
            </div>
          </div>

          {/* Feature Comparison */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">기능 비교</h2>
            <div className="bg-background rounded-2xl border border-border overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-background-alt">
                    <th className="text-left p-4 font-semibold text-foreground">기능</th>
                    <th className="text-center p-4 font-semibold text-foreground">Free</th>
                    <th className="text-center p-4 font-semibold text-foreground">Basic</th>
                    <th className="text-center p-4 font-semibold text-foreground bg-bridge-light">Standard</th>
                    <th className="text-center p-4 font-semibold text-foreground">MAX</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {/* 두 클릭 캡처 */}
                  <tr>
                    <td className="p-4 text-foreground">두 클릭 캡처</td>
                    <td className="p-4 text-center text-bridge">✓</td>
                    <td className="p-4 text-center text-bridge">✓</td>
                    <td className="p-4 text-center text-bridge bg-bridge-light/50">✓</td>
                    <td className="p-4 text-center text-bridge">✓</td>
                  </tr>
                  {/* AI 자동 정리 */}
                  <tr>
                    <td className="p-4 text-foreground">AI 자동 정리</td>
                    <td className="p-4 text-center text-bridge">✓</td>
                    <td className="p-4 text-center text-bridge">✓</td>
                    <td className="p-4 text-center text-bridge bg-bridge-light/50">✓</td>
                    <td className="p-4 text-center text-bridge">✓</td>
                  </tr>
                  {/* 히스토리 */}
                  <tr>
                    <td className="p-4 text-foreground">히스토리 저장</td>
                    <td className="p-4 text-center text-foreground-light">3개</td>
                    <td className="p-4 text-center text-foreground-light">10개</td>
                    <td className="p-4 text-center text-foreground-light bg-bridge-light/50">10개</td>
                    <td className="p-4 text-center text-foreground-light">무제한</td>
                  </tr>
                  {/* 템플릿 */}
                  <tr>
                    <td className="p-4 text-foreground">템플릿 (개인화/전문화)</td>
                    <td className="p-4 text-center text-foreground-light">2가지</td>
                    <td className="p-4 text-center text-foreground-light">2가지</td>
                    <td className="p-4 text-center text-foreground-light bg-bridge-light/50">2가지</td>
                    <td className="p-4 text-center text-foreground-light">2가지</td>
                  </tr>
                  {/* AI 모델 선택 */}
                  <tr>
                    <td className="p-4 text-foreground">다른 AI 모델 선택</td>
                    <td className="p-4 text-center text-foreground-light">-</td>
                    <td className="p-4 text-center text-foreground-light">-</td>
                    <td className="p-4 text-center text-bridge bg-bridge-light/50">✓</td>
                    <td className="p-4 text-center text-bridge">✓</td>
                  </tr>
                  {/* SEO 최적화 (Pages) */}
                  <tr>
                    <td className="p-4 text-foreground">
                      SEO 최적화
                      <span className="ml-2 text-xs text-pages bg-pages-light px-2 py-0.5 rounded">Pages</span>
                    </td>
                    <td className="p-4 text-center text-bridge">✓</td>
                    <td className="p-4 text-center text-bridge">✓</td>
                    <td className="p-4 text-center text-bridge bg-bridge-light/50">✓</td>
                    <td className="p-4 text-center text-bridge">✓</td>
                  </tr>
                  {/* 블로그 자동 발행 (Pages) */}
                  <tr>
                    <td className="p-4 text-foreground">
                      블로그 자동 발행
                      <span className="ml-2 text-xs text-pages bg-pages-light px-2 py-0.5 rounded">Pages</span>
                    </td>
                    <td className="p-4 text-center text-foreground-light">-</td>
                    <td className="p-4 text-center text-foreground-light">-</td>
                    <td className="p-4 text-center text-bridge bg-bridge-light/50">✓</td>
                    <td className="p-4 text-center text-bridge">✓</td>
                  </tr>
                  {/* 베타 기능 조기 접근 */}
                  <tr>
                    <td className="p-4 text-foreground">베타 기능 조기 접근</td>
                    <td className="p-4 text-center text-foreground-light">-</td>
                    <td className="p-4 text-center text-foreground-light">-</td>
                    <td className="p-4 text-center text-foreground-light bg-bridge-light/50">-</td>
                    <td className="p-4 text-center text-bridge">✓</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Important Notes */}
          <div className="mt-12 mb-8 p-6 bg-background-alt rounded-2xl border border-border">
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

          {/* CTA Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Free */}
            <div className="bg-background rounded-2xl p-6 border border-border text-center">
              <h3 className="font-semibold text-foreground mb-2">Free</h3>
              <p className="text-sm text-foreground-light mb-4">무료로 체험해보세요</p>
              <Link
                href="/download"
                className="block w-full py-3 bg-foreground/10 text-foreground rounded-lg font-medium hover:bg-foreground/20 transition-colors"
              >
                무료로 시작
              </Link>
            </div>
            {/* Basic */}
            <div className="bg-background rounded-2xl p-6 border border-border text-center">
              <h3 className="font-semibold text-foreground mb-2">Basic</h3>
              <p className="text-sm text-foreground-light mb-4">가벼운 사용자를 위해</p>
              <Link
                href="/checkout?plan=basic30&product=notes"
                className="block w-full py-3 bg-foreground/10 text-foreground rounded-lg font-medium hover:bg-foreground/20 transition-colors"
              >
                ₩4,900 구매
              </Link>
            </div>
            {/* Standard */}
            <div className="bg-bridge-light rounded-2xl p-6 border-2 border-bridge text-center">
              <h3 className="font-semibold text-foreground mb-2">Standard</h3>
              <p className="text-sm text-foreground-light mb-4">대부분의 사용자에게 추천</p>
              <Link
                href="/checkout?plan=standard70&product=notes"
                className="block w-full py-3 bg-bridge text-white rounded-lg font-medium hover:bg-bridge-secondary transition-colors"
              >
                ₩9,900 구매
              </Link>
            </div>
            {/* MAX */}
            <div className="bg-background rounded-2xl p-6 border border-border text-center">
              <h3 className="font-semibold text-foreground mb-2">MAX</h3>
              <p className="text-sm text-foreground-light mb-4">Notes + Pages 무제한</p>
              <Link
                href="/checkout?plan=max&product=notes"
                className="block w-full py-3 bg-foreground/10 text-foreground rounded-lg font-medium hover:bg-foreground/20 transition-colors"
              >
                ₩29,000/월 구독
              </Link>
            </div>
          </div>
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
