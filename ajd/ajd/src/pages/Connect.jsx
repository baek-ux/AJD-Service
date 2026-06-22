import { useState } from "react";
import { ShoppingBag, Bike, Check, Loader2, Link2 } from "lucide-react";
import { C, won } from "../theme";
import { PLATFORMS } from "../data/mock";
import { useAppState } from "../store/appState";
import { Page, Btn } from "../components/ui";

export default function Connect() {
  const { connected, connect } = useAppState();
  const [loading, setLoading] = useState(null);

  const click = (id) => {
    if (connected.includes(id)) return;
    setLoading(id);
    setTimeout(() => { connect(id); setLoading(null); }, 1500); // 실제: 연동 OAuth/스크래핑 결과 반영
  };

  return (
    <Page max={680} title="정산 채널 연동" sub="쇼핑몰·배달앱 계정을 연동하면 정산 예정 금액을 자동으로 불러와요.">
      <div style={{ background: C.white, border: `1px solid ${C.line}`, borderRadius: 16, overflow: "hidden" }}>
        {PLATFORMS.map((p, i) => {
          const done = connected.includes(p.id);
          return (
            <div key={p.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: "18px 22px", borderTop: i ? `1px solid ${C.line}` : "none" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: 11, background: p.kind === "rider" ? C.amberTint : C.tint, color: p.kind === "rider" ? C.amberInk : C.brand, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {p.kind === "rider" ? <Bike size={19} /> : <ShoppingBag size={19} />}
                </div>
                <div>
                  <div style={{ fontSize: 15.5, fontWeight: 700, color: C.ink }}>{p.name}</div>
                  {done && <div style={{ fontSize: 13, color: C.green, fontWeight: 600 }}>정산 예정 {won(p.amt)} 확인됨</div>}
                </div>
              </div>
              {done ? (
                <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 13.5, fontWeight: 700, color: C.green, background: C.greenTint, padding: "8px 13px", borderRadius: 9 }}><Check size={15} /> 연동완료</span>
              ) : loading === p.id ? (
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13.5, fontWeight: 700, color: C.faint, padding: "8px 13px" }}><Loader2 size={15} style={{ animation: "ajdspin 1s linear infinite" }} /> 조회중…</span>
              ) : (
                <Btn size="sm" variant="ghost" onClick={() => click(p.id)} icon={<Link2 size={14} />}>연동하기</Btn>
              )}
            </div>
          );
        })}
      </div>
    </Page>
  );
}
