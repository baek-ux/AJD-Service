import { C, won } from "../theme";
import { EmptyBox } from "./ui";

export const STATUS_STYLE = {
  지급완료: { color: C.green, bg: C.greenTint },
  검토중: { color: C.amberInk, bg: C.amberTint },
  반려: { color: C.red, bg: C.redTint },
};

export function StatusBadge({ status }) {
  const s = STATUS_STYLE[status] || { color: C.faint, bg: C.surface };
  return (
    <span style={{ fontSize: 12.5, fontWeight: 700, color: s.color, background: s.bg, padding: "4px 9px", borderRadius: 7 }}>
      {status}
    </span>
  );
}

// 사용자 측 신청·지급 내역 테이블
export default function PayoutTable({ payouts, empty }) {
  if (!payouts.length) return <EmptyBox text={empty} />;
  return (
    <div style={{ background: C.white, border: `1px solid ${C.line}`, borderRadius: 16, overflow: "hidden" }}>
      <div style={{ display: "flex", padding: "13px 20px", background: C.surface, fontSize: 13, fontWeight: 700, color: C.faint }}>
        <span style={{ flex: 2 }}>채널</span>
        <span style={{ flex: 1.4, textAlign: "right" }}>금액</span>
        <span style={{ flex: 1.2, textAlign: "right" }}>수수료</span>
        <span style={{ flex: 1.6, textAlign: "right" }}>일시</span>
        <span style={{ flex: 1, textAlign: "right" }}>상태</span>
      </div>
      {payouts.map((p) => (
        <div key={p.id} style={{ display: "flex", alignItems: "center", padding: "15px 20px", borderTop: `1px solid ${C.line}`, fontSize: 14.5 }}>
          <span style={{ flex: 2, fontWeight: 600, color: C.ink }}>{p.channel}</span>
          <span style={{ flex: 1.4, textAlign: "right", fontWeight: 700, color: C.ink }}>{won(p.amt)}</span>
          <span style={{ flex: 1.2, textAlign: "right", color: C.faint }}>{won(p.fee)}</span>
          <span style={{ flex: 1.6, textAlign: "right", color: C.faint, fontSize: 13 }}>{p.at}</span>
          <span style={{ flex: 1, textAlign: "right" }}><StatusBadge status={p.status} /></span>
        </div>
      ))}
    </div>
  );
}
