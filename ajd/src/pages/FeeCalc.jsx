import { useState } from "react";
import { C, won } from "../theme";
import { Page, Field, Row } from "../components/ui";

export default function FeeCalc() {
  const [amt, setAmt] = useState("3000000");
  const [days, setDays] = useState(7);
  const n = Number(amt.replace(/[^0-9]/g, "")) || 0;
  const rate = 0.012 + days * 0.0008; // 데모용 단순 모델
  const fee = Math.round(n * rate);

  return (
    <Page max={560} title="수수료 계산기" sub="받을 금액과 정산까지 남은 기간을 넣으면 예상 수수료가 바로 나와요.">
      <div style={{ background: C.white, border: `1px solid ${C.line}`, borderRadius: 18, padding: 28 }}>
        <Field label="선정산 받을 금액 (원)" value={amt} onChange={(e) => setAmt(e.target.value)} />
        <span style={{ display: "block", fontSize: 13.5, fontWeight: 600, color: C.ink, marginBottom: 7 }}>정산까지 남은 기간: {days}일</span>
        <input type="range" min="1" max="30" value={days} onChange={(e) => setDays(Number(e.target.value))} style={{ width: "100%", marginBottom: 24, accentColor: C.brand }} />
        <div style={{ background: C.surface, borderRadius: 12, padding: 20 }}>
          <Row k="선정산 금액" v={won(n)} />
          <Row k={`예상 수수료 (${(rate * 100).toFixed(2)}%)`} v={"- " + won(fee)} red />
          <div style={{ borderTop: `1px solid ${C.line}`, margin: "12px 0" }} />
          <Row k="실 지급 예상액" v={won(n - fee)} big />
        </div>
        <p style={{ fontSize: 12.5, color: C.faint, marginTop: 14 }}>* 데모용 예시 계산입니다. 실제 수수료는 정산 채널·심사 결과에 따라 달라집니다.</p>
      </div>
    </Page>
  );
}
