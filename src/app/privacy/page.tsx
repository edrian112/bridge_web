import type { Metadata } from "next";
import { Header, Footer } from "@/components";

export const metadata: Metadata = {
  title: "개인정보처리방침 - BRIDGE",
  description: "BRIDGE 서비스 개인정보처리방침",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
            개인정보처리방침
          </h1>

          <div className="prose prose-lg max-w-none text-foreground-light">
            <p className="text-sm text-foreground-light mb-8">
              시행일: 2025년 1월 1일
            </p>

            <p className="mb-8">
              BRIDGE(이하 "회사")는 개인정보보호법에 따라 이용자의 개인정보 보호 및 권익을 보호하고 개인정보와 관련한 이용자의 고충을 원활하게 처리할 수 있도록 다음과 같은 처리방침을 두고 있습니다.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">제1조 (수집하는 개인정보 항목)</h2>
            <p>회사는 서비스 제공을 위해 다음과 같은 개인정보를 수집합니다:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                <strong className="text-foreground">필수 항목</strong>
                <ul className="list-disc pl-6 mt-2">
                  <li>이메일 주소 (회원가입 및 서비스 이용 시)</li>
                  <li>결제 정보 (유료 서비스 이용 시)</li>
                </ul>
              </li>
              <li>
                <strong className="text-foreground">자동 수집 항목</strong>
                <ul className="list-disc pl-6 mt-2">
                  <li>서비스 이용 기록, 접속 로그</li>
                  <li>기기 정보 (브라우저 종류, OS)</li>
                </ul>
              </li>
            </ol>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">제2조 (개인정보의 수집 및 이용 목적)</h2>
            <p>회사는 수집한 개인정보를 다음의 목적을 위해 이용합니다:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>서비스 제공 및 운영</li>
              <li>회원 관리 및 본인 확인</li>
              <li>유료 서비스 결제 및 정산</li>
              <li>서비스 개선 및 신규 서비스 개발</li>
              <li>고객 문의 응대 및 불만 처리</li>
              <li>서비스 관련 공지사항 전달</li>
            </ol>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">제3조 (개인정보의 보유 및 이용 기간)</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>회원 탈퇴 시까지 보유하며, 탈퇴 즉시 파기합니다.</li>
              <li>단, 관련 법령에 의해 보존이 필요한 경우 해당 기간 동안 보관합니다:
                <ul className="list-disc pl-6 mt-2">
                  <li>계약 또는 청약철회 등에 관한 기록: 5년</li>
                  <li>대금결제 및 재화 등의 공급에 관한 기록: 5년</li>
                  <li>소비자의 불만 또는 분쟁처리에 관한 기록: 3년</li>
                </ul>
              </li>
            </ol>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">제4조 (개인정보의 제3자 제공)</h2>
            <p>
              회사는 원칙적으로 이용자의 개인정보를 제3자에게 제공하지 않습니다. 다만, 다음의 경우에는 예외로 합니다:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>이용자가 사전에 동의한 경우</li>
              <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
            </ol>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">제5조 (개인정보 처리 위탁)</h2>
            <p>회사는 서비스 제공을 위해 다음과 같이 개인정보 처리 업무를 위탁합니다:</p>
            <div className="overflow-x-auto mt-4">
              <table className="min-w-full border border-border">
                <thead className="bg-background-alt">
                  <tr>
                    <th className="border border-border px-4 py-2 text-left text-foreground">수탁업체</th>
                    <th className="border border-border px-4 py-2 text-left text-foreground">위탁 업무</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border px-4 py-2">결제 대행사</td>
                    <td className="border border-border px-4 py-2">결제 처리</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">클라우드 서비스 제공업체</td>
                    <td className="border border-border px-4 py-2">데이터 저장 및 서버 운영</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">제6조 (이용자의 권리)</h2>
            <p>이용자는 언제든지 다음의 권리를 행사할 수 있습니다:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>개인정보 열람 요구</li>
              <li>오류 등이 있을 경우 정정 요구</li>
              <li>삭제 요구</li>
              <li>처리정지 요구</li>
            </ol>
            <p className="mt-4">
              권리 행사는 이메일(edari.bridge@gmail.com)을 통해 요청하실 수 있습니다.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">제7조 (개인정보의 파기)</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.</li>
              <li>전자적 파일 형태의 정보는 복구할 수 없는 방법으로 영구 삭제합니다.</li>
            </ol>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">제8조 (개인정보의 안전성 확보 조치)</h2>
            <p>회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>개인정보의 암호화</li>
              <li>해킹 등에 대비한 기술적 대책</li>
              <li>개인정보에 대한 접근 제한</li>
            </ol>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">제9조 (쿠키의 사용)</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>회사는 서비스 이용 편의를 위해 쿠키를 사용합니다.</li>
              <li>이용자는 브라우저 설정을 통해 쿠키 저장을 거부할 수 있습니다.</li>
              <li>쿠키 저장을 거부할 경우 일부 서비스 이용에 어려움이 있을 수 있습니다.</li>
            </ol>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">제10조 (개인정보 보호책임자)</h2>
            <p>회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 이용자의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.</p>
            <div className="mt-4 p-4 bg-background-alt rounded-lg">
              <p><strong className="text-foreground">개인정보 보호책임자</strong></p>
              <p>이메일: edari.bridge@gmail.com</p>
            </div>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">제11조 (개인정보처리방침 변경)</h2>
            <p>
              이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
            </p>

            <div className="mt-12 p-6 bg-background-alt rounded-xl">
              <p className="text-sm text-foreground-light">
                개인정보처리방침에 대한 문의사항이 있으시면 아래로 연락해 주세요.
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
