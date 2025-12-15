import type { Metadata } from "next";
import { Header, Footer } from "@/components";

export const metadata: Metadata = {
  title: "이용약관 - BRIDGE",
  description: "BRIDGE 서비스 이용약관",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
            이용약관
          </h1>

          <div className="prose prose-lg max-w-none text-foreground-light">
            <p className="text-sm text-foreground-light mb-8">
              시행일: 2025년 1월 1일
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">제1조 (목적)</h2>
            <p>
              이 약관은 BRIDGE(이하 "서비스")가 제공하는 서비스의 이용조건 및 절차, 회사와 회원 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">제2조 (정의)</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>"서비스"란 BRIDGE가 제공하는 AI 대화 캡처 및 콘텐츠 변환 서비스를 말합니다.</li>
              <li>"회원"이란 서비스에 접속하여 이 약관에 따라 서비스를 이용하는 자를 말합니다.</li>
              <li>"콘텐츠"란 회원이 서비스를 통해 생성, 저장, 공유하는 모든 형태의 정보를 말합니다.</li>
            </ol>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">제3조 (약관의 효력 및 변경)</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>이 약관은 서비스 화면에 게시하거나 기타의 방법으로 회원에게 공지함으로써 효력이 발생합니다.</li>
              <li>회사는 필요한 경우 관련 법령을 위배하지 않는 범위에서 이 약관을 변경할 수 있습니다.</li>
              <li>변경된 약관은 공지 후 7일이 경과한 날부터 효력이 발생합니다.</li>
            </ol>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">제4조 (서비스의 제공)</h2>
            <p>회사는 다음과 같은 서비스를 제공합니다:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>BRIDGE Notes: AI 대화 캡처 및 SNS 콘텐츠 변환</li>
              <li>BRIDGE Pages: AI 대화 기반 블로그 콘텐츠 생성</li>
              <li>기타 회사가 추가 개발하거나 제휴를 통해 제공하는 서비스</li>
            </ol>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">제5조 (서비스 이용)</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>서비스는 연중무휴, 1일 24시간 제공함을 원칙으로 합니다.</li>
              <li>회사는 시스템 점검, 증설 및 교체 등의 사유로 서비스 제공을 일시적으로 중단할 수 있습니다.</li>
              <li>무료 서비스의 경우 월 5회의 이용 제한이 있습니다.</li>
            </ol>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">제6조 (회원의 의무)</h2>
            <p>회원은 다음 행위를 하여서는 안 됩니다:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>타인의 정보 도용</li>
              <li>서비스에서 얻은 정보의 무단 복제, 배포, 상업적 이용</li>
              <li>회사 및 제3자의 저작권 등 지적재산권 침해</li>
              <li>회사 및 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
              <li>서비스의 안정적 운영을 방해하는 행위</li>
            </ol>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">제7조 (콘텐츠의 권리)</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>회원이 서비스를 통해 생성한 콘텐츠의 저작권은 회원에게 있습니다.</li>
              <li>회사는 서비스 운영, 개선, 홍보 목적으로 회원의 콘텐츠를 사용할 수 있습니다.</li>
              <li>회원은 자신의 콘텐츠가 제3자의 권리를 침해하지 않음을 보증합니다.</li>
            </ol>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">제8조 (유료 서비스)</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>유료 서비스의 요금 및 결제 방법은 서비스 내 안내에 따릅니다.</li>
              <li>이용권은 구매 시점부터 유효하며, 사용 횟수 또는 기간이 소진되면 만료됩니다.</li>
              <li>환불은 관련 법령 및 회사의 환불 정책에 따릅니다.</li>
            </ol>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">제9조 (면책조항)</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>회사는 천재지변 등 불가항력으로 서비스를 제공할 수 없는 경우 책임이 면제됩니다.</li>
              <li>회사는 회원의 귀책사유로 인한 서비스 이용 장애에 대해 책임지지 않습니다.</li>
              <li>회사는 회원이 서비스를 이용하여 기대하는 수익을 얻지 못한 것에 대해 책임지지 않습니다.</li>
            </ol>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">제10조 (분쟁해결)</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>서비스 이용과 관련하여 분쟁이 발생한 경우, 회사와 회원은 상호 협의하여 해결합니다.</li>
              <li>협의가 이루어지지 않을 경우, 관할 법원은 회사 소재지 관할 법원으로 합니다.</li>
            </ol>

            <div className="mt-12 p-6 bg-background-alt rounded-xl">
              <p className="text-sm text-foreground-light">
                본 약관에 대한 문의사항이 있으시면 아래로 연락해 주세요.
              </p>
              <p className="text-sm text-foreground mt-2">
                이메일: edari.bridge@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
