"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function PagesCreatePage() {
  const [capturedText, setCapturedText] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // URL hash에서 텍스트 읽기
  useEffect(() => {
    const loadTextFromHash = () => {
      try {
        const hash = window.location.hash;
        if (hash && hash.startsWith("#text=")) {
          const encodedText = hash.slice(6); // "#text=" 제거
          // Base64 디코딩
          const decodedText = decodeURIComponent(escape(atob(encodedText)));
          setCapturedText(decodedText);
        }
      } catch (err) {
        console.error("텍스트 디코딩 실패:", err);
        setError("캡처된 텍스트를 불러오는데 실패했습니다.");
      } finally {
        setIsLoading(false);
      }
    };

    loadTextFromHash();

    // hash 변경 감지
    window.addEventListener("hashchange", loadTextFromHash);
    return () => window.removeEventListener("hashchange", loadTextFromHash);
  }, []);

  // 텍스트 복사
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(capturedText);
      alert("클립보드에 복사되었습니다!");
    } catch (err) {
      console.error("복사 실패:", err);
    }
  };

  // 텍스트 변경
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCapturedText(e.target.value);
  };

  // 글자 수 계산
  const charCount = capturedText.length;
  const wordCount = capturedText.trim() ? capturedText.trim().split(/\s+/).length : 0;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-pages border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-foreground-light">텍스트를 불러오는 중...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/pages" className="flex items-center gap-2">
              <Image
                src="/icons/Pages_icon48.png"
                alt="BRIDGE Pages"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="font-semibold text-xl text-foreground">BRIDGE Pages</span>
              <span className="px-2 py-1 bg-pages/10 text-pages text-xs font-medium rounded-full">Editor</span>
            </Link>
            <div className="flex items-center gap-4">
              <button
                onClick={handleCopy}
                disabled={!capturedText}
                className="px-4 py-2 bg-background border border-border text-foreground rounded-lg font-medium hover:bg-background-alt transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                복사
              </button>
              <button
                disabled={!capturedText}
                className="px-4 py-2 bg-pages text-white rounded-lg font-medium hover:bg-pages-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                블로그 확장 (Coming Soon)
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {error ? (
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
              <p className="text-red-600">{error}</p>
              <Link
                href="/pages"
                className="inline-block mt-4 text-pages hover:underline"
              >
                BRIDGE Pages로 돌아가기
              </Link>
            </div>
          ) : !capturedText ? (
            <div className="bg-pages-light rounded-xl p-12 text-center">
              <div className="text-6xl mb-4">📚</div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                캡처된 텍스트가 없습니다
              </h2>
              <p className="text-foreground-light mb-6">
                BRIDGE Pages 익스텐션에서 AI 대화를 캡처한 후<br />
                "에디터로 이동" 버튼을 클릭하세요.
              </p>
              <Link
                href="/pages"
                className="inline-flex px-6 py-3 bg-pages text-white rounded-lg font-medium hover:bg-pages-secondary transition-colors"
              >
                BRIDGE Pages 소개 보기
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Editor Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-foreground">캡처된 텍스트</h1>
                  <p className="text-sm text-foreground-light mt-1">
                    {charCount.toLocaleString()}자 · {wordCount.toLocaleString()}단어
                  </p>
                </div>
              </div>

              {/* Text Editor */}
              <div className="bg-background rounded-xl border border-border overflow-hidden">
                <textarea
                  ref={textareaRef}
                  value={capturedText}
                  onChange={handleTextChange}
                  className="w-full min-h-[500px] p-6 text-foreground bg-background resize-y focus:outline-none text-base leading-relaxed"
                  placeholder="캡처된 텍스트가 여기에 표시됩니다..."
                />
              </div>

              {/* Info Box */}
              <div className="bg-pages-light rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span>💡</span>
                  다음 단계
                </h3>
                <ul className="space-y-2 text-foreground-light text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-pages">1.</span>
                    캡처된 텍스트를 검토하고 필요한 부분을 수정하세요.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pages">2.</span>
                    "블로그 확장" 버튼을 클릭하면 AI가 SEO 최적화된 블로그 글로 확장합니다.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pages">3.</span>
                    확장된 글을 Tistory, Medium 등에 자동 발행할 수 있습니다.
                  </li>
                </ul>
                <p className="mt-4 text-xs text-foreground-light">
                  * 블로그 확장 기능은 곧 출시 예정입니다.
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
