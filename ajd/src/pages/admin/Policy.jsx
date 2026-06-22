import { useState } from "react";
import { C, won } from "../../theme";
import { POLICY } from "../../data/mock";
import { Btn } from "../../components/ui";

function PolicyField({ label, suffix, value, onChange, hint }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <div style={{ fontSize: 13.5, fontWeight: 600, color: C.ink, marginBottom: 7 }}>{label}</div>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={{ width: 180, boxSizing: "border-box", padding: "11px 13px", fontSize: 15, border: `1.5px solid ${C.line}`, borderRadius: 10, color: C.ink, outline: "none" }}
        />
        {suffix && <span style={{ fontSize: 14, color: C.faint, fontWeight: 600 }}>{suffix}</span>}
      </div>
      {hint && <div style={{ fontSize: 12.5, color: C.faint, marginTop: 6 }}>{hint}</div>}
    </div>
  );
}

export default function Policy() {
  const [p, setP] = useState(POLICY);
  const [saved, setSaved] = useState(false);
  const set = (k) => (v) => { setP((s) => ({ ...s, [k]: v })); setSaved(false); };

  return (
    <>
      <h1 style={{ fontSize: 26, fontWeight: 800, color: C.ink, letterSpacing: "-0.8px", margin: "0 0 6px" }}>한도 · 수수료 정책</h1>
      <p style={{ fontSize: 15, color: C.body, margin: "0 0 24px" }}>선정산 수수료율과 한도 기준을 설정합니다.</p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
        <div style={{ flex: "1 1 320px", background: C.white, border: `1px solid ${C.line}`, borderRadius: 16, padding: 26 }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, color: C.ink, margin: "0 0 18px" }}>수수료</h3>
          <PolicyField label="기본 수수료율" suffix="%" value={p.baseRate} onChange={set("baseRate")} hint="모든 선정산 건에 적용되는 기본 비율" />
          <PolicyField label="정산까지 1일당 가산율" suffix="%" value={p.dailyRate} onChange={set("dailyRate")} hint="정산 예정일이 멀수록 더해지는 비율" />
          <PolicyField label="지급 목표 시간" suffix="분" value={p.payoutSla} onChange={set("payoutSla")} />
        </div>
        <div style={{ flex: "1 1 320px", background: C.white, border: `1px solid ${C.line}`, borderRadius: 16, padding: 26 }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, color: C.ink, margin: "0 0 18px" }}>한도</h3>
          <PolicyField label="셀러 1회 최대 한도" suffix="원" value={p.maxLimitSeller} onChange={set("maxLimitSeller")} hint={`현재: ${won(p.maxLimitSeller)}`} />
          <PolicyField label="라이더 1회 최대 한도" suffix="원" value={p.maxLimitRider} onChange={set("maxLimitRider")} hint={`현재: ${won(p.maxLimitRider)}`} />
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 24 }}>
        <Btn onClick={() => setSaved(true)}>정책 저장</Btn>
        {saved && <span style={{ fontSize: 13.5, fontWeight: 600, color: C.green }}>저장되었습니다 (데모)</span>}
      </div>
    </>
  );
}
