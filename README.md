# 📚 Donghwi's BOOKS

Next.js 15 app-router 기반의 도서 관리 애플리케이션입니다.

[🌐 서비스 접근하기](https://onebite-books-74jpe79tf-wondonghwis-projects.vercel.app/)

## 기술 스택

- **프레임워크**: Next.js 15.2.0
- **언어**: TypeScript
- **React 버전**: React 19.0.0
- **라우팅**: App Router

## 주요 기능

- 도서 목록 조회
- 개별 도서 상세 정보 확인 (`/book/[id]` 경로)
- 서버 컴포넌트를 활용한 서버 사이드 렌더링
- API 서버와의 연동 (환경 변수 `NEXT_PUBLIC_API_SERVER_URL` 사용)

## 프로젝트 구조

- **src/app**: 메인 애플리케이션 코드
  - `layout.tsx`: 전체 앱의 레이아웃 구조 정의
  - `page.tsx`: 메인 페이지 컴포넌트
  - `book/[id]/page.tsx`: 개별 도서 상세 페이지
  - `globals.css`: 전역 스타일 정의

### 필수 조건

- Node.js 18.17 이상
- Yarn 패키지 매니저

### 설치

```bash
# 의존성 설치
yarn install
```

```bash
# 개발서버 실행
yarn install
```

### 환경 변수 설정

`.env.local` 파일을 생성하고 변수를 설정해야합니다.

- 개발 서버가 실행되면, 브라우저에서 http://localhost:3000에 접속하여 애플리케이션을 확인할 수 있습니다.
