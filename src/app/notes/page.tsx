import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BRIDGE Notes - AI 대화를 SNS 콘텐츠로",
  description:
    "AI 대화를 두 클릭으로 캡처하고 SNS 콘텐츠로 변환. 당신의 대화가 브랜드가 됩니다. From Chat to Brand.",
};

export default function NotesPage() {
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
              <Link href="/notes" className="text-notes font-medium">
                BRIDGE Notes
              </Link>
              <Link href="/pages" className="text-foreground-light hover:text-pages transition-colors">
                BRIDGE Pages
              </Link>
              <Link href="/pricing" className="text-foreground-light hover:text-foreground transition-colors">
                가격
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/download"
                className="hidden sm:inline-flex px-4 py-2 bg-notes text-white rounded-lg font-medium hover:bg-notes-secondary transition-colors"
              >
                설치하기
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-notes-light">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-notes/10 rounded-full text-notes text-sm font-medium mb-6">
                <span>⚡</span>
                <span>SNS 콘텐츠 생산기</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
                AI 대화를<br />
                <span className="text-notes">브랜드 콘텐츠</span>로
              </h1>
              <p className="text-xl text-foreground-light mb-8">
                두 클릭으로 AI 대화를 캡처하고, SNS용 콘텐츠로 변환하세요.
                <strong className="text-foreground block mt-2">당신의 대화가 당신의 브랜드가 됩니다.</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/download"
                  className="px-8 py-4 bg-notes text-white rounded-xl font-semibold text-lg hover:bg-notes-secondary transition-colors shadow-lg shadow-notes/25"
                >
                  무료로 다운로드
                </Link>
                <Link
                  href="#how-it-works"
                  className="px-8 py-4 bg-background border-2 border-notes/30 text-notes rounded-xl font-semibold text-lg hover:bg-notes/5 transition-colors"
                >
                  사용법 보기
                </Link>
              </div>
            </div>
            <div className="bg-background rounded-2xl shadow-2xl p-8 border border-border">
              {/* Demo Placeholder */}
              <div className="aspect-video bg-notes/10 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎬</div>
                  <p className="text-foreground-light">데모 영상</p>
                </div>
              </div>
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
              마찰 없이, 빠르게, 정확하게
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 bg-background rounded-2xl border border-border hover:border-notes/30 transition-colors">
              <div className="w-12 h-12 bg-notes-light rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">👆</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">두 클릭 범위 선택</h3>
              <p className="text-foreground-light">
                시작 메시지 클릭, 끝 메시지 클릭. 그게 전부입니다.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="p-6 bg-background rounded-2xl border border-border hover:border-notes/30 transition-colors">
              <div className="w-12 h-12 bg-notes-light rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">AI 자동 정리</h3>
              <p className="text-foreground-light">
                선택한 대화를 AI가 깔끔하게 정리해드립니다.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="p-6 bg-background rounded-2xl border border-border hover:border-notes/30 transition-colors">
              <div className="w-12 h-12 bg-notes-light rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🎭</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">톤 조정</h3>
              <p className="text-foreground-light">
                친근한 톤, 정중한 톤 등 상황에 맞게 조정하세요.
              </p>
            </div>
            {/* Feature 4 */}
            <div className="p-6 bg-background rounded-2xl border border-border hover:border-notes/30 transition-colors">
              <div className="w-12 h-12 bg-notes-light rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">스마트 중복 제거</h3>
              <p className="text-foreground-light">
                불필요한 반복과 중복을 자동으로 제거합니다.
              </p>
            </div>
            {/* Feature 5 */}
            <div className="p-6 bg-background rounded-2xl border border-border hover:border-notes/30 transition-colors">
              <div className="w-12 h-12 bg-notes-light rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">히스토리 관리</h3>
              <p className="text-foreground-light">
                이전에 정리한 글들을 언제든 다시 확인할 수 있습니다.
              </p>
            </div>
            {/* Feature 6 */}
            <div className="p-6 bg-background rounded-2xl border border-border hover:border-notes/30 transition-colors">
              <div className="w-12 h-12 bg-notes-light rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🌙</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">다크모드</h3>
              <p className="text-foreground-light">
                눈이 편한 다크모드를 지원합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Sites Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background-alt">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              지원 플랫폼
            </h2>
            <p className="text-lg text-foreground-light max-w-2xl mx-auto">
              주요 AI 서비스를 모두 지원합니다
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Claude */}
            <div className="bg-background rounded-2xl p-8 text-center border border-border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🟠</span>
              </div>
              <h4 className="font-semibold text-foreground">Claude.ai</h4>
            </div>
            {/* ChatGPT */}
            <div className="bg-background rounded-2xl p-8 text-center border border-border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🟢</span>
              </div>
              <h4 className="font-semibold text-foreground">ChatGPT</h4>
            </div>
            {/* Perplexity */}
            <div className="bg-background rounded-2xl p-8 text-center border border-border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔵</span>
              </div>
              <h4 className="font-semibold text-foreground">Perplexity</h4>
            </div>
            {/* Gemini */}
            <div className="bg-background rounded-2xl p-8 text-center border border-border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🟣</span>
              </div>
              <h4 className="font-semibold text-foreground">Gemini</h4>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              사용 방법
            </h2>
            <p className="text-lg text-foreground-light max-w-2xl mx-auto">
              3단계만 따라하세요
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-notes rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                1
              </div>
              <div className="bg-notes-light rounded-2xl p-6 mb-4 aspect-video flex items-center justify-center">
                <span className="text-4xl">👆</span>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">시작 메시지 클릭</h4>
              <p className="text-foreground-light">
                캡처하고 싶은 대화의 시작 부분을 클릭하세요
              </p>
            </div>
            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-notes rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                2
              </div>
              <div className="bg-notes-light rounded-2xl p-6 mb-4 aspect-video flex items-center justify-center">
                <span className="text-4xl">👆</span>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">끝 메시지 클릭</h4>
              <p className="text-foreground-light">
                대화의 끝 부분을 클릭하면 범위가 선택됩니다
              </p>
            </div>
            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-notes rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                3
              </div>
              <div className="bg-notes-light rounded-2xl p-6 mb-4 aspect-video flex items-center justify-center">
                <span className="text-4xl">✨</span>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">AI가 정리</h4>
              <p className="text-foreground-light">
                AI가 자동으로 정리한 글을 복사하거나 공유하세요
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background-alt">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              가격 정책
            </h2>
            <p className="text-lg text-foreground-light max-w-2xl mx-auto">
              필요한 만큼만 사용하세요
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Free */}
            <div className="bg-background rounded-2xl p-6 border border-border">
              <h4 className="font-semibold text-foreground mb-2">Free</h4>
              <div className="text-3xl font-bold text-foreground mb-4">₩0</div>
              <p className="text-notes font-medium mb-4">5회/월</p>
              <ul className="space-y-2 text-sm text-foreground-light mb-6">
                <li>✓ 기본 기능</li>
                <li>✓ 히스토리 3개</li>
                <li>✓ 기본 템플릿</li>
              </ul>
              <Link
                href="/download"
                className="block w-full py-3 text-center bg-notes/10 text-notes rounded-lg font-medium hover:bg-notes/20 transition-colors"
              >
                무료로 시작
              </Link>
            </div>
            {/* Basic30 */}
            <div className="bg-background rounded-2xl p-6 border border-border">
              <h4 className="font-semibold text-foreground mb-2">Basic30</h4>
              <div className="text-3xl font-bold text-foreground mb-4">₩5,000</div>
              <p className="text-notes font-medium mb-4">30회</p>
              <ul className="space-y-2 text-sm text-foreground-light mb-6">
                <li>✓ 모든 템플릿</li>
                <li>✓ 히스토리 10개</li>
              </ul>
              <Link
                href="#"
                className="block w-full py-3 text-center bg-notes/10 text-notes rounded-lg font-medium hover:bg-notes/20 transition-colors"
              >
                구매하기
              </Link>
            </div>
            {/* Standard70 */}
            <div className="bg-notes-light rounded-2xl p-6 border-2 border-notes relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-notes text-white text-xs font-medium rounded-full">
                인기
              </div>
              <h4 className="font-semibold text-foreground mb-2">Standard70</h4>
              <div className="text-3xl font-bold text-foreground mb-4">₩10,000</div>
              <p className="text-notes font-medium mb-4">70회</p>
              <ul className="space-y-2 text-sm text-foreground-light mb-6">
                <li>✓ 모든 Basic 기능</li>
                <li>✓ 다른 AI 모델 선택</li>
              </ul>
              <Link
                href="#"
                className="block w-full py-3 text-center bg-notes text-white rounded-lg font-medium hover:bg-notes-secondary transition-colors"
              >
                구매하기
              </Link>
            </div>
            {/* MAX */}
            <div className="bg-background rounded-2xl p-6 border border-border">
              <h4 className="font-semibold text-foreground mb-2">MAX</h4>
              <div className="text-3xl font-bold text-foreground mb-4">
                ₩29,000<span className="text-lg font-normal">/월</span>
              </div>
              <p className="text-notes font-medium mb-4">무제한</p>
              <ul className="space-y-2 text-sm text-foreground-light mb-6">
                <li>✓ 모든 기능</li>
                <li>✓ 우선 지원</li>
                <li>✓ 베타 기능 조기 접근</li>
              </ul>
              <Link
                href="#"
                className="block w-full py-3 text-center bg-notes/10 text-notes rounded-lg font-medium hover:bg-notes/20 transition-colors"
              >
                구독하기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-notes">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            AI 대화를 브랜드로 만들 준비가 되셨나요?
          </h2>
          <p className="text-xl text-white/80 mb-10">
            매월 5회 무료. 오늘의 대화가 내일의 브랜드가 됩니다.
          </p>
          <Link
            href="/download"
            className="inline-flex px-8 py-4 bg-white text-notes rounded-xl font-semibold text-lg hover:bg-notes-light transition-colors shadow-lg"
          >
            지금 다운로드하고 브랜딩 시작하기
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
