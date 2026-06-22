import { C, FONT } from "../theme";

export function Btn({ children, onClick, variant = "primary", full, size = "md", icon, type = "button" }) {
  const pad = size === "lg" ? "15px 28px" : size === "sm" ? "9px 16px" : "13px 22px";
  const fs = size === "lg" ? 16.5 : size === "sm" ? 14 : 15.5;
  const styles = {
    primary: { background: C.brand, color: C.white, border: "none" },
    dark: { background: C.ink, color: C.white, border: "none" },
    ghost: { background: C.white, color: C.ink, border: `1.5px solid ${C.line}` },
    white: { background: C.white, color: C.brand, border: "none" },
  }[variant];
  const cta = variant === "primary" || variant === "dark" || variant === "white";
  return (
    <button
      type={type}
      className={cta ? "ajd-cta" : ""}
      onClick={onClick}
      style={{
        ...styles, borderRadius: 11, padding: pad, fontSize: fs, fontWeight: 700, cursor: "pointer",
        width: full ? "100%" : undefined, display: "inline-flex", alignItems: "center",
        justifyContent: "center", gap: 8, fontFamily: FONT,
      }}
    >
      {children}{icon}
    </button>
  );
}

export function Field({ label, ...p }) {
  return (
    <label style={{ display: "block", marginBottom: 16 }}>
      <span style={{ display: "block", fontSize: 13.5, fontWeight: 600, color: C.ink, marginBottom: 7 }}>{label}</span>
      <input
        {...p}
        style={{
          width: "100%", boxSizing: "border-box", padding: "12px 14px", fontSize: 15,
          border: `1.5px solid ${C.line}`, borderRadius: 10, color: C.ink, outline: "none", fontFamily: FONT,
        }}
      />
    </label>
  );
}

export function Page({ title, sub, children, max = 760 }) {
  return (
    <div style={{ maxWidth: max, margin: "0 auto", padding: "56px 24px 80px" }}>
      {title && <h1 style={{ fontSize: 30, fontWeight: 800, color: C.ink, letterSpacing: "-1px", margin: "0 0 8px" }}>{title}</h1>}
      {sub && <p style={{ fontSize: 16, color: C.body, margin: "0 0 32px" }}>{sub}</p>}
      {children}
    </div>
  );
}

export function Row({ k, v, red, big }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "5px 0" }}>
      <span style={{ fontSize: big ? 15.5 : 14.5, color: big ? C.ink : C.body, fontWeight: big ? 700 : 500 }}>{k}</span>
      <span style={{ fontSize: big ? 22 : 15, fontWeight: big ? 800 : 600, color: red ? C.red : big ? C.brand : C.ink }}>{v}</span>
    </div>
  );
}

export function Stat({ label, value }) {
  return (
    <div style={{ flex: "1 1 200px" }}>
      <div style={{ fontSize: 28, fontWeight: 800, color: C.brand, letterSpacing: "-0.8px" }}>{value}</div>
      <div style={{ fontSize: 14, color: C.faint, fontWeight: 600, marginTop: 4 }}>{label}</div>
    </div>
  );
}

export function MiniStat({ label, v }) {
  return (
    <div style={{ flex: "1 1 160px", background: C.white, border: `1px solid ${C.line}`, borderRadius: 14, padding: "18px 20px" }}>
      <div style={{ fontSize: 13, color: C.faint, fontWeight: 600 }}>{label}</div>
      <div style={{ fontSize: 23, fontWeight: 800, color: C.ink, marginTop: 4 }}>{v}</div>
    </div>
  );
}

export function EmptyBox({ text, action }) {
  return (
    <div style={{ background: C.surface, border: `1px dashed ${C.line}`, borderRadius: 16, padding: "44px 24px", textAlign: "center" }}>
      <p style={{ fontSize: 15, color: C.faint, margin: action ? "0 0 18px" : 0 }}>{text}</p>
      {action}
    </div>
  );
}
