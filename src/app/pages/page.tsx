import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BRIDGE Pages - AI 대화를 블로그 콘텐츠로",
  description:
    "AI 대화를 SEO 최적화된 블로그 포스트로 확장. 당신의 대화가 브랜드가 됩니다. From Chat to Brand.",
};

export default function PagesPage() {
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
              <Link href="/pages" className="text-pages font-medium">
                BRIDGE Pages
              </Link>
              <Link href="/pricing" className="text-foreground-light hover:text-foreground transition-colors">
                가격
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="#waitlist"
                className="hidden sm:inline-flex px-4 py-2 bg-pages text-white rounded-lg font-medium hover:bg-pages-secondary transition-colors"
              >
                출시 알림
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-pages-light">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-pages/10 rounded-full text-pages text-sm font-medium mb-6">
                <Image src="/icons/Pages_icon48.png" alt="Pages" width={24} height={24} className="rounded" />
                <span>블로그 콘텐츠 생산기 · Coming Soon</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
                AI 대화를<br />
                <span className="text-pages">블로그 자산</span>으로
              </h1>
              <p className="text-xl text-foreground-light mb-8">
                두 클릭으로 캡처한 AI 대화를 SEO 최적화된 블로그로 확장하세요.
                <strong className="text-foreground block mt-2">당신의 대화가 검색되는 브랜드가 됩니다.</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#waitlist"
                  className="px-8 py-4 bg-pages text-white rounded-xl font-semibold text-lg hover:bg-pages-secondary transition-colors shadow-lg shadow-pages/25"
                >
                  출시 알림 받기
                </Link>
                <Link
                  href="/notes"
                  className="px-8 py-4 bg-background border-2 border-pages/30 text-pages rounded-xl font-semibold text-lg hover:bg-pages/5 transition-colors"
                >
                  Start with BRIDGE Notes
                </Link>
              </div>
            </div>
            <div className="bg-background rounded-2xl shadow-2xl p-8 border border-border">
              {/* Preview Placeholder */}
              <div className="aspect-video bg-pages/10 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📚</div>
                  <p className="text-foreground-light">블로그 자동 생성</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              BRIDGE Pages의 가치
            </h2>
            <p className="text-lg text-foreground-light max-w-2xl mx-auto">
              AI 대화에서 시작해 영구적인 콘텐츠 자산으로
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Depth */}
            <div className="text-center p-8 bg-pages-light rounded-2xl">
              <div className="w-16 h-16 bg-pages rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🌊</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">깊이 (Depth)</h3>
              <p className="text-foreground-light">
                AI 대화를 심도 있는 블로그 콘텐츠로 확장합니다.
                단순 복사가 아닌, 논리적 흐름을 갖춘 긴 글로 변환됩니다.
              </p>
            </div>
            {/* Asset */}
            <div className="text-center p-8 bg-pages-light rounded-2xl">
              <div className="w-16 h-16 bg-pages rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">💎</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">자산화 (Asset)</h3>
              <p className="text-foreground-light">
                휘발성 SNS 포스트를 넘어, 검색 트래픽을 유입시키는
                영구적인 콘텐츠 자산을 구축하세요.
              </p>
            </div>
            {/* Flexibility */}
            <div className="text-center p-8 bg-pages-light rounded-2xl">
              <div className="w-16 h-16 bg-pages rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">유연성 (Flexibility)</h3>
              <p className="text-foreground-light">
                직접 AI 대화를 캡처하거나, BRIDGE Notes에서 만든 글을
                불러와 확장할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Input Methods Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background-alt">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              두 가지 입력 방식
            </h2>
            <p className="text-lg text-foreground-light max-w-2xl mx-auto">
              상황에 맞게 선택하세요
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Direct Capture */}
            <div className="bg-background rounded-2xl p-8 border-2 border-pages">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-pages text-white text-sm font-medium rounded-full mb-6">
                Primary
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">직접 캡처</h3>
              <p className="text-foreground-light mb-6">
                BRIDGE Notes와 동일한 두 클릭 캡처 방식입니다.
                AI 대화에서 시작 메시지 클릭 → 끝 메시지 클릭으로 바로 긴 글 확장 프로세스로 진행됩니다.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-foreground">
                  <span className="text-pages">✓</span>
                  Same two-click UX as BRIDGE Notes
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <span className="text-pages">✓</span>
                  바로 블로그 확장 시작
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <span className="text-pages">✓</span>
                  빠른 워크플로우
                </li>
              </ul>
            </div>
            {/* Notes Import */}
            <div className="bg-background rounded-2xl p-8 border border-border">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-notes/20 text-notes text-sm font-medium rounded-full mb-6">
                Optional
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">BRIDGE Notes 연동</h3>
              <p className="text-foreground-light mb-6">
                BRIDGE Notes에서 만든 짧은 글을 불러와 확장할 수 있습니다.
                SNS에서 검증된(반응 좋은) 글을 긴 글로 확장하세요.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-foreground">
                  <span className="text-notes">✓</span>
                  검증된 아이디어 활용
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <span className="text-notes">✓</span>
                  SNS 반응 기반 우선순위
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <span className="text-notes">✓</span>
                  높은 성공률
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              핵심 기능
            </h2>
            <p className="text-lg text-foreground-light max-w-2xl mx-auto">
              콘텐츠 제작의 모든 단계를 지원합니다
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="p-6 bg-background rounded-2xl border border-border hover:border-pages/30 transition-colors">
              <div className="w-12 h-12 bg-pages-light rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">👆</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">두 클릭 캡처</h3>
              <p className="text-sm text-foreground-light">
                Same intuitive capture as BRIDGE Notes
              </p>
            </div>
            {/* Feature 2 */}
            <div className="p-6 bg-background rounded-2xl border border-border hover:border-pages/30 transition-colors">
              <div className="w-12 h-12 bg-pages-light rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">AI 기반 확장</h3>
              <p className="text-sm text-foreground-light">
                목차 구성 및 논리적 흐름 자동 생성
              </p>
            </div>
            {/* Feature 3 */}
            <div className="p-6 bg-background rounded-2xl border border-border hover:border-pages/30 transition-colors">
              <div className="w-12 h-12 bg-pages-light rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">SEO 최적화</h3>
              <p className="text-sm text-foreground-light">
                키워드 추출 및 메타 태그 자동 생성
              </p>
            </div>
            {/* Feature 4 */}
            <div className="p-6 bg-background rounded-2xl border border-border hover:border-pages/30 transition-colors">
              <div className="w-12 h-12 bg-pages-light rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">자동 발행</h3>
              <p className="text-sm text-foreground-light">
                Tistory, Medium 등 자동 발행
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background-alt">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              워크플로우
            </h2>
            <p className="text-lg text-foreground-light max-w-2xl mx-auto">
              AI 대화에서 블로그까지, 4단계
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
            {/* Step 1 */}
            <div className="text-center flex-1 max-w-[140px]">
              <div className="w-12 h-12 bg-pages rounded-full flex items-center justify-center mx-auto mb-3 text-white text-lg font-bold">
                1
              </div>
              <h4 className="font-semibold text-foreground text-sm mb-1">캡처</h4>
              <p className="text-xs text-foreground-light">
                두 클릭으로 범위 선택
              </p>
            </div>
            {/* Arrow */}
            <div className="hidden md:block text-xl text-foreground-light">→</div>
            {/* Step 2 */}
            <div className="text-center flex-1 max-w-[140px]">
              <div className="w-12 h-12 bg-pages rounded-full flex items-center justify-center mx-auto mb-3 text-white text-lg font-bold">
                2
              </div>
              <h4 className="font-semibold text-foreground text-sm mb-1">확장</h4>
              <p className="text-xs text-foreground-light">
                AI가 목차와 초안 생성
              </p>
            </div>
            {/* Arrow */}
            <div className="hidden md:block text-xl text-foreground-light">→</div>
            {/* Step 3 */}
            <div className="text-center flex-1 max-w-[140px]">
              <div className="w-12 h-12 bg-pages rounded-full flex items-center justify-center mx-auto mb-3 text-white text-lg font-bold">
                3
              </div>
              <h4 className="font-semibold text-foreground text-sm mb-1">편집</h4>
              <p className="text-xs text-foreground-light">
                검토하고 수정
              </p>
            </div>
            {/* Arrow */}
            <div className="hidden md:block text-xl text-foreground-light">→</div>
            {/* Step 4 */}
            <div className="text-center flex-1 max-w-[140px]">
              <div className="w-12 h-12 bg-pages rounded-full flex items-center justify-center mx-auto mb-3 text-white text-lg font-bold">
                4
              </div>
              <h4 className="font-semibold text-foreground text-sm mb-1">발행</h4>
              <p className="text-xs text-foreground-light">
                블로그에 자동 발행
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              가격 정책
            </h2>
            <p className="text-lg text-foreground-light max-w-2xl mx-auto">
              Same price as BRIDGE Notes, optimized for long-form content
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Free */}
            <div className="bg-background rounded-2xl p-6 border border-border">
              <h4 className="font-semibold text-foreground mb-2">Free</h4>
              <div className="text-3xl font-bold text-foreground mb-4">₩0</div>
              <p className="text-pages font-medium mb-4">5회/월</p>
              <ul className="space-y-2 text-sm text-foreground-light mb-6">
                <li>✓ 기본 AI 확장</li>
                <li>✓ Tistory 발행</li>
              </ul>
              <span className="block w-full py-3 text-center bg-pages/10 text-pages rounded-lg font-medium">
                출시 후 시작
              </span>
            </div>
            {/* Basic10 */}
            <div className="bg-background rounded-2xl p-6 border border-border">
              <h4 className="font-semibold text-foreground mb-2">Basic10</h4>
              <div className="text-3xl font-bold text-foreground mb-4">₩5,000</div>
              <p className="text-pages font-medium mb-4">10회</p>
              <ul className="space-y-2 text-sm text-foreground-light mb-6">
                <li>✓ 모든 템플릿</li>
                <li>✓ 히스토리 10개</li>
              </ul>
              <span className="block w-full py-3 text-center bg-pages/10 text-pages rounded-lg font-medium">
                출시 후 구매
              </span>
            </div>
            {/* Standard30 */}
            <div className="bg-pages-light rounded-2xl p-6 border-2 border-pages relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-pages text-white text-xs font-medium rounded-full">
                추천
              </div>
              <h4 className="font-semibold text-foreground mb-2">Standard30</h4>
              <div className="text-3xl font-bold text-foreground mb-4">₩10,000</div>
              <p className="text-pages font-medium mb-4">30회</p>
              <ul className="space-y-2 text-sm text-foreground-light mb-6">
                <li>✓ SEO 최적화</li>
                <li>✓ Medium 발행</li>
                <li>✓ 다른 AI 모델</li>
              </ul>
              <span className="block w-full py-3 text-center bg-pages text-white rounded-lg font-medium">
                출시 후 구매
              </span>
            </div>
            {/* MAX */}
            <div className="bg-background rounded-2xl p-6 border border-border">
              <h4 className="font-semibold text-foreground mb-2">MAX</h4>
              <div className="text-3xl font-bold text-foreground mb-4">
                ₩29,000<span className="text-lg font-normal">/월</span>
              </div>
              <p className="text-pages font-medium mb-4">무제한</p>
              <ul className="space-y-2 text-sm text-foreground-light mb-6">
                <li>✓ 모든 기능</li>
                <li>✓ 우선 지원</li>
                <li>✓ 베타 기능</li>
              </ul>
              <span className="block w-full py-3 text-center bg-pages/10 text-pages rounded-lg font-medium">
                출시 후 구독
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-20 px-4 sm:px-6 lg:px-8 bg-pages">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            AI 대화를 검색되는 브랜드로
          </h2>
          <p className="text-xl text-white/80 mb-10">
            BRIDGE Pages 출시 알림을 받고, 당신의 대화를 블로그 자산으로 만드세요.
            <br />
            얼리버드 혜택이 제공될 예정입니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="이메일 주소"
              className="flex-1 px-6 py-4 rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-8 py-4 bg-white text-pages rounded-xl font-semibold hover:bg-pages-light transition-colors">
              알림 받기
            </button>
          </div>
          <p className="mt-4 text-sm text-white/60">
            스팸 메일을 보내지 않습니다. 출시 알림만 보내드립니다.
          </p>
        </div>
      </section>

      {/* Notes CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-notes-light">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Pages를 기다리는 동안, SNS 브랜딩부터
          </h2>
          <p className="text-lg text-foreground-light mb-10">
            BRIDGE Notes로 먼저 AI 대화를 SNS 콘텐츠로 바꿔보세요.
            <br />
            오늘의 대화가 내일의 브랜드가 됩니다.
          </p>
          <Link
            href="/notes"
            className="inline-flex px-8 py-4 bg-notes text-white rounded-xl font-semibold text-lg hover:bg-notes-secondary transition-colors shadow-lg shadow-notes/25"
          >
            Start branding with BRIDGE Notes →
          </Link>
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
                BRIDGE Notes
              </Link>
              <Link href="/pages" className="hover:text-pages transition-colors">
                BRIDGE Pages
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
