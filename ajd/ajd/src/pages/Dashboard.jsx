import { useNavigate } from "react-router-dom";
import { ArrowRight, Plus } from "lucide-react";
import { C, won } from "../theme";
import { PLATFORMS } from "../data/mock";
import { useAuth } from "../lib/auth";
import { useAppState } from "../store/appState";
import { Page, Btn } from "../components/ui";
import PayoutTable from "../components/PayoutTable";

export default function Dashboard() {
  const nav = useNavigate();
  const { user } = useAuth();
  const { connected, payouts } = useAppState();
  const available = PLATFORMS.filter((p) => connected.includes(p.id)).reduce((s, p) => s + p.amt, 0);

  return (
    <Page max={920} title={`${user?.name || "회원"}님, 안녕하세요`} sub="연동된 채널의 정산 예정 금액을 미리 받아보세요.">
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 24 }}>
        <div style={{ flex: "2 1 360px", background: `linear-gradient(135deg, ${C.brand}, ${C.brandDark})`, borderRadius: 18, padding: 28, color: C.white }}>
          <div style={{ fontSize: 14, opacity: 0.85, fontWeight: 600 }}>지금 받을 수 있는 금액</div>
          <div style={{ fontSize: 40, fontWeight: 800, letterSpacing: "-1.2px", margin: "8px 0 16px" }}>{won(available)}</div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Btn variant="white" onClick={() => nav("/apply")} icon={<ArrowRight size={17} />}>선정산 신청</Btn>
            <Btn variant="white" onClick={() => nav("/connect")}>채널 연동</Btn>
          </div>
        </div>
        <div style={{ flex: "1 1 200px", background: C.white, border: `1px solid ${C.line}`, borderRadius: 18, padding: 24 }}>
          <div style={{ fontSize: 13.5, color: C.faint, fontWeight: 600 }}>연동된 채널</div>
          <div style={{ fontSize: 30, fontWeight: 800, color: C.ink, margin: "6px 0 2px" }}>{connected.length}곳</div>
          <button onClick={() => nav("/connect")} style={{ background: "none", border: "none", color: C.brand, fontWeight: 700, fontSize: 13.5, cursor: "pointer", padding: 0, display: "inline-flex", alignItems: "center", gap: 4 }}>
            <Plus size={14} /> 채널 추가
          </button>
        </div>
      </div>
      <h3 style={{ fontSize: 18, fontWeight: 700, color: C.ink, margin: "0 0 14px" }}>최근 지급 내역</h3>
      <PayoutTable payouts={payouts} empty="아직 지급 내역이 없어요. 채널을 연동하고 첫 선정산을 신청해 보세요." />
    </Page>
  );
}
