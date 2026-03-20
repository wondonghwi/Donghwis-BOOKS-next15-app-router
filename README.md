# 📚 Donghwi's BOOKS

Next.js 15 App Router 기반의 도서 관리 애플리케이션입니다.  
도서 목록, 검색, 상세 조회, 리뷰 작성/삭제 기능을 제공하며 백엔드 API 서버와 연동됩니다.

## 링크

- 프론트 서비스: [https://onebite-books-app-wondonghwis-projects.vercel.app](https://onebite-books-app-wondonghwis-projects.vercel.app)
- 백엔드 API: [https://onebite-books-server-wondonghwis-projects.vercel.app/book](https://onebite-books-server-wondonghwis-projects.vercel.app/book)

## 기술 스택

- 프레임워크: Next.js 15.5.9
- 언어: TypeScript
- UI: React 19
- 라우팅: App Router
- 패키지 매니저: pnpm 9.15.0

## 주요 기능

- 도서 목록 조회
- 도서 검색
- 도서 상세 조회 (`/book/[id]`)
- 리뷰 작성 및 삭제
- 서버 컴포넌트 기반 데이터 페칭
- API 서버 연동 (`NEXT_PUBLIC_API_SERVER_URL`)

## 프로젝트 구조

```text
src
├── actions                # 리뷰 생성/삭제 서버 액션
├── app
│   ├── (with-searchbar)   # 검색바가 포함된 레이아웃 그룹
│   ├── @modal             # 인터셉트 라우트 기반 모달
│   ├── book/[id]          # 도서 상세 페이지
│   ├── layout.tsx         # 루트 레이아웃
│   └── page.tsx           # 메인 페이지
├── components             # 재사용 가능한 UI 컴포넌트
├── mock                   # 목업 데이터
├── types.ts               # 공통 타입
└── util                   # 유틸리티 함수
```

## 시작하기

### 1. 의존성 설치

```bash
pnpm install
```

### 2. 환경 변수 설정

프로젝트 루트에 `.env.local` 파일을 만들고 아래 값을 설정합니다.

```bash
NEXT_PUBLIC_API_SERVER_URL=http://localhost:12345
```

로컬이 아니라 배포 API를 바로 붙이고 싶다면 아래처럼 설정하면 됩니다.

```bash
NEXT_PUBLIC_API_SERVER_URL=https://onebite-books-server-wondonghwis-projects.vercel.app
```

### 3. 개발 서버 실행

```bash
pnpm dev
```

실행 후 [http://localhost:3000](http://localhost:3000) 에서 확인할 수 있습니다.

## 실행 명령어

```bash
# 개발 서버
pnpm dev

# 프로덕션 빌드
pnpm build

# 프로덕션 서버 실행
pnpm start

# ESLint 검사
pnpm lint
```

## 배포 메모

- Vercel 배포 시 `NEXT_PUBLIC_API_SERVER_URL`을 반드시 운영 백엔드 주소로 설정해야 합니다.
- `/book/[id]` 페이지는 빌드 시 백엔드 응답에 영향을 받으므로, 운영 API가 정상 응답하는 상태에서 배포하는 것이 안전합니다.
- 백엔드가 공개 API라면 Vercel Deployment Protection이 API 호출을 막지 않는지 함께 확인해야 합니다.

## 관련 저장소

- 프론트엔드: 현재 저장소
- 백엔드: [onebite-books-server](https://github.com/wondonghwi/onebite-books-server)
