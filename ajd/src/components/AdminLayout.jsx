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
    <div style={{ fontFamily: FONT, minHeight: "100vh", background: C.surface, color: C.body }}>
      <header style={{ background: C.ink, color: C.white }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 22, flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 9, padding: "16px 0", fontWeight: 800, fontSize: 16, letterSpacing: "-0.4px" }}>
              <span style={{ background: C.brand, borderRadius: 7, padding: "3px 8px", fontSize: 12.5, letterSpacing: "0.5px" }}>ㅇㅈㄷ</span>
              운영자 콘솔
            </div>
            <nav style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
              {TABS.map(([label, to, Icon]) => {
                const active = pathname === to;
                return (
                  <button key={to} onClick={() => nav(to)} style={{
                    display: "inline-flex", alignItems: "center", gap: 7, background: active ? "rgba(255,255,255,.12)" : "transparent",
                    color: active ? C.white : "rgba(255,255,255,.65)", border: "none", borderRadius: 9, padding: "9px 13px",
                    fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: FONT,
                  }}>
                    <Icon size={15} /> {label}
                  </button>
                );
              })}
            </nav>
          </div>
          <button onClick={() => { adminLogout(); nav("/"); }} style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "none", border: "none", color: "rgba(255,255,255,.7)", fontSize: 13.5, fontWeight: 600, cursor: "pointer", fontFamily: FONT }}>
            <LogOut size={15} /> 로그아웃
          </button>
        </div>
      </header>
      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "36px 24px 80px" }}>
        <Outlet />
      </main>
    </div>
  );
}
