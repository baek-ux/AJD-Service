import { useState } from "react";
import { C } from "../../theme";
import { MEMBERS } from "../../data/mock";
import { Btn, MiniStat } from "../../components/ui";

export default function Members() {
  const [members, setMembers] = useState(MEMBERS);
  const toggle = (id) =>
    setMembers((m) => m.map((x) => (x.id === id ? { ...x, status: x.status === "활성" ? "정지" : "활성" } : x)));

  const active = members.filter((m) => m.status === "활성").length;
  const sellers = members.filter((m) => m.type.includes("셀러")).length;

  return (
    <>
      <h1 style={{ fontSize: 26, fontWeight: 800, color: C.ink, letterSpacing: "-0.8px", margin: "0 0 6px" }}>회원 · 고객사</h1>
      <p style={{ fontSize: 15, color: C.body, margin: "0 0 24px" }}>가입한 셀러·라이더를 조회하고 상태를 관리합니다.</p>

      <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 24 }}>
        <MiniStat label="전체 회원" v={members.length + "명"} />
        <MiniStat label="활성" v={active + "명"} />
        <MiniStat label="정지" v={members.length - active + "명"} />
        <MiniStat label="셀러 / 라이더" v={`${sellers} / ${members.length - sellers}`} />
      </div>

      <div style={{ background: C.white, border: `1px solid ${C.line}`, borderRadius: 16, overflow: "hidden" }}>
        <div style={{ display: "flex", padding: "13px 20px", background: C.surface, fontSize: 13, fontWeight: 700, color: C.faint }}>
          <span style={{ flex: 1.4 }}>이름</span>
          <span style={{ flex: 1.6 }}>유형</span>
          <span style={{ flex: 1, textAlign: "center" }}>연동 채널</span>
          <span style={{ flex: 1.3, textAlign: "center" }}>가입일</span>
          <span style={{ flex: 1.6, textAlign: "right" }}>상태</span>
        </div>
        {members.map((m) => (
          <div key={m.id} style={{ display: "flex", alignItems: "center", padding: "14px 20px", borderTop: `1px solid ${C.line}`, fontSize: 14.5 }}>
            <span style={{ flex: 1.4, fontWeight: 600, color: C.ink }}>{m.name}</span>
            <span style={{ flex: 1.6, color: C.body }}>{m.type}</span>
            <span style={{ flex: 1, textAlign: "center", color: C.body }}>{m.channels}곳</span>
            <span style={{ flex: 1.3, textAlign: "center", color: C.faint, fontSize: 13 }}>{m.joined}</span>
            <span style={{ flex: 1.6, textAlign: "right", display: "inline-flex", alignItems: "center", justifyContent: "flex-end", gap: 9 }}>
              <span style={{ fontSize: 12.5, fontWeight: 700, color: m.status === "활성" ? C.green : C.red, background: m.status === "활성" ? C.greenTint : C.redTint, padding: "4px 9px", borderRadius: 7 }}>{m.status}</span>
              <Btn size="sm" variant="ghost" onClick={() => toggle(m.id)}>{m.status === "활성" ? "정지" : "활성화"}</Btn>
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
