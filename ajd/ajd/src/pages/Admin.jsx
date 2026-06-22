import { useState } from "react";
import { C, won } from "../theme";
import { SEED_APPS } from "../data/mock";
import { Page, Btn, MiniStat } from "../components/ui";

export default function Admin() {
  const [apps, setApps] = useState(SEED_APPS);
  const act = (id, status) => setApps((a) => a.map((x) => (x.id === id ? { ...x, status } : x)));

  return (
    <Page max={980} title="운영자 · 신청 관리" sub="들어온 선정산 신청을 검토하고 지급을 처리합니다.">
      <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 24 }}>
        <MiniStat label="오늘 신청" v={apps.length + "건"} />
        <MiniStat label="검토 대기" v={apps.filter((a) => a.status === "검토중").length + "건"} />
        <MiniStat label="지급 완료" v={apps.filter((a) => a.status === "지급완료").length + "건"} />
        <MiniStat label="지급 총액" v={won(apps.reduce((s, a) => s + a.amt, 0))} />
      </div>
      <div style={{ background: C.white, border: `1px solid ${C.line}`, borderRadius: 16, overflow: "hidden" }}>
        <div style={{ display: "flex", padding: "13px 20px", background: C.surface, fontSize: 13, fontWeight: 700, color: C.faint }}>
          <span style={{ flex: 1.4 }}>신청자</span>
          <span style={{ flex: 1.6 }}>채널</span>
          <span style={{ flex: 1.4, textAlign: "right" }}>금액</span>
          <span style={{ flex: 1.4, textAlign: "right" }}>일시</span>
          <span style={{ flex: 1.8, textAlign: "right" }}>처리</span>
        </div>
        {apps.map((a) => (
          <div key={a.id} style={{ display: "flex", alignItems: "center", padding: "14px 20px", borderTop: `1px solid ${C.line}`, fontSize: 14.5 }}>
            <span style={{ flex: 1.4, fontWeight: 600, color: C.ink }}>{a.name}</span>
            <span style={{ flex: 1.6, color: C.body }}>{a.channel}</span>
            <span style={{ flex: 1.4, textAlign: "right", fontWeight: 700, color: C.ink }}>{won(a.amt)}</span>
            <span style={{ flex: 1.4, textAlign: "right", color: C.faint, fontSize: 13 }}>{a.at}</span>
            <span style={{ flex: 1.8, textAlign: "right" }}>
              {a.status === "검토중" ? (
                <span style={{ display: "inline-flex", gap: 7, justifyContent: "flex-end" }}>
                  <Btn size="sm" onClick={() => act(a.id, "지급완료")}>지급 승인</Btn>
                  <Btn size="sm" variant="ghost" onClick={() => act(a.id, "반려")}>반려</Btn>
                </span>
              ) : (
                <span style={{ fontSize: 12.5, fontWeight: 700, color: a.status === "반려" ? C.red : C.green, background: a.status === "반려" ? C.redTint : C.greenTint, padding: "5px 10px", borderRadius: 7 }}>{a.status}</span>
              )}
            </span>
          </div>
        ))}
      </div>
    </Page>
  );
}
