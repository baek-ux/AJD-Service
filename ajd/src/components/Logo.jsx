import { C } from "../theme";

// 미리보기용 CSS 재현 로고.
// 실제 로고 파일로 교체하려면: public/ajd-logo.webp 를 넣고
// 아래 배지 <div> 블록을 <img src="/ajd-logo.webp" alt="아정당" style={{ height: size }} /> 로 바꾸면 됩니다.
export default function Logo({ size = 34, light }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
      <div style={{ position: "relative", width: size, height: size }}>
        <div
          style={{
            width: size,
            height: size,
            background: C.brand,
            borderRadius: size * 0.28,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: C.white,
            fontWeight: 800,
            fontSize: size * 0.42,
            letterSpacing: "-1px",
          }}
        >
          ㅇㅈㄷ
        </div>
        <div
          style={{
            position: "absolute",
            bottom: -3,
            left: size * 0.18,
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
