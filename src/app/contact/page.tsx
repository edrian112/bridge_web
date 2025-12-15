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

          {/* Contact Info */}
          <div className="mt-16 pt-12 border-t border-border">
            <h2 className="text-xl font-semibold text-foreground mb-6 text-center">
              다른 방법으로 연락하기
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <a
                href="mailto:edari.bridge@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-background-alt hover:bg-bridge-light transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-bridge flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-foreground group-hover:text-bridge transition-colors">이메일</p>
                  <p className="text-sm text-foreground-light">edari.bridge@gmail.com</p>
                </div>
              </a>
              <a
                href="https://www.threads.com/@bridge.project.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-background-alt hover:bg-bridge-light transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center">
                  <svg className="w-6 h-6 text-background" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.59 12c.025 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.182.408-2.256 1.333-3.023.842-.697 2.023-1.108 3.428-1.191 1.09-.065 2.1.047 3.009.333.012-.774-.07-1.478-.253-2.1-.293-.992-.843-1.751-1.597-2.199-.828-.49-1.9-.696-3.189-.612-1.326.087-2.418.472-3.244 1.145-.869.707-1.383 1.63-1.528 2.744l-2.017-.27c.213-1.61.961-2.953 2.227-3.995 1.195-.984 2.742-1.531 4.601-1.628 1.686-.093 3.194.202 4.478.877 1.223.641 2.117 1.65 2.582 2.917.357.971.502 2.135.432 3.457 1.32.726 2.298 1.717 2.834 2.938.74 1.686.791 4.46-1.467 6.67-1.869 1.832-4.152 2.64-7.39 2.666zm-.12-8.262c-1.797.107-2.905.834-2.853 1.878.034.706.508 1.94 2.623 1.824 1.5-.082 2.473-.702 2.988-1.902.265-.617.39-1.384.376-2.29-.87-.207-1.876-.32-3.134-.235z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-foreground group-hover:text-bridge transition-colors">Threads</p>
                  <p className="text-sm text-foreground-light">@bridge.project.ai</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
