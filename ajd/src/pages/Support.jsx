import { useState } from "react";
import { Phone, HelpCircle, ChevronDown } from "lucide-react";
import { C } from "../theme";
import { FAQ } from "../data/mock";
import { Page } from "../components/ui";

export default function Support() {
  const [open, setOpen] = useState(0);
  return (
    <Page title="고객센터" sub="자주 묻는 질문을 모았어요. 더 필요하면 언제든 문의하세요.">
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 28 }}>
        <div style={{ flex: "1 1 240px", background: C.tint, borderRadius: 14, padding: "20px 22px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 700, color: C.ink, fontSize: 16 }}><Phone size={17} color={C.brand} /> 고객센터 1600-0000</div>
          <p style={{ fontSize: 13.5, color: C.faint, margin: "6px 0 0" }}>평일 09:00 – 18:00</p>
        </div>
        <div style={{ flex: "1 1 240px", background: C.surface, border: `1px solid ${C.line}`, borderRadius: 14, padding: "20px 22px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 700, color: C.ink, fontSize: 16 }}><HelpCircle size={17} color={C.brand} /> 1:1 문의하기</div>
          <p style={{ fontSize: 13.5, color: C.faint, margin: "6px 0 0" }}>접수 후 영업일 기준 1일 내 답변</p>
        </div>
      </div>
      <div style={{ background: C.white, border: `1px solid ${C.line}`, borderRadius: 16, overflow: "hidden" }}>
        {FAQ.map((f, i) => (
          <div key={i} style={{ borderTop: i ? `1px solid ${C.line}` : "none" }}>
            <button onClick={() => setOpen(open === i ? -1 : i)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, padding: "18px 22px", background: "none", border: "none", cursor: "pointer", textAlign: "left", fontSize: 15.5, fontWeight: 600, color: C.ink }}>
              {f.q}
              <ChevronDown size={18} color={C.faint} style={{ transform: open === i ? "rotate(180deg)" : "none", transition: "transform .2s", flexShrink: 0 }} />
            </button>
            {open === i && <p style={{ padding: "0 22px 20px", margin: 0, fontSize: 14.5, lineHeight: 1.65, color: C.body }}>{f.a}</p>}
          </div>
        ))}
      </div>
    </Page>
  );
}
