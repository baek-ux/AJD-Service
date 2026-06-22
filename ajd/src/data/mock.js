// 시연용 더미 데이터 — 실제 API 연동 시 이 파일이 서버 응답으로 대체됩니다.

export const PLATFORMS = [
  { id: "coupang", name: "쿠팡 윙", kind: "seller", amt: 1830000 },
  { id: "naver", name: "네이버 스마트스토어", kind: "seller", amt: 1240000 },
  { id: "eleven", name: "11번가", kind: "seller", amt: 620000 },
  { id: "gmarket", name: "지마켓", kind: "seller", amt: 410000 },
  { id: "baemin", name: "배달 정산 (라이더)", kind: "rider", amt: 268000 },
];

export const FEED = [
  { who: "패션 셀러 김○○", tag: "네이버 스마트스토어", amt: 1240000, t: "방금" },
  { who: "라이더 박○○", tag: "배달 정산", amt: 86400, t: "1분 전" },
  { who: "리빙 셀러 이○○", tag: "쿠팡 윙", amt: 3180000, t: "2분 전" },
  { who: "라이더 정○○", tag: "배달 정산", amt: 124800, t: "4분 전" },
  { who: "뷰티 셀러 최○○", tag: "11번가", amt: 920000, t: "6분 전" },
];

export const FAQ = [
  { q: "선정산을 받으면 신용등급에 영향이 있나요?", a: "없습니다. 정산금을 양도받아 미리 지급하는 방식이라 대출과 달리 신용등급에 영향을 주지 않습니다." },
  { q: "수수료는 얼마인가요?", a: "선정산 금액과 정산 예정일까지의 기간에 따라 책정됩니다. 수수료 계산기에서 미리 확인할 수 있습니다." },
  { q: "지급까지 얼마나 걸리나요?", a: "연동과 신청이 끝나면 평균 1시간 이내에 입금됩니다. 24시간 언제든 신청할 수 있습니다." },
  { q: "배달 라이더도 이용할 수 있나요?", a: "네. 배달 정산도 다음 정산일을 기다리지 않고 그날 바로 선정산받을 수 있습니다." },
];

export const SEED_PAYOUTS = [
  { id: 1, channel: "쿠팡 윙", amt: 1830000, fee: 36600, at: "2026-06-18 14:22", status: "지급완료" },
  { id: 2, channel: "네이버 스마트스토어", amt: 1240000, fee: 24800, at: "2026-06-17 09:10", status: "지급완료" },
];

export const SEED_APPS = [
  { id: 101, name: "김셀러", channel: "쿠팡 윙", amt: 1830000, at: "2026-06-19 10:02", status: "검토중" },
  { id: 102, name: "박라이더", channel: "배달 정산", amt: 268000, at: "2026-06-19 09:41", status: "검토중" },
  { id: 103, name: "이리빙", channel: "네이버", amt: 1240000, at: "2026-06-19 08:55", status: "지급완료" },
];

export const STATS = { total: 48200000000, sellers: 12400, avgMinutes: 58, channels: 12 };
