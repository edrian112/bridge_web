"use client";

import { useState } from "react";
import { Header, Footer } from "@/components";
import { sendContactEmail, ContactFormData, ContactResponse } from "@/app/actions/contact";

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [response, setResponse] = useState<ContactResponse | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponse(null);

    const result = await sendContactEmail(formData);
    setResponse(result);
    setIsSubmitting(false);

    if (result.success) {
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              문의하기
            </h1>
            <p className="text-lg text-foreground-light">
              BRIDGE에 대해 궁금한 점이 있으시면 언제든지 문의해 주세요.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                이름 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground-light/50 focus:outline-none focus:ring-2 focus:ring-bridge focus:border-transparent transition-all"
                placeholder="홍길동"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                이메일 <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground-light/50 focus:outline-none focus:ring-2 focus:ring-bridge focus:border-transparent transition-all"
                placeholder="example@email.com"
              />
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                문의 유형 <span className="text-red-500">*</span>
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-bridge focus:border-transparent transition-all"
              >
                <option value="">선택해주세요</option>
                <option value="일반 문의">일반 문의</option>
                <option value="BRIDGE Notes 문의">BRIDGE Notes 문의</option>
                <option value="BRIDGE Pages 문의">BRIDGE Pages 문의</option>
                <option value="결제/환불 문의">결제/환불 문의</option>
                <option value="버그 리포트">버그 리포트</option>
                <option value="기능 제안">기능 제안</option>
                <option value="제휴/협력 문의">제휴/협력 문의</option>
                <option value="기타">기타</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                메시지 <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground-light/50 focus:outline-none focus:ring-2 focus:ring-bridge focus:border-transparent transition-all resize-none"
                placeholder="문의 내용을 입력해주세요..."
              />
            </div>

            {/* Response Message */}
            {response && (
              <div
                className={`p-4 rounded-lg ${
                  response.success
                    ? "bg-bridge-light text-bridge-dark"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {response.message}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-6 rounded-lg bg-bridge text-white font-semibold text-lg hover:bg-bridge/90 focus:outline-none focus:ring-2 focus:ring-bridge focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  전송 중...
                </span>
              ) : (
                "메시지 보내기"
              )}
            </button>
          </form>

        </div>
      </section>

      <Footer />
    </div>
  );
}
