import Link from "next/link";
import Image from "next/image";

export default function Home() {
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
              <Link href="/pricing" className="text-foreground-light hover:text-foreground transition-colors">
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

      {/* Hero Section - Brand Focus */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-bridge-light rounded-full text-bridge-secondary text-sm font-medium mb-6">
            <span>🌉</span>
            <span>From Chat to Brand</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            당신과 AI의 대화가<br />
            <span className="text-bridge">당신의 브랜드</span>가 됩니다
          </h1>
          <p className="text-xl text-foreground-light max-w-2xl mx-auto mb-4">
            매일 AI와 나누는 대화 속에 당신만의 인사이트가 있습니다.
          </p>
          <p className="text-lg text-foreground max-w-2xl mx-auto mb-10 font-medium">
            BRIDGE가 그 대화를 <span className="text-bridge">콘텐츠</span>로, 콘텐츠를 <span className="text-bridge">브랜드</span>로 만들어 드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/notes"
              className="px-8 py-4 bg-notes text-white rounded-xl font-semibold text-lg hover:bg-notes-secondary transition-colors shadow-lg shadow-notes/25"
            >
              브랜딩 시작하기
            </Link>
            <Link
              href="#how-it-works"
              className="px-8 py-4 bg-background border-2 border-bridge text-bridge rounded-xl font-semibold text-lg hover:bg-bridge-light transition-colors"
            >
              어떻게 작동하나요?
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Section - Personal Branding Pain */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background-alt">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              AI와 좋은 대화를 나눴는데, <span className="text-red-500">그냥 닫아버리시나요?</span>
            </h2>
            <p className="text-lg text-foreground-light max-w-2xl mx-auto">
              그 대화 속에 당신의 브랜드가 될 인사이트가 있습니다
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="bg-background rounded-2xl p-8 border border-border">
              <div className="text-red-500 font-semibold mb-4 flex items-center gap-2">
                <span className="text-2xl">😫</span>
                <span>지금의 당신</span>
              </div>
              <ul className="space-y-4 text-foreground-light">
                <li className="flex items-start gap-3">
                  <span className="text-red-400">✗</span>
                  <span>AI와 좋은 대화를 나눴지만 <strong className="text-foreground">기록하지 않음</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400">✗</span>
                  <span>공유하려니 <strong className="text-foreground">정리가 귀찮아서</strong> 포기</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400">✗</span>
                  <span>결국 <strong className="text-foreground">아무도 모르는</strong> 학습</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400">✗</span>
                  <span><strong className="text-foreground">개인 브랜드</strong>는 제자리</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-border text-center">
                <span className="text-foreground-light">콘텐츠 생산: </span>
                <span className="text-red-500 font-bold">월 0~1개</span>
              </div>
            </div>
            {/* After */}
            <div className="bg-bridge-light rounded-2xl p-8 border border-bridge/20">
              <div className="text-bridge font-semibold mb-4 flex items-center gap-2">
                <span className="text-2xl">🚀</span>
                <span>BRIDGE를 쓰는 당신</span>
              </div>
              <ul className="space-y-4 text-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-bridge">✓</span>
                  <span>AI 대화를 <strong>두 클릭으로 캡처</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bridge">✓</span>
                  <span>AI가 <strong>SNS용 콘텐츠로 자동 정리</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bridge">✓</span>
                  <span><strong>매일 공유</strong>하며 팔로워 증가</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bridge">✓</span>
                  <span><strong>전문가 이미지</strong> 구축</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-bridge/20 text-center">
                <span className="text-foreground">콘텐츠 생산: </span>
                <span className="text-bridge font-bold">월 20~30개</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Branding Value Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              왜 <span className="text-bridge">AI 대화 공유</span>가 중요한가요?
            </h2>
            <p className="text-lg text-foreground-light max-w-2xl mx-auto">
              AI와의 대화는 당신만의 시각을 보여주는 가장 진정성 있는 콘텐츠입니다
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="text-center p-8 bg-background-alt rounded-2xl">
              <div className="w-16 h-16 bg-bridge rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📈</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">팔로워 증가</h3>
              <p className="text-foreground-light">
                유용한 AI 인사이트를 공유하면 자연스럽게 팔로워가 늘어납니다.
                <strong className="text-foreground block mt-2">"이 사람 팔로우하면 배울 게 있구나"</strong>
              </p>
            </div>
            {/* Value 2 */}
            <div className="text-center p-8 bg-background-alt rounded-2xl">
              <div className="w-16 h-16 bg-bridge rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">전문가 포지셔닝</h3>
              <p className="text-foreground-light">
                꾸준한 지식 공유는 당신을 분야의 전문가로 만듭니다.
                <strong className="text-foreground block mt-2">"이 분야는 이 사람한테 물어봐야지"</strong>
              </p>
            </div>
            {/* Value 3 */}
            <div className="text-center p-8 bg-background-alt rounded-2xl">
              <div className="w-16 h-16 bg-bridge rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">💼</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">기회의 문</h3>
              <p className="text-foreground-light">
                개인 브랜드는 이직, 사업, 협업 기회로 이어집니다.
                <strong className="text-foreground block mt-2">"같이 일해볼까요?"</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-background-alt">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              AI 대화 → 콘텐츠 → 브랜드
            </h2>
            <p className="text-lg text-foreground-light max-w-2xl mx-auto">
              BRIDGE가 그 여정을 연결합니다
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center p-6 max-w-[200px]">
              <div className="w-20 h-20 bg-notes rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-notes/25">
                <span className="text-4xl">💬</span>
              </div>
              <h4 className="font-bold text-foreground mb-2">AI와 대화</h4>
              <p className="text-sm text-foreground-light">Claude, ChatGPT로<br />새로운 것을 배웁니다</p>
            </div>
            <div className="hidden md:block text-4xl text-bridge font-bold">→</div>
            {/* Step 2 */}
            <div className="flex flex-col items-center text-center p-6 max-w-[200px]">
              <div className="w-20 h-20 bg-notes rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-notes/25">
                <span className="text-4xl">👆</span>
              </div>
              <h4 className="font-bold text-foreground mb-2">두 클릭 캡처</h4>
              <p className="text-sm text-foreground-light">좋은 부분을<br />BRIDGE로 캡처합니다</p>
            </div>
            <div className="hidden md:block text-4xl text-bridge font-bold">→</div>
            {/* Step 3 */}
            <div className="flex flex-col items-center text-center p-6 max-w-[200px]">
              <div className="w-20 h-20 bg-notes rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-notes/25">
                <span className="text-4xl">✨</span>
              </div>
              <h4 className="font-bold text-foreground mb-2">AI 자동 정리</h4>
              <p className="text-sm text-foreground-light">SNS용 콘텐츠로<br />자동 변환됩니다</p>
            </div>
            <div className="hidden md:block text-4xl text-bridge font-bold">→</div>
            {/* Step 4 */}
            <div className="flex flex-col items-center text-center p-6 max-w-[200px]">
              <div className="w-20 h-20 bg-bridge rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-bridge/25">
                <span className="text-4xl">📱</span>
              </div>
              <h4 className="font-bold text-foreground mb-2">공유 & 성장</h4>
              <p className="text-sm text-foreground-light">팔로워가 늘고<br />브랜드가 성장합니다</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              두 가지 도구로 완벽한 콘텐츠 파이프라인
            </h2>
            <p className="text-lg text-foreground-light max-w-2xl mx-auto">
              짧은 글부터 긴 글까지, AI 학습의 모든 것을 콘텐츠로
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* BRIDGE Notes */}
            <div className="bg-notes-light rounded-2xl p-8 border border-notes/20 hover:shadow-xl hover:shadow-notes/10 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-notes rounded-xl flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">BRIDGE Notes</h3>
                  <p className="text-notes-secondary font-medium">SNS 콘텐츠 생산기</p>
                </div>
              </div>
              <p className="text-foreground-light mb-6">
                AI 대화를 두 클릭으로 캡처하고 <strong className="text-foreground">트위터, 스레드용 짧은 글</strong>로 변환합니다.
                매일 콘텐츠를 생산하세요.
              </p>
              <div className="bg-background/50 rounded-xl p-4 mb-6">
                <p className="text-sm text-foreground-light mb-2">✨ 이런 결과가 나옵니다:</p>
                <p className="text-foreground italic">
                  "오늘 Claude와 대화하며 배운 것: React Server Components는 클라이언트 번들 크기를 줄이는 게 핵심이었다.
                  서버에서 렌더링하고 결과만 보내니까..."
                </p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-foreground">
                  <span className="text-notes">✓</span>
                  매일 트윗/스레드 콘텐츠 생산
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <span className="text-notes">✓</span>
                  팔로워 증가 & 인게이지먼트 향상
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <span className="text-notes">✓</span>
                  "이 사람 팔로우하면 배울 게 있다" 이미지
                </li>
              </ul>
              <Link
                href="/notes"
                className="inline-flex px-6 py-3 bg-notes text-white rounded-lg font-medium hover:bg-notes-secondary transition-colors"
              >
                BRIDGE Notes로 시작하기 →
              </Link>
            </div>
            {/* BRIDGE Pages */}
            <div className="bg-pages-light rounded-2xl p-8 border border-pages/20 hover:shadow-xl hover:shadow-pages/10 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-pages rounded-xl flex items-center justify-center">
                  <span className="text-2xl">📝</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">BRIDGE Pages</h3>
                  <p className="text-pages-secondary font-medium">블로그 콘텐츠 생산기</p>
                </div>
                <span className="ml-auto px-2 py-1 bg-pages/20 text-pages text-xs font-medium rounded">Coming Soon</span>
              </div>
              <p className="text-foreground-light mb-6">
                AI 대화를 <strong className="text-foreground">SEO 최적화된 블로그 포스트</strong>로 확장합니다.
                검색 유입으로 장기적인 자산을 만드세요.
              </p>
              <div className="bg-background/50 rounded-xl p-4 mb-6">
                <p className="text-sm text-foreground-light mb-2">✨ 이런 결과가 나옵니다:</p>
                <p className="text-foreground italic">
                  "React Server Components 완벽 가이드: 개념부터 실전까지"
                  <br />
                  <span className="text-foreground-light text-sm">- 5,000자 SEO 최적화 블로그 포스트</span>
                </p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-foreground">
                  <span className="text-pages">✓</span>
                  블로그 포스트 자동 생성
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <span className="text-pages">✓</span>
                  검색 유입 → 장기 트래픽
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <span className="text-pages">✓</span>
                  전문가 포지셔닝 강화
                </li>
              </ul>
              <Link
                href="/pages"
                className="inline-flex px-6 py-3 bg-pages text-white rounded-lg font-medium hover:bg-pages-secondary transition-colors"
              >
                BRIDGE Pages 알아보기 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background-alt">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              이런 변화가 일어납니다
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Story 1 */}
            <div className="bg-background rounded-2xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-notes-light rounded-full flex items-center justify-center">
                  <span className="text-xl">👨‍💻</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">스타트업 개발자</p>
                  <p className="text-sm text-foreground-light">트위터 활동</p>
                </div>
              </div>
              <p className="text-foreground-light mb-4">
                "매일 AI로 공부한 걸 트윗하기 시작했더니 3개월 만에 팔로워가 500명에서 3,000명으로 늘었어요.
                이직 제안도 3건이나 받았습니다."
              </p>
              <div className="flex items-center gap-4 text-sm">
                <span className="text-notes font-medium">팔로워 6배 ↑</span>
                <span className="text-bridge font-medium">이직 제안 3건</span>
              </div>
            </div>
            {/* Story 2 */}
            <div className="bg-background rounded-2xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-pages-light rounded-full flex items-center justify-center">
                  <span className="text-xl">👩‍💼</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">기술 블로거</p>
                  <p className="text-sm text-foreground-light">블로그 운영</p>
                </div>
              </div>
              <p className="text-foreground-light mb-4">
                "블로그 포스트 작성 시간이 3시간에서 1시간으로 줄었어요.
                주 1회에서 주 3회 발행으로 늘리니 검색 유입이 3배 증가했습니다."
              </p>
              <div className="flex items-center gap-4 text-sm">
                <span className="text-pages font-medium">작성 시간 1/3</span>
                <span className="text-bridge font-medium">트래픽 3배 ↑</span>
              </div>
            </div>
            {/* Story 3 */}
            <div className="bg-background rounded-2xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-bridge-light rounded-full flex items-center justify-center">
                  <span className="text-xl">👨‍🏫</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">PM / 마케터</p>
                  <p className="text-sm text-foreground-light">팀 지식 공유</p>
                </div>
              </div>
              <p className="text-foreground-light mb-4">
                "AI로 조사한 내용을 팀에 공유하는 빈도가 10배 늘었어요.
                '항상 유용한 정보 주는 사람'이 되니 팀 내 영향력이 확 올랐습니다."
              </p>
              <div className="flex items-center gap-4 text-sm">
                <span className="text-bridge font-medium">공유 10배 ↑</span>
                <span className="text-notes font-medium">팀 내 영향력 ↑</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-bridge-light rounded-full text-bridge-secondary text-sm font-medium mb-6">
            <span>💡</span>
            <span>BRIDGE의 철학</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            "오늘의 대화가 <span className="text-bridge">내일의 브랜드</span>가 됩니다"
          </h2>
          <p className="text-lg text-foreground-light mb-8 leading-relaxed">
            AI와 나눈 대화에는 당신만의 질문, 당신만의 관점이 담겨 있습니다.
            <br />
            그건 다른 누구도 만들 수 없는 콘텐츠입니다.
            <br /><br />
            <strong className="text-foreground">공유하는 순간, 대화는 브랜드가 됩니다.</strong>
            <br />
            BRIDGE는 그 다리입니다.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="p-6 bg-background-alt rounded-xl">
              <div className="text-3xl mb-3">🎯</div>
              <h4 className="font-semibold text-foreground mb-2">마찰 제거</h4>
              <p className="text-sm text-foreground-light">두 클릭으로 시작, AI가 자동 정리</p>
            </div>
            <div className="p-6 bg-background-alt rounded-xl">
              <div className="text-3xl mb-3">🤝</div>
              <h4 className="font-semibold text-foreground mb-2">사용자가 주인</h4>
              <p className="text-sm text-foreground-light">AI는 초안만, 최종 결정은 당신이</p>
            </div>
            <div className="p-6 bg-background-alt rounded-xl">
              <div className="text-3xl mb-3">🌉</div>
              <h4 className="font-semibold text-foreground mb-2">연결의 다리</h4>
              <p className="text-sm text-foreground-light">AI 세계와 SNS 세계를 연결</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bridge">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            당신의 AI 대화를 브랜드로 만들 준비가 되셨나요?
          </h2>
          <p className="text-xl text-white/80 mb-4">
            매월 5회 무료. 지금 바로 시작하세요.
          </p>
          <p className="text-white/60 mb-10">
            Claude, ChatGPT, Perplexity, Gemini 모두 지원
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/download"
              className="px-8 py-4 bg-white text-bridge rounded-xl font-semibold text-lg hover:bg-bridge-light transition-colors shadow-lg"
            >
              무료로 다운로드
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
              <Link href="/notes" className="hover:text-bridge transition-colors">BRIDGE Notes</Link>
              <Link href="/pages" className="hover:text-bridge transition-colors">BRIDGE Pages</Link>
              <Link href="/pricing" className="hover:text-bridge transition-colors">가격</Link>
              <Link href="/docs" className="hover:text-bridge transition-colors">문서</Link>
            </div>
            <p className="text-sm opacity-70">
              © 2025 BRIDGE. From Chat to Brand.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
