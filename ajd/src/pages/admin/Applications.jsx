import { C, won } from "../../theme";
import { useAppState } from "../../store/appState";
import { Btn, MiniStat } from "../../components/ui";
import { StatusBadge } from "../../components/PayoutTable";

export default function Applications() {
  const { applications, setStatus } = useAppState();
  const paidTotal = applications.filter((a) => a.status === "지급완료").reduce((s, a) => s + a.amt, 0);
  const pending = applications.filter((a) => a.status === "검토중").length;

  return (
    <>
      <h1 style={{ fontSize: 26, fontWeight: 800, color: C.ink, letterSpacing: "-0.8px", margin: "0 0 6px" }}>신청 관리</h1>
      <p style={{ fontSize: 15, color: C.body, margin: "0 0 24px" }}>들어온 선정산 신청을 검토하고 지급을 처리합니다.</p>

      <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 24 }}>
        <MiniStat label="전체 신청" v={applications.length + "건"} />
        <MiniStat label="검토 대기" v={pending + "건"} />
        <MiniStat label="지급 완료" v={applications.filter((a) => a.status === "지급완료").length + "건"} />
        <MiniStat label="지급 총액" v={won(paidTotal)} />
      </div>

      <div style={{ background: C.white, border: `1px solid ${C.line}`, borderRadius: 16, overflow: "hidden" }}>
        <div style={{ display: "flex", padding: "13px 20px", background: C.surface, fontSize: 13, fontWeight: 700, color: C.faint }}>
          <span style={{ flex: 1.4 }}>신청자</span>
          <span style={{ flex: 1.8 }}>채널</span>
          <span style={{ flex: 1.4, textAlign: "right" }}>금액</span>
          <span style={{ flex: 1.6, textAlign: "right" }}>일시</span>
          <span style={{ flex: 2, textAlign: "right" }}>상태 / 처리</span>
        </div>
        {applications.map((a) => (
          <div key={a.id} style={{ display: "flex", alignItems: "center", padding: "14px 20px", borderTop: `1px solid ${C.line}`, fontSize: 14.5 }}>
            <span style={{ flex: 1.4, fontWeight: 600, color: C.ink }}>{a.applicant}</span>
            <span style={{ flex: 1.8, color: C.body }}>{a.channel}</span>
            <span style={{ flex: 1.4, textAlign: "right", fontWeight: 700, color: C.ink }}>{won(a.amt)}</span>
            <span style={{ flex: 1.6, textAlign: "right", color: C.faint, fontSize: 13 }}>{a.at}</span>
            <span style={{ flex: 2, textAlign: "right" }}>
              {a.status === "검토중" ? (
                <span style={{ display: "inline-flex", gap: 7, justifyContent: "flex-end" }}>
                  <Btn size="sm" onClick={() => setStatus(a.id, "지급완료")}>지급 승인</Btn>
                  <Btn size="sm" variant="ghost" onClick={() => setStatus(a.id, "반려")}>반려</Btn>
                </span>
              ) : (
                <StatusBadge status={a.status} />
              )}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
