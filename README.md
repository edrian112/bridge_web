# BRIDGE Web

AI 대화를 콘텐츠로 변환하는 BRIDGE 서비스의 공식 웹사이트입니다.

## Overview

BRIDGE는 AI와의 대화를 캡처하고, SNS 콘텐츠나 블로그 포스트로 변환해주는 서비스입니다.

- **BRIDGE Notes**: AI 대화 캡처 및 SNS 콘텐츠 변환 (Chrome Extension)
- **BRIDGE Pages**: AI 대화 기반 블로그 콘텐츠 생성

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Font**: Geist (next/font)

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Main landing page
│   ├── notes/page.tsx     # BRIDGE Notes product page
│   ├── pages/page.tsx     # BRIDGE Pages product page
│   ├── pricing/page.tsx   # Pricing page
│   ├── about/page.tsx     # About page
│   ├── terms/page.tsx     # Terms of Service (이용약관)
│   ├── privacy/page.tsx   # Privacy Policy (개인정보처리방침)
│   ├── contact/page.tsx   # Contact form page
│   ├── actions/           # Server actions
│   │   └── contact.ts     # Email sending action
│   ├── icon.png           # Favicon
│   ├── apple-icon.png     # Apple touch icon
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles & Tailwind config
│
├── components/            # Reusable UI components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer with social links
│   ├── SectionHeader.tsx  # Section title component
│   ├── FeatureCard.tsx    # Feature card with icon
│   ├── ValueCard.tsx      # Value proposition card
│   ├── PlatformCard.tsx   # Platform/AI service card
│   ├── Badge.tsx          # Tag/label component
│   ├── CTASection.tsx     # Call-to-action section
│   └── index.ts           # Component exports
│
└── fonts/                 # Custom font files
```

## Components

### Core Components
| Component | Description |
|-----------|-------------|
| `Header` | 반응형 네비게이션 헤더 (모바일 메뉴 포함) |
| `Footer` | 사이트 푸터 (소셜 링크, 법적 페이지 링크) |

### UI Components
| Component | Props | Description |
|-----------|-------|-------------|
| `SectionHeader` | `title`, `subtitle?`, `className?` | 섹션 제목 컴포넌트 |
| `FeatureCard` | `icon`, `title`, `description`, `color?` | 기능 소개 카드 |
| `ValueCard` | `icon`, `title`, `description`, `color?`, `variant?` | 가치 제안 카드 |
| `PlatformCard` | `icon`, `name`, `bgColor` | 플랫폼/AI 서비스 카드 |
| `Badge` | `text`, `icon?`, `iconSrc?`, `color?`, `variant?` | 태그/라벨 컴포넌트 |
| `CTASection` | `title`, `subtitle?`, `buttonText`, `buttonHref`, `color?`, `secondaryContent?` | CTA 섹션 |

## Brand Colors

```css
/* Primary Colors */
--color-bridge: #10B981;    /* Emerald - Main brand */
--color-notes: #8B5CF6;     /* Purple - BRIDGE Notes */
--color-pages: #F59E0B;     /* Amber - BRIDGE Pages */

/* Light Variants (backgrounds) */
--color-bridge-light: #D1FAE5;
--color-notes-light: #EDE9FE;
--color-pages-light: #FEF3C7;
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | 메인 랜딩 페이지 |
| `/notes` | BRIDGE Notes 제품 소개 |
| `/pages` | BRIDGE Pages 제품 소개 |
| `/pricing` | 요금제 안내 |
| `/about` | 회사 소개 |
| `/contact` | 문의하기 (이메일 전송 폼) |
| `/terms` | 이용약관 |
| `/privacy` | 개인정보처리방침 |

## Environment Variables

문의 폼 이메일 발송을 위해 [Resend](https://resend.com) API 키가 필요합니다.

```bash
# .env.local
RESEND_API_KEY=re_xxxxxxxxxx
```

1. [Resend](https://resend.com)에서 계정 생성
2. API Key 발급
3. `.env.local` 파일에 추가

## Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/jung-geun/bridge_web.git

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### Build

```bash
# Production build
npm run build

# Start production server
npm start
```

## Deployment

이 프로젝트는 [Vercel](https://vercel.com)에 배포됩니다.

## Contact

- **Email**: edari.bridge@gmail.com
- **GitHub**: [jung-geun/bridge_web](https://github.com/jung-geun/bridge_web)
- **Threads (BRIDGE)**: [@bridge.project.ai](https://www.threads.com/@bridge.project.ai)
- **Threads (Developer)**: [@edari_bridge](https://www.threads.com/@edari_bridge)

## License

Copyright 2025 BRIDGE. All rights reserved.
