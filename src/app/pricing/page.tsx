import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "가격 정책 - BRIDGE | From Chat to Brand",
  description:
    "AI 대화를 브랜드로 만드는 BRIDGE의 심플한 가격 정책. 동일한 가격, 제품별 최적화된 사용 횟수.",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/icons/bridge-icon.svg" alt="BRIDGE" width={32} height={32} className="rounded-lg" />
              <span className="font-semibold text-xl text-foreground">BRIDGE</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/notes" className="text-foreground-light hover:text-notes transition-colors">
                BRIDGE Notes
              </Link>
              <Link href="/pages" className="text-foreground-light hover:text-pages transition-colors">
                BRIDGE Pages
              </Link>
              <Link href="/pricing" className="text-bridge font-medium">
                가격
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/download"
                className="hidden sm:inline-flex px-4 py-2 bg-bridge text-white rounded-lg font-medium hover:bg-bridge-secondary transition-colors"
              >
                시작하기
              </Link>
            </div>
          </div>
        </div>
      </nav>

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
              <div className="text-3xl font-bold text-foreground">₩5,000</div>
              <p className="text-sm text-foreground-light mt-1">1회 구매</p>
            </div>
            {/* Standard */}
            <div className="text-center p-4 bg-bridge-light rounded-t-2xl relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-bridge text-white text-xs font-medium rounded-full">
                인기
              </div>
              <h3 className="font-semibold text-foreground mb-2">Standard</h3>
              <div className="text-3xl font-bold text-foreground">₩10,000</div>
              <p className="text-sm text-foreground-light mt-1">1회 구매</p>
            </div>
            {/* MAX */}
            <div className="text-center p-4">
              <h3 className="font-semibold text-foreground mb-2">MAX</h3>
              <div className="text-3xl font-bold text-foreground">₩29,000</div>
              <p className="text-sm text-foreground-light mt-1">월 구독</p>
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
                <p className="text-2xl font-bold text-pages">5회</p>
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
                    <td className="p-4 text-foreground">템플릿</td>
                    <td className="p-4 text-center text-foreground-light">기본</td>
                    <td className="p-4 text-center text-bridge">모든 템플릿</td>
                    <td className="p-4 text-center text-bridge bg-bridge-light/50">모든 템플릿</td>
                    <td className="p-4 text-center text-bridge">모든 템플릿</td>
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
                    <td className="p-4 text-center text-foreground-light">-</td>
                    <td className="p-4 text-center text-foreground-light">-</td>
                    <td className="p-4 text-center text-bridge bg-bridge-light/50">✓</td>
                    <td className="p-4 text-center text-bridge">✓</td>
                  </tr>
                  {/* 블로그 자동 발행 (Pages) */}
                  <tr>
                    <td className="p-4 text-foreground">
                      블로그 자동 발행
                      <span className="ml-2 text-xs text-pages bg-pages-light px-2 py-0.5 rounded">Pages</span>
                    </td>
                    <td className="p-4 text-center text-foreground-light">Tistory</td>
                    <td className="p-4 text-center text-foreground-light">Tistory</td>
                    <td className="p-4 text-center text-bridge bg-bridge-light/50">+ Medium</td>
                    <td className="p-4 text-center text-bridge">모든 플랫폼</td>
                  </tr>
                  {/* 우선 지원 */}
                  <tr>
                    <td className="p-4 text-foreground">우선 지원</td>
                    <td className="p-4 text-center text-foreground-light">-</td>
                    <td className="p-4 text-center text-foreground-light">-</td>
                    <td className="p-4 text-center text-foreground-light bg-bridge-light/50">-</td>
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

          {/* CTA Buttons */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                href="#"
                className="block w-full py-3 bg-foreground/10 text-foreground rounded-lg font-medium hover:bg-foreground/20 transition-colors"
              >
                ₩5,000 구매
              </Link>
            </div>
            {/* Standard */}
            <div className="bg-bridge-light rounded-2xl p-6 border-2 border-bridge text-center">
              <h3 className="font-semibold text-foreground mb-2">Standard</h3>
              <p className="text-sm text-foreground-light mb-4">대부분의 사용자에게 추천</p>
              <Link
                href="#"
                className="block w-full py-3 bg-bridge text-white rounded-lg font-medium hover:bg-bridge-secondary transition-colors"
              >
                ₩10,000 구매
              </Link>
            </div>
            {/* MAX */}
            <div className="bg-background rounded-2xl p-6 border border-border text-center">
              <h3 className="font-semibold text-foreground mb-2">MAX</h3>
              <p className="text-sm text-foreground-light mb-4">파워 유저를 위해</p>
              <Link
                href="#"
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
                Free 플랜의 5회는 매월 리셋되나요?
              </h3>
              <p className="text-foreground-light">
                네, Free 플랜의 5회 무료 사용은 매월 1일에 리셋됩니다.
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
                Notes와 Pages를 함께 사용하면 할인이 있나요?
              </h3>
              <p className="text-foreground-light">
                현재는 별도의 번들 할인이 없습니다. 단, MAX 플랜은 Notes와 Pages 모두에서 무제한으로 사용 가능하므로,
                두 제품을 자주 사용하신다면 MAX 플랜을 추천드립니다.
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
            매월 5회 무료. 신용카드 필요 없음. 언제든 업그레이드 가능.
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

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-foreground text-background">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <Image src="/icons/bridge-icon.svg" alt="BRIDGE" width={32} height={32} className="rounded-lg" />
              <span className="font-semibold text-xl">BRIDGE</span>
            </div>
            <div className="flex gap-8 text-sm">
              <Link href="/notes" className="hover:text-notes transition-colors">
                Notes
              </Link>
              <Link href="/pages" className="hover:text-pages transition-colors">
                Pages
              </Link>
              <Link href="/pricing" className="hover:text-bridge transition-colors">
                가격
              </Link>
              <Link href="/docs" className="hover:text-bridge transition-colors">
                문서
              </Link>
            </div>
            <p className="text-sm opacity-70">© 2025 BRIDGE. From Chat to Brand.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
