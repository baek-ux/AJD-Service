import { useNavigate } from "react-router-dom";
import { C } from "../theme";
import Logo from "./Logo";

// 아정당(아정네트웍스) 실제 사업자 정보
const INFO = [
  [["사이트명", "아정당"], ["대표자", "김민기"]],
  [["사업자명", "아정네트웍스"]],
  [["사업자등록번호", "329-88-02173"], ["통신판매업", "제2021-부산북구-0914호"]],
  [["대표번호", "1833-3504"], ["팩스", "02-6944-8126"]],
  [["주소", "부산광역시 북구 금곡대로8번길 33, 아남프라자 3층"]],
  [["개인정보 책임관리자", "김환수 (zeus@ajd.co.kr)"]],
  [["광고제휴문의", "contact@ajd.co.kr"], ["CS 고객센터", "help@ajd.co.kr"]],
];

export default function Footer() {
  const nav = useNavigate();
  return (
    <footer style={{ background: C.ink, color: "rgba(255,255,255,.72)" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "44px 24px 32px", display: "flex", flexWrap: "wrap", gap: 32, justifyContent: "space-between" }}>
        <div style={{ flex: "0 0 auto" }}>
          <div style={{ marginBottom: 14 }}><Logo light /></div>
          <p style={{ fontSize: 13.5, lineHeight: 1.7, margin: 0, color: "rgba(255,255,255,.6)" }}>
            셀러와 라이더의 현금 흐름을 빠르게.<br />
            정산은 기다리지 않습니다.
          </p>
        </div>
        <div style={{ flex: "1 1 460px", minWidth: 280 }}>
          {INFO.map((row, i) => (
            <div key={i} style={{ fontSize: 12.5, lineHeight: 2, color: "rgba(255,255,255,.6)" }}>
              {row.map(([k, v], j) => (
                <span key={j}>
                  {j > 0 && <span style={{ margin: "0 9px", opacity: 0.35 }}>|</span>}
                  <span style={{ color: "rgba(255,255,255,.85)", fontWeight: 600 }}>{k}</span> {v}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,.12)" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "16px 24px", display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "space-between", alignItems: "center", fontSize: 12, color: "rgba(255,255,255,.45)" }}>
          <span>© 2026 아정네트웍스. 본 사이트는 시연용 데모이며 표시된 금액·고객·지급 내역은 예시입니다. 실제 금융거래가 이루어지지 않습니다.</span>
          <span onClick={() => nav("/admin")} style={{ cursor: "pointer", color: "rgba(255,255,255,.55)", fontWeight: 600, whiteSpace: "nowrap" }}>관리자</span>
        </div>
      </div>
    </footer>
  );
}
