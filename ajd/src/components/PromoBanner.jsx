import { ArrowRight } from "lucide-react";
import { C } from "../theme";

// 아정당 지원금 프로모 배너 — 랜딩 하단 / 혜택 페이지 공용
export default function PromoBanner({ ctaLabel = "내 지원금 확인하기", onCta, compact }) {
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        background: `linear-gradient(115deg, #3B79F5 0%, ${C.brand} 52%, ${C.brandDark} 100%)`,
        borderRadius: 20,
        padding: compact ? "30px 32px" : "40px 40px",
        color: C.white,
      }}
    >
      {/* 장식용 글로우 (원빈 자리 대체) */}
      <div style={{ position: "absolute", right: -30, top: -70, width: 250, height: 250, borderRadius: "50%", background: "rgba(255,255,255,.10)" }} />
      <div style={{ position: "absolute", right: 90, bottom: -90, width: 210, height: 210, borderRadius: "50%", background: "rgba(255,255,255,.07)" }} />

      <div style={{ position: "relative", display: "flex", flexWrap: "wrap", gap: 20, alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ flex: "1 1 380px" }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,.85)", marginBottom: 12, letterSpacing: "-0.2px" }}>
            인터넷 · TV · 가전렌탈 · 휴대폰
          </div>
          <h3 style={{ fontSize: compact ? 26 : 31, fontWeight: 800, lineHeight: 1.25, letterSpacing: "-0.9px", margin: "0 0 12px" }}>
            가만히 두면 <span style={{ color: "#FFE27A" }}>132만원</span> 손해!
          </h3>
          <p style={{ fontSize: 15.5, color: "rgba(255,255,255,.9)", margin: 0 }}>
            아정당에서 확인하고 숨어있는 내 지원금 챙기세요!
          </p>
        </div>
        <button
          onClick={onCta}
          className="ajd-cta"
          style={{ background: C.white, color: C.brand, border: "none", borderRadius: 12, padding: "14px 24px", fontSize: 15.5, fontWeight: 700, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8, whiteSpace: "nowrap" }}
        >
          {ctaLabel} <ArrowRight size={17} />
        </button>
      </div>
    </div>
  );
}
