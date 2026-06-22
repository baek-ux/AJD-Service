import { useState } from "react";
import { X, ShoppingBag, Bike, ChevronRight } from "lucide-react";
import { C, won } from "../../theme";
import { MEMBERS } from "../../data/mock";
import { useAppState } from "../../store/appState";
import { Btn, MiniStat } from "../../components/ui";
import { StatusBadge } from "../../components/PayoutTable";

export default function Members() {
  const { applications } = useAppState();
  const [members, setMembers] = useState(MEMBERS);
  const [open, setOpen] = useState(null); // 상세로 열린 회원

  const toggle = (id) =>
    setMembers((m) => m.map((x) => (x.id === id ? { ...x, status: x.status === "활성" ? "정지" : "활성" } : x)));

  const active = members.filter((m) => m.status === "활성").length;
  const sellers = members.filter((m) => m.type.includes("셀러")).length;
  const memberApps = open ? applications.filter((a) => a.applicant === open.name) : [];

  return (
    <>
      <h1 style={{ fontSize: 26, fontWeight: 800, color: C.ink, letterSpacing: "-0.8px", margin: "0 0 6px" }}>회원 · 고객사</h1>
      <p style={{ fontSize: 15, color: C.body, margin: "0 0 24px" }}>가입한 셀러·라이더를 조회하고 상태를 관리합니다. 행을 누르면 연동 채널 상세가 열립니다.</p>

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
          <span style={{ flex: 1.7, textAlign: "right" }}>상태</span>
        </div>
        {members.map((m) => (
          <div
            key={m.id}
            onClick={() => setOpen(m)}
            className="ajd-row"
            style={{ display: "flex", alignItems: "center", padding: "14px 20px", borderTop: `1px solid ${C.line}`, fontSize: 14.5, cursor: "pointer" }}
          >
            <span style={{ flex: 1.4, fontWeight: 600, color: C.ink, display: "inline-flex", alignItems: "center", gap: 6 }}>
              {m.name} <ChevronRight size={14} color={C.faint} />
            </span>
            <span style={{ flex: 1.6, color: C.body }}>{m.type}</span>
            <span style={{ flex: 1, textAlign: "center", color: C.body }}>{m.channels.length}곳</span>
            <span style={{ flex: 1.3, textAlign: "center", color: C.faint, fontSize: 13 }}>{m.joined}</span>
            <span style={{ flex: 1.7, textAlign: "right", display: "inline-flex", alignItems: "center", justifyContent: "flex-end", gap: 9 }}>
              <span style={{ fontSize: 12.5, fontWeight: 700, color: m.status === "활성" ? C.green : C.red, background: m.status === "활성" ? C.greenTint : C.redTint, padding: "4px 9px", borderRadius: 7 }}>{m.status}</span>
              <span onClick={(e) => { e.stopPropagation(); toggle(m.id); }}>
                <Btn size="sm" variant="ghost">{m.status === "활성" ? "정지" : "활성화"}</Btn>
              </span>
            </span>
          </div>
        ))}
      </div>

      {open && <MemberDetail member={open} apps={memberApps} onClose={() => setOpen(null)} />}
    </>
  );
}

function MemberDetail({ member, apps, onClose }) {
  const total = member.channels.reduce((s, c) => s + c.amt, 0);
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(11,27,63,.45)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24, zIndex: 100 }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: C.white, borderRadius: 18, width: "100%", maxWidth: 520, maxHeight: "85vh", overflow: "auto", padding: 28 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 18 }}>
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: C.ink, margin: "0 0 4px", letterSpacing: "-0.5px" }}>{member.name}</h2>
            <div style={{ fontSize: 14, color: C.body }}>
              {member.type} · 가입 {member.joined} ·{" "}
              <span style={{ fontWeight: 700, color: member.status === "활성" ? C.green : C.red }}>{member.status}</span>
            </div>
          </div>
          <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", color: C.faint, display: "flex" }}><X size={20} /></button>
        </div>

        <div style={{ background: C.tint, borderRadius: 12, padding: "16px 18px", marginBottom: 22 }}>
          <div style={{ fontSize: 13, color: C.faint, fontWeight: 600 }}>연동 채널 정산 예정 합계</div>
          <div style={{ fontSize: 26, fontWeight: 800, color: C.brand, letterSpacing: "-0.8px", marginTop: 4 }}>{won(total)}</div>
        </div>

        <h3 style={{ fontSize: 15, fontWeight: 700, color: C.ink, margin: "0 0 10px" }}>연동 채널 {member.channels.length}곳</h3>
        <div style={{ border: `1px solid ${C.line}`, borderRadius: 12, overflow: "hidden", marginBottom: 22 }}>
          {member.channels.map((c, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", borderTop: i ? `1px solid ${C.line}` : "none" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
                <span style={{ width: 30, height: 30, borderRadius: 8, background: c.kind === "delivery" ? C.amberTint : C.tint, color: c.kind === "delivery" ? C.amberInk : C.brand, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {c.kind === "delivery" ? <Bike size={15} /> : <ShoppingBag size={15} />}
                </span>
                <span style={{ fontSize: 14.5, fontWeight: 600, color: C.ink }}>{c.name}</span>
              </span>
              <span style={{ fontSize: 14, fontWeight: 700, color: c.amt > 0 ? C.ink : C.faint }}>{won(c.amt)}</span>
            </div>
          ))}
        </div>

        <h3 style={{ fontSize: 15, fontWeight: 700, color: C.ink, margin: "0 0 10px" }}>신청 내역 {apps.length}건</h3>
        {apps.length === 0 ? (
          <div style={{ fontSize: 14, color: C.faint, padding: "14px 0" }}>신청 내역이 없습니다.</div>
        ) : (
          <div style={{ border: `1px solid ${C.line}`, borderRadius: 12, overflow: "hidden" }}>
            {apps.map((a) => (
              <div key={a.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", borderTop: `1px solid ${C.line}`, fontSize: 14 }}>
                <span style={{ color: C.body }}>{a.channel}</span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
                  <span style={{ fontWeight: 700, color: C.ink }}>{won(a.amt)}</span>
                  <StatusBadge status={a.status} />
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
