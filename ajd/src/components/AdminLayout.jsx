import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { LogOut, LayoutList, Users, SlidersHorizontal } from "lucide-react";
import { C, FONT } from "../theme";
import { useAuth } from "../lib/auth";

const TABS = [
  ["신청 관리", "/admin", LayoutList],
  ["회원 · 고객사", "/admin/members", Users],
  ["한도 · 수수료 정책", "/admin/policy", SlidersHorizontal],
];

export default function AdminLayout() {
  const nav = useNavigate();
  const { pathname } = useLocation();
  const { adminLogout } = useAuth();

  return (
    <div style={{ fontFamily: FONT, minHeight: "100vh", background: C.surface, color: C.body, display: "flex" }}>
      {/* 네비게이션 (좌측) */}
      <aside style={{ flex: "0 0 248px", background: C.white, borderRight: `1px solid ${C.line}`, position: "sticky", top: 0, height: "100vh", display: "flex", flexDirection: "column", padding: "24px 18px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 9, padding: "4px 8px 18px", borderBottom: `1px solid ${C.line}`, marginBottom: 16 }}>
          <span style={{ background: C.brand, color: C.white, borderRadius: 8, padding: "4px 9px", fontWeight: 800, fontSize: 13, letterSpacing: "0.5px" }}>ㅇㅈㄷ</span>
          <div>
            <div style={{ fontSize: 14.5, fontWeight: 800, color: C.ink, letterSpacing: "-0.3px", lineHeight: 1.2 }}>아정당 선정산</div>
            <div style={{ fontSize: 12, color: C.faint, fontWeight: 600 }}>관리자</div>
          </div>
        </div>

        <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {TABS.map(([label, to, Icon]) => {
            const active = pathname === to;
            return (
              <button key={to} onClick={() => nav(to)} style={{
                position: "relative", display: "flex", alignItems: "center", gap: 10, textAlign: "left",
                background: active ? C.tint : "transparent", color: active ? C.brand : C.body,
                border: "none", borderRadius: 10, padding: "11px 13px", fontSize: 14, fontWeight: active ? 700 : 600,
                cursor: "pointer", fontFamily: FONT,
              }}>
                <Icon size={16} /> {label}
              </button>
            );
          })}
        </nav>

        <div style={{ flex: 1 }} />

        <button onClick={() => { adminLogout(); nav("/"); }} style={{
          display: "flex", alignItems: "center", gap: 9, background: "none", border: "none",
          color: C.faint, fontSize: 13.5, fontWeight: 600, cursor: "pointer", fontFamily: FONT, padding: "11px 13px",
        }}>
          <LogOut size={16} /> 로그아웃
        </button>
      </aside>

      {/* 본문 (우측) */}
      <main style={{ flex: "1 1 0", minWidth: 0, padding: "40px 36px 80px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <Outlet />
        </div>
      </main>
    </div>
  );
}
