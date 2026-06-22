// 디자인 토큰 — 색상, 폰트, 포맷 유틸을 한곳에서 관리
export const C = {
  brand: "#145CE6",
  brandDark: "#0E47B4",
  ink: "#0B1B3F",
  body: "#3A4A66",
  faint: "#6B7A95",
  tint: "#EEF3FE",
  surface: "#F6F8FC",
  line: "#E3E8F2",
  white: "#FFFFFF",
  amber: "#FFB020",
  amberTint: "#FFF6E5",
  amberInk: "#7A4E00",
  green: "#16A34A",
  greenTint: "#E7F6EC",
  red: "#D14343",
  redTint: "#FCEBEB",
};

export const FONT =
  "'Pretendard','Pretendard Variable',-apple-system,BlinkMacSystemFont,'Apple SD Gothic Neo','Malgun Gothic',sans-serif";

export const won = (n) => "₩" + Math.round(Number(n) || 0).toLocaleString("ko-KR");
