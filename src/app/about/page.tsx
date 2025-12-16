import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Header, Footer } from "@/components";

export const metadata: Metadata = {
  title: "About - BRIDGE",
  description:
    "BRIDGE는 AI와 인간, 아이디어와 실행, 개인과 세상을 연결하는 다리입니다. From Chat to Impact.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            도구는 사람을 위해 존재합니다
          </h1>
          <p className="text-2xl font-medium text-bridge">
            "From Chat to Impact"
          </p>
        </div>
      </section>

      {/* Brand Identity */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background-alt">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              BRIDGE란?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-bridge/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔗</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">연결 (Connection)</h3>
              <p className="text-foreground-light text-sm">서로 다른 두 세상을 잇는 다리</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-bridge/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🛤️</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">통로 (Pathway)</h3>
              <p className="text-foreground-light text-sm">생각에서 행동으로 가는 길</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-bridge/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚖️</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">중재 (Mediation)</h3>
              <p className="text-foreground-light text-sm">AI와 인간의 균형잡힌 협업</p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background-alt">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              핵심 가치
            </h2>
          </div>
          <div className="space-y-8">
            {/* Card 1 */}
            <div className="bg-background rounded-2xl p-8 border border-border">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-bridge/10 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  AI는 도우미, 사용자가 주인
                </h3>
              </div>
              <p className="text-foreground-light leading-relaxed mb-4">
                AI가 모든 것을 대신하지 않습니다. 당신의 생각을 더 잘 표현하도록 돕습니다.
                BRIDGE는 당신의 인사이트를 콘텐츠로 만드는 과정에서 도움을 줄 뿐,
                최종 결정은 항상 당신의 몫입니다.
              </p>
              <div className="bg-background-alt rounded-lg p-4 text-sm">
                <p className="text-foreground-light">
                  <span className="text-red-400">❌</span> 캡처 → AI 처리 → <strong>자동 게시</strong> (사용자 개입 없음)
                </p>
                <p className="text-foreground-light mt-2">
                  <span className="text-bridge">✅</span> 캡처 → AI 초안 생성 → <strong>사용자 검토/편집</strong> → 사용자가 복사/게시
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-background rounded-2xl p-8 border border-border">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-bridge/10 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  마찰 제거
                </h3>
              </div>
              <p className="text-foreground-light leading-relaxed mb-4">
                복잡한 과정은 제거하고, 정말 중요한 것에만 집중할 수 있게 합니다.
                두 클릭으로 캡처하고, AI가 자동으로 정리합니다.
                당신은 콘텐츠의 질에만 집중하세요.
              </p>
              <p className="text-sm text-foreground-light italic">
                "환경이 개인을 만든다. 행동을 쉽게 만들면, 실행이 따라온다."
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-background rounded-2xl p-8 border border-border">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-bridge/10 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🚪</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  강제가 아닌 초대
                </h3>
              </div>
              <p className="text-foreground-light leading-relaxed mb-4">
                필요할 때 사용하세요. 당신의 작업 흐름을 방해하지 않습니다.
                BRIDGE는 조용히 대기하다가, 당신이 필요로 할 때만 나타납니다.
              </p>
              <p className="text-sm text-foreground-light">
                <span className="text-red-400">❌</span> "이렇게 해야 합니다"
                <br />
                <span className="text-bridge">✅</span> "이런 방법도 있어요, 한번 보실래요?"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-3xl font-medium text-foreground italic mb-4">
            "AI와의 대화는 끝이 아니라 <span className="text-bridge">시작</span>입니다."
          </p>
          <p className="text-foreground-light">
            첫 톱니바퀴를 돌리면 나머지는 따라옵니다
          </p>
        </div>
      </section>

      {/* Brand Story - Three Dots */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background-alt">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              BRIDGE의 의미
            </h2>
            <Image
              src="/icons/BRIDGE-icon128.png"
              alt="BRIDGE 로고"
              width={128}
              height={128}
              className="drop-shadow-sm mx-auto mb-6"
              priority
            />
            <p className="text-foreground-light">
              세 개의 점이 연결되는 다리
            </p>
          </div>

          <div className="flex flex-col items-center gap-10 mb-12">
            <div className="flex items-center gap-4 md:gap-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-bridge/30 mx-auto mb-3"></div>
                <p className="text-sm text-foreground-light">AI</p>
              </div>
              <div className="h-0.5 w-10 md:w-16 bg-bridge/30 rounded-full" />
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-bridge mx-auto mb-3"></div>
                <p className="text-sm font-medium text-foreground">Human</p>
              </div>
              <div className="h-0.5 w-10 md:w-16 bg-bridge/30 rounded-full" />
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-bridge/30 mx-auto mb-3"></div>
                <p className="text-sm text-foreground-light">World</p>
              </div>
            </div>
          </div>

          <p className="text-center text-foreground-light leading-relaxed max-w-2xl mx-auto">
            가운데 진한 점은 <strong className="text-foreground">인간</strong>을,
            양쪽의 점은 <strong className="text-foreground">AI</strong>와 <strong className="text-foreground">세상</strong>을 의미합니다.
            <br /><br />
            BRIDGE는 인간이 AI와 나눈 대화를 세상과 연결하는 다리입니다.
          </p>
        </div>
      </section>

      {/* Product Ecosystem */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              BRIDGE Ecosystem
            </h2>
            <p className="text-foreground-light">
              속도에서 깊이로, 개인에서 연결로
            </p>
          </div>

          <div className="space-y-6">
            {/* Notes */}
            <div className="flex items-center gap-6 p-6 bg-notes-light rounded-2xl">
              <Image src="/icons/Notes_icon64.png" alt="Notes" width={48} height={48} className="flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-1">BRIDGE Notes</h3>
                <p className="text-foreground-light text-sm">
                  AI 대화를 두 클릭으로 캡처하고 SNS 콘텐츠로 변환
                </p>
              </div>
              <Link href="/notes" className="text-notes font-medium hover:underline">
                자세히 →
              </Link>
            </div>

            {/* Pages */}
            <div className="flex items-center gap-6 p-6 bg-pages-light rounded-2xl">
              <Image src="/icons/Pages_icon64.png" alt="Pages" width={48} height={48} className="flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-1">BRIDGE Pages</h3>
                <p className="text-foreground-light text-sm">
                  짧은 글을 SEO 최적화된 블로그 포스트로 확장
                </p>
              </div>
              <Link href="/pages" className="text-pages font-medium hover:underline">
                자세히 →
              </Link>
            </div>

            {/* Future */}
            <div className="flex items-center gap-6 p-6 bg-background-alt rounded-2xl border border-border">
              <Image src="/icons/BRIDGE-icon64.png" alt="BRIDGE" width={48} height={48} className="flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-1">Coming Soon...</h3>
                <p className="text-foreground-light text-sm">
                  다음 브릿지를 기대해주세요.
                </p>
              </div>
              <span className="text-foreground-light text-sm">준비 중</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
