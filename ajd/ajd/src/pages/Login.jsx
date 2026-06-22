import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { C } from "../theme";
import { useAuth } from "../lib/auth";
import { Page, Field, Btn } from "../components/ui";

export default function Login() {
  const nav = useNavigate();
  const { login } = useAuth();
  const [id, setId] = useState("");

  const submit = () => {
    login({ name: id || "김셀러", type: "seller" }); // 실제: supabase.auth.signInWithPassword 후 호출
    nav("/dashboard");
  };

  return (
    <Page max={460} title="로그인" sub="아정당 선정산 계정으로 로그인하세요.">
      <div style={{ background: C.white, border: `1px solid ${C.line}`, borderRadius: 18, padding: 28 }}>
        <Field label="아이디 (휴대폰 번호)" placeholder="010-0000-0000" value={id} onChange={(e) => setId(e.target.value)} />
        <Field label="비밀번호" type="password" placeholder="••••••••" />
        <Btn full size="lg" onClick={submit}>로그인</Btn>
        <p style={{ textAlign: "center", fontSize: 14, color: C.faint, marginTop: 16 }}>
          아직 회원이 아니신가요? <span onClick={() => nav("/signup")} style={{ color: C.brand, fontWeight: 700, cursor: "pointer" }}>회원가입</span>
        </p>
      </div>
    </Page>
  );
}
