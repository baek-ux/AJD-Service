import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2, CheckCircle2 } from "lucide-react";
import { C, won } from "../theme";
import { PLATFORMS } from "../data/mock";
import { useAppState } from "../store/appState";
import { Page, Btn, Row, EmptyBox } from "../components/ui";

export default function Apply() {
  const nav = useNavigate();
  const { connected, addPayout } = useAppState();
  const opts = PLATFORMS.filter((p) => connected.includes(p.id) && p.amt > 0);
  const [sel, setSel] = useState(opts[0]?.id || "");
  const [step, setStep] = useState(0);

  const chosen = opts.find((p) => p.id === sel);
  const fee = chosen ? Math.round(chosen.amt * 0.02) : 0;

  const run = () => {
    setStep(1);
    setTimeout(() => {
      setStep(2);
      addPayout({ id: Date.now(), channel: chosen.name, amt: chosen.amt, fee, at: "방금 전", status: "지급완료" });
    }, 1900);
  };

  if (opts.length === 0)
    return (
      <Page max={560} title="선정산 신청">
        <EmptyBox text="정산 예정 금액이 있는 연동 채널이 없어요. 채널을 연동해 주세요." action={<Btn onClick={() => nav("/connect")}>채널 연동하러 가기</Btn>} />
      </Page>
    );

  return (
    <Page max={560} title="선정산 신청" sub="연동된 채널에서 받을 정산금을 지금 바로 지급받으세요.">
      <div style={{ background: C.white, border: `1px solid ${C.line}`, borderRadius: 18, padding: 28 }}>
        {step === 0 && (
          <>
            <span style={{ display: "block", fontSize: 13.5, fontWeight: 600, color: C.ink, marginBottom: 9 }}>지급받을 채널</span>
            <div style={{ display: "flex", flexDirection: "column", gap: 9, marginBottom: 20 }}>
              {opts.map((p) => (
                <button key={p.id} onClick={() => setSel(p.id)} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 16px", borderRadius: 11, cursor: "pointer", border: `1.5px solid ${sel === p.id ? C.brand : C.line}`, background: sel === p.id ? C.tint : C.white }}>
                  <span style={{ fontWeight: 700, fontSize: 14.5, color: C.ink }}>{p.name}</span>
                  <span style={{ fontWeight: 700, fontSize: 14.5, color: C.brand }}>{won(p.amt)}</span>
                </button>
              ))}
            </div>
            <div style={{ background: C.surface, borderRadius: 12, padding: 18, marginBottom: 20 }}>
              <Row k="선정산 금액" v={won(chosen.amt)} />
              <Row k="수수료 (2.0%)" v={"- " + won(fee)} red />
              <div style={{ borderTop: `1px solid ${C.line}`, margin: "10px 0" }} />
              <Row k="실 지급액" v={won(chosen.amt - fee)} big />
            </div>
            <Btn full size="lg" onClick={run}>{won(chosen.amt - fee)} 지급받기</Btn>
          </>
        )}
        {step === 1 && (
          <div style={{ textAlign: "center", padding: "40px 0" }}>
            <Loader2 size={34} color={C.brand} style={{ animation: "ajdspin 1s linear infinite" }} />
            <p style={{ fontSize: 16, fontWeight: 600, color: C.ink, marginTop: 16 }}>지급을 처리하고 있습니다…</p>
            <p style={{ fontSize: 13.5, color: C.faint, marginTop: 6 }}>정산금 채권 확인 및 입금 처리중</p>
          </div>
        )}
        {step === 2 && (
          <div style={{ textAlign: "center", padding: "8px 0" }}>
            <div style={{ width: 52, height: 52, borderRadius: 999, background: C.greenTint, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" }}><CheckCircle2 size={28} color={C.green} /></div>
            <p style={{ fontSize: 15, color: C.faint, fontWeight: 600 }}>지급 완료</p>
            <div style={{ fontSize: 36, fontWeight: 800, color: C.brand, letterSpacing: "-1px", margin: "6px 0" }}>{won(chosen.amt - fee)}</div>
            <p style={{ fontSize: 14, color: C.body, marginBottom: 22 }}>등록된 계좌로 입금되었습니다.</p>
            <Btn full size="lg" onClick={() => nav("/history")}>지급 내역 보기</Btn>
            <button onClick={() => setStep(0)} style={{ background: "none", border: "none", color: C.faint, fontSize: 13.5, marginTop: 14, cursor: "pointer", textDecoration: "underline" }}>다른 채널 신청하기</button>
          </div>
        )}
      </div>
    </Page>
  );
}
