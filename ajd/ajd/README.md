# 아정당 선정산 (데모)

셀러·배달라이더 통합 선정산 서비스의 시연용 데모입니다.
실제 금융/API 연동 없이, 더미 데이터로 고객 여정과 운영 화면을 보여줍니다.

## 기술 스택
- React 18 + Vite
- React Router (실제 경로 기반 라우팅)
- Context (인증 / 앱 상태)
- 디자인 토큰 기반 인라인 스타일 (`src/theme.js`)
- Supabase 연결 지점 준비 (`src/lib/supabase.js`, `src/lib/auth.jsx`)

## 실행
```bash
npm install
npm run dev      # 개발 서버
npm run build    # 배포 빌드 (dist/)
```

## 폴더 구조
```
src/
  theme.js            디자인 토큰(색/폰트/포맷)
  data/mock.js        시연용 더미 데이터
  lib/                인증(auth) · Supabase 클라이언트 · 훅
  store/appState.jsx  연동 채널 / 지급 내역 상태
  components/         Header · Footer · Layout · Logo · 공용 UI
  routes/             RequireAuth (로그인 가드)
  pages/              화면별 컴포넌트 (11개)
  App.jsx             라우트 정의
  main.jsx            엔트리포인트
```

## 화면
- 공개: 랜딩 / 한도조회 / 수수료 계산기 / 혜택 / 고객센터 / 회원가입 / 로그인
- 회원: 대시보드 / 채널 연동 / 선정산 신청 / 내역
- 운영자: 신청 관리(승인·반려)

## 데모 → 실제 전환 메모
- 인증: `src/lib/auth.jsx`의 login/signup/logout 내부를 Supabase 호출로 교체
- 데이터: `src/data/mock.js`를 실제 API/DB 응답으로 교체
- 로고: `public/ajd-logo.webp` 추가 후 `src/components/Logo.jsx`의 배지 div를 img로 교체

> 본 사이트는 시연용 데모이며 표시된 금액·고객·지급 내역은 예시입니다. 실제 금융거래가 이루어지지 않습니다.
