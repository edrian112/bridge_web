"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}

export async function sendContactEmail(
  formData: ContactFormData
): Promise<ContactResponse> {
  const { name, email, subject, message } = formData;

  // Validation
  if (!name || !email || !subject || !message) {
    return {
      success: false,
      message: "모든 필드를 입력해주세요.",
    };
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: "올바른 이메일 주소를 입력해주세요.",
    };
  }

  try {
    await resend.emails.send({
      from: "BRIDGE Contact <onboarding@resend.dev>",
      to: "edari.bridge@gmail.com",
      replyTo: email,
      subject: `[BRIDGE 문의] ${subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #10B981;">BRIDGE 웹사이트 문의</h2>
          <hr style="border: 1px solid #e5e7eb; margin: 20px 0;" />
          <p><strong>보낸 사람:</strong> ${name}</p>
          <p><strong>이메일:</strong> ${email}</p>
          <p><strong>제목:</strong> ${subject}</p>
          <hr style="border: 1px solid #e5e7eb; margin: 20px 0;" />
          <h3>메시지 내용:</h3>
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; white-space: pre-wrap;">${message}</div>
          <hr style="border: 1px solid #e5e7eb; margin: 20px 0;" />
          <p style="color: #6b7280; font-size: 12px;">이 메일은 BRIDGE 웹사이트 문의 양식을 통해 발송되었습니다.</p>
        </div>
      `,
    });

    return {
      success: true,
      message: "메시지가 성공적으로 전송되었습니다. 빠른 시일 내에 답변 드리겠습니다.",
    };
  } catch (error) {
    console.error("Email sending failed:", error);
    return {
      success: false,
      message: "메시지 전송에 실패했습니다. 잠시 후 다시 시도해주세요.",
    };
  }
}
