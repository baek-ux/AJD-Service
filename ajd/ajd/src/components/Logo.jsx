import { C } from "../theme";

// 미리보기용 CSS 재현 로고 (가로형 말풍선 배지).
// 실제 로고로 정확히 맞추려면: public/ajd-logo.webp 를 넣고
// 아래 배지 블록을 <img src="/ajd-logo.webp" alt="아정당" style={{ height: size }} /> 로 교체.
export default function Logo({ size = 32, light }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <div style={{ position: "relative", display: "inline-flex" }}>
        <div
          style={{
            height: size,
            padding: `0 ${size * 0.36}px`,
            background: C.brand,
            borderRadius: size * 0.36,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: C.white,
            fontWeight: 800,
            fontSize: size * 0.52,
            letterSpacing: "0.5px",
          }}
        >
          ㅇㅈㄷ
        </div>
        <div
          style={{
            position: "absolute",
            bottom: -3,
            left: size * 0.3,
            width: 0,
            height: 0,
            borderLeft: "5px solid transparent",
            borderRight: "5px solid transparent",
            borderTop: `7px solid ${C.brand}`,
          }}
        />
      </div>
      <span style={{ fontWeight: 700, fontSize: 18, color: light ? C.white : C.ink, letterSpacing: "-0.4px" }}>
        아정당 <span style={{ color: C.brand }}>선정산</span>
      </span>
    </div>
  );
}
