import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShieldCheck } from "lucide-react";
import { C, FONT } from "../../theme";
import { useAuth } from "../../lib/auth";
import { Field, Btn } from "../../components/ui";

export default function AdminLogin() {
  const nav = useNavigate();
  const { adminLogin } = useAuth();
  const [id, setId] = useState("");

  const submit = () => {
    adminLogin(); // 데모: 자격 검증 없음 / 실제: role 검증 후 호출
    nav("/admin");
  };

  return (
    <div style={{ fontFamily: FONT, minHeight: "100vh", background: C.ink, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <div style={{ width: "100%", maxWidth: 380 }}>
        <div style={{ textAlign: "center", marginBottom: 22, color: C.white }}>
          <div style={{ width: 48, height: 48, borderRadius: 13, background: C.brand, display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
            <ShieldCheck size={24} color={C.white} />
          </div>
          <h1 style={{ fontSize: 22, fontWeight: 800, margin: 0, letterSpacing: "-0.5px" }}>관리자 로그인</h1>
          <p style={{ fontSize: 13.5, color: "rgba(255,255,255,.6)", margin: "8px 0 0" }}>아정당 선정산 관리자 전용 페이지</p>
        </div>
        <div style={{ background: C.white, borderRadius: 16, padding: 26 }}>
          <Field label="관리자 아이디" placeholder="admin" value={id} onChange={(e) => setId(e.target.value)} />
          <Field label="비밀번호" type="password" placeholder="••••••••" />
          <Btn full size="lg" onClick={submit}>로그인</Btn>
          <p style={{ fontSize: 12, color: C.faint, textAlign: "center", marginTop: 14 }}>데모 환경에서는 아무 값으로도 로그인됩니다.</p>
        </div>
      </div>
    </div>
  );
}
