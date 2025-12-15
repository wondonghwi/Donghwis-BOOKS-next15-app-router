# 📚 Donghwi's BOOKS

Next.js 15 app-router 기반의 도서 관리 애플리케이션입니다.

[🌐 서비스 링크](https://onebite-books-app-rust-eight.vercel.app/) (⛔️ 현재는 접속되지않습니다.)

## 기술 스택

- **프레임워크**: Next.js 15.5.9
- **언어**: TypeScript
- **React 버전**: React 19.2.3
- **라우팅**: App Router
- **패키지 매니저**: pnpm

## 주요 기능

- 도서 목록 조회
- 개별 도서 상세 정보 확인 (`/book/[id]` 경로)
- 서버 컴포넌트를 활용한 서버 사이드 렌더링
- API 서버와의 연동 (환경 변수 `NEXT_PUBLIC_API_SERVER_URL` 사용)

## 프로젝트 구조

- **src**: 소스 코드 루트 디렉토리
  - **actions**: 서버 액션 (리뷰 생성/삭제)
  - **app**: App Router 기반 페이지 구조
    - **(with-searchbar)**: 검색바 포함 레이아웃
    - **search**: 검색 관련 페이지
    - **book/[id]**: 개별 도서 상세 페이지
    - `layout.tsx`: 루트 레이아웃
    - `page.tsx`: 메인 페이지
  - **components**: 재사용 가능한 컴포넌트
    - `skeleton`: 로딩 스켈레톤 컴포넌트
    - `book-item.tsx`: 도서 아이템 컴포넌트
    - `review-editor.tsx`: 리뷰 에디터 컴포넌트
    - `review-item.tsx`: 리뷰 아이템 컴포넌트
    - `searchbar.tsx`: 검색바 컴포넌트
  - **mock**: 목업 데이터
  - **util**: 유틸리티 함수
  - `types.ts`: 타입 정의 파일

## 설치 및 실행

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm dev

# 프로덕션 빌드
pnpm build

# 프로덕션 서버 실행
pnpm start
```

## 환경 변수 설정

`.env.local` 파일을 생성하고 아래 변수를 설정해야 합니다:

```bash
NEXT_PUBLIC_API_SERVER_URL=http://localhost:12345
```

개발 서버가 실행되면, 브라우저에서 http://localhost:3000 에 접속하여 애플리케이션을 확인할 수 있습니다.
