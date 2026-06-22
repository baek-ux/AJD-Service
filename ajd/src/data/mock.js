// 시연용 더미 데이터 — 실제 API 연동 시 이 파일이 서버 응답으로 대체됩니다.

// kind: "seller"(이커머스) | "delivery"(배달)
export const PLATFORMS = [
  { id: "coupang", name: "쿠팡", kind: "seller", amt: 1830000 },
  { id: "naver", name: "네이버 스마트스토어", kind: "seller", amt: 1240000 },
  { id: "eleven", name: "11번가", kind: "seller", amt: 620000 },
  { id: "gmarket", name: "지마켓", kind: "seller", amt: 410000 },
  { id: "auction", name: "옥션", kind: "seller", amt: 0 },
  { id: "ohou", name: "오늘의집", kind: "seller", amt: 280000 },
  { id: "kakao", name: "카카오 쇼핑", kind: "seller", amt: 0 },
  { id: "wemakeprice", name: "위메프", kind: "seller", amt: 150000 },
  { id: "interpark", name: "인터파크", kind: "seller", amt: 0 },
  { id: "ably", name: "에이블리", kind: "seller", amt: 320000 },
  { id: "musinsa", name: "무신사", kind: "seller", amt: 540000 },
  { id: "ssgcom", name: "SSG닷컴", kind: "seller", amt: 0 },
  { id: "baemin", name: "배달의민족", kind: "delivery", amt: 268000 },
  { id: "yogiyo", name: "요기요", kind: "delivery", amt: 142000 },
  { id: "ddangyo", name: "땡겨요", kind: "delivery", amt: 0 },
  { id: "coupangeats", name: "쿠팡이츠", kind: "delivery", amt: 96000 },
  { id: "baeminconnect", name: "배민커넥트", kind: "delivery", amt: 0 },
  { id: "saenggak", name: "생각대로", kind: "delivery", amt: 0 },
];

export const CATEGORIES = [
  { kind: "seller", label: "이커머스" },
  { kind: "delivery", label: "배달" },
];

export const FEED = [
  { who: "패션 셀러 김○○", tag: "네이버 스마트스토어", amt: 1240000, t: "방금" },
  { who: "라이더 박○○", tag: "배달의민족", amt: 86400, t: "1분 전" },
  { who: "리빙 셀러 이○○", tag: "쿠팡", amt: 3180000, t: "2분 전" },
  { who: "라이더 정○○", tag: "쿠팡이츠", amt: 124800, t: "4분 전" },
  { who: "뷰티 셀러 최○○", tag: "11번가", amt: 920000, t: "6분 전" },
];

export const FAQ = [
  { q: "선정산을 받으면 신용등급에 영향이 있나요?", a: "없습니다. 정산금을 양도받아 미리 지급하는 방식이라 대출과 달리 신용등급에 영향을 주지 않습니다." },
  { q: "수수료는 얼마인가요?", a: "선정산 금액과 정산 예정일까지의 기간에 따라 책정됩니다. 수수료 계산기에서 미리 확인할 수 있습니다." },
  { q: "지급까지 얼마나 걸리나요?", a: "연동과 신청이 끝나면 평균 1시간 이내에 입금됩니다. 24시간 언제든 신청할 수 있습니다." },
  { q: "배달 라이더도 이용할 수 있나요?", a: "네. 배달 정산도 다음 정산일을 기다리지 않고 그날 바로 선정산받을 수 있습니다." },
];

// 신청·지급 통합 레코드. status: "검토중" | "지급완료" | "반려"
export const SEED_APPLICATIONS = [
  { id: 1, applicant: "김셀러", channel: "쿠팡", amt: 1830000, fee: 36600, at: "2026-06-18 14:22", status: "지급완료" },
  { id: 2, applicant: "이리빙", channel: "네이버 스마트스토어", amt: 1240000, fee: 24800, at: "2026-06-17 09:10", status: "지급완료" },
  { id: 3, applicant: "박라이더", channel: "배달의민족", amt: 268000, fee: 5360, at: "2026-06-19 09:41", status: "검토중" },
  { id: 4, applicant: "최뷰티", channel: "11번가", amt: 920000, fee: 18400, at: "2026-06-19 11:15", status: "검토중" },
];

export const MEMBERS = [
  { id: "m1", name: "김셀러", type: "이커머스 셀러", channels: 3, joined: "2026-03-12", status: "활성" },
  { id: "m2", name: "박라이더", type: "배달 라이더", channels: 1, joined: "2026-04-02", status: "활성" },
  { id: "m3", name: "이리빙", type: "이커머스 셀러", channels: 2, joined: "2026-04-21", status: "활성" },
  { id: "m4", name: "최뷰티", type: "이커머스 셀러", channels: 4, joined: "2026-05-09", status: "정지" },
  { id: "m5", name: "정라이더", type: "배달 라이더", channels: 2, joined: "2026-05-30", status: "활성" },
];

export const POLICY = {
  baseRate: 1.2, // 기본 수수료율 (%)
  dailyRate: 0.08, // 정산까지 1일당 가산율 (%)
  maxLimitSeller: 50000000, // 셀러 1회 최대 한도 (원)
  maxLimitRider: 5000000, // 라이더 1회 최대 한도 (원)
  payoutSla: 60, // 지급 목표 시간 (분)
};

export const STATS = { total: 48200000000, sellers: 12400, avgMinutes: 58, channels: 18 };
