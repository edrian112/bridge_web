import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Header, Footer, SectionHeader, FeatureCard, PlatformCard, CTASection, Badge } from "@/components";

export const metadata: Metadata = {
  title: "BRIDGE Notes - AI 대화를 SNS 콘텐츠로",
  description:
    "AI 대화를 두 클릭으로 캡처하고 SNS 콘텐츠로 변환. 당신의 대화가 브랜드가 됩니다. From Chat to Brand.",
};

export default function NotesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header ctaText="설치하기" ctaColor="notes" />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-notes-light">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <Badge text="SNS 콘텐츠 생산기" iconSrc="/icons/Notes_icon48.png" color="notes" />
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
          <SectionHeader title="핵심 기능" subtitle="마찰 없이, 빠르게, 정확하게" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard icon="👆" title="두 클릭 범위 선택" description="시작 메시지 클릭, 끝 메시지 클릭. 그게 전부입니다." color="notes" />
            <FeatureCard icon="🤖" title="AI 자동 정리" description="선택한 대화를 AI가 깔끔하게 정리해드립니다." color="notes" />
            <FeatureCard icon="🎭" title="톤 조정" description="친근한 톤, 정중한 톤 등 상황에 맞게 조정하세요." color="notes" />
            <FeatureCard icon="🔄" title="스마트 중복 제거" description="불필요한 반복과 중복을 자동으로 제거합니다." color="notes" />
            <FeatureCard icon="📚" title="히스토리 관리" description="이전에 정리한 글들을 언제든 다시 확인할 수 있습니다." color="notes" />
            <FeatureCard icon="🌙" title="다크모드" description="눈이 편한 다크모드를 지원합니다." color="notes" />
          </div>
        </div>
      </section>

      {/* Supported Sites Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background-alt">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="지원 플랫폼" subtitle="주요 AI 서비스를 모두 지원합니다" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <PlatformCard icon="🟠" name="Claude.ai" bgColor="bg-orange-100" />
            <PlatformCard icon="🟢" name="ChatGPT" bgColor="bg-green-100" />
            <PlatformCard icon="🔵" name="Perplexity" bgColor="bg-blue-100" />
            <PlatformCard icon="🟣" name="Gemini" bgColor="bg-purple-100" />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="사용 방법" subtitle="3단계만 따라하세요" />
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

      {/* CTA Section */}
      <CTASection
        title="AI 대화를 브랜드로 만들 준비가 되셨나요?"
        subtitle="매월 5회 무료. 오늘의 대화가 내일의 브랜드가 됩니다."
        buttonText="지금 다운로드하고 브랜딩 시작하기"
        buttonHref="/download"
        color="notes"
      />

      <Footer />
    </div>
  );
}
