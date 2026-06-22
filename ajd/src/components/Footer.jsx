import { useNavigate } from "react-router-dom";
import { Phone } from "lucide-react";
import { C } from "../theme";
import Logo from "./Logo";

function FooterCol({ title, items, nav }) {
  return (
    <div>
      <div style={{ fontSize: 14, fontWeight: 700, color: C.white, marginBottom: 14 }}>{title}</div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
        {items.map(([t, to]) => (
          <li key={to} onClick={() => nav(to)} style={{ fontSize: 13.5, cursor: "pointer", color: "rgba(255,255,255,.72)" }}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const nav = useNavigate();
  return (
    <footer style={{ background: C.ink, color: "rgba(255,255,255,.72)" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "48px 24px 36px", display: "flex", flexWrap: "wrap", gap: 32, justifyContent: "space-between" }}>
        <div style={{ flex: "1 1 300px" }}>
          <div style={{ marginBottom: 14 }}><Logo light /></div>
          <p style={{ fontSize: 13.5, lineHeight: 1.7, margin: 0 }}>
            셀러와 라이더의 현금 흐름을 빠르게.<br />
            매출이 잡히는 곳이라면 어디든, 정산은 기다리지 않습니다.
          </p>
        </div>
        <div style={{ display: "flex", gap: 56, flexWrap: "wrap" }}>
          <FooterCol title="서비스" items={[["셀러 선정산", "/limit"], ["수수료 안내", "/fee"], ["혜택/이벤트", "/benefit"]]} nav={nav} />
          <FooterCol title="고객지원" items={[["고객센터", "/support"], ["운영자 페이지", "/admin"]]} nav={nav} />
        </div>
        <div style={{ flex: "1 1 220px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, color: C.white, fontWeight: 700, marginBottom: 6 }}>
            <Phone size={16} /> 고객센터 1600-0000
          </div>
          <p style={{ fontSize: 13, margin: 0 }}>평일 09:00 – 18:00 (주말·공휴일 휴무)</p>
        </div>
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,.12)" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "18px 24px", fontSize: 12.5, color: "rgba(255,255,255,.5)" }}>
          본 사이트는 시연용 데모입니다. 표시된 금액·고객·지급 내역은 예시이며 실제 금융거래가 이루어지지 않습니다.
        </div>
      </div>
    </footer>
  );
}
