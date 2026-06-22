import { useNavigate, useLocation } from "react-router-dom";
import { User, LogOut } from "lucide-react";
import { C } from "../theme";
import { useAuth } from "../lib/auth";
import Logo from "./Logo";
import { Btn } from "./ui";

const PUBLIC_NAV = [["선정산", "/limit"], ["수수료", "/fee"], ["혜택", "/benefit"], ["고객센터", "/support"]];
const APP_NAV = [["대시보드", "/dashboard"], ["채널 연동", "/connect"], ["선정산 신청", "/apply"], ["내역", "/history"]];

export default function Header() {
  const nav = useNavigate();
  const { pathname } = useLocation();
  const { user, logout } = useAuth();
  const items = user ? APP_NAV : PUBLIC_NAV;

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(255,255,255,.92)", backdropFilter: "blur(8px)", borderBottom: `1px solid ${C.line}` }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "13px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
        <span onClick={() => nav(user ? "/dashboard" : "/")} style={{ cursor: "pointer" }}><Logo /></span>
        <nav className="ajd-nav" style={{ display: "flex", gap: 26, alignItems: "center", fontSize: 14.5, fontWeight: 600, flexWrap: "wrap", justifyContent: "center" }}>
          {items.map(([t, to]) => (
            <a key={to} onClick={() => nav(to)} style={{ color: pathname === to ? C.brand : C.ink }}>{t}</a>
          ))}
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {user ? (
            <>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 14, fontWeight: 600, color: C.ink }}>
                <User size={15} /> {user.name}님
              </span>
              <button onClick={() => { logout(); nav("/"); }} title="로그아웃" style={{ background: "none", border: "none", cursor: "pointer", color: C.faint, display: "flex" }}>
                <LogOut size={17} />
              </button>
            </>
          ) : (
            <>
              <span onClick={() => nav("/login")} style={{ fontSize: 14.5, fontWeight: 600, color: C.ink, cursor: "pointer" }}>로그인</span>
              <Btn size="sm" onClick={() => nav("/limit")}>한도 조회</Btn>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
