import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { C } from "../theme";
import { useAuth } from "../lib/auth";
import { Page, Field, Btn } from "../components/ui";

export default function Signup() {
  const nav = useNavigate();
  const { signup } = useAuth();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const submit = () => {
    signup({ name: name || "김셀러", type: "seller" }); // 실제: supabase.auth.signUp 후 호출
    nav("/dashboard");
  };

  return (
    <Page max={460} title="회원가입" sub="1분이면 끝나요. 가입 후 바로 정산 채널을 연동할 수 있어요.">
      <div style={{ background: C.white, border: `1px solid ${C.line}`, borderRadius: 18, padding: 28 }}>
        <Field label="이름" placeholder="홍길동" value={name} onChange={(e) => setName(e.target.value)} />
        <Field label="휴대폰 번호" placeholder="010-0000-0000" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <Field label="비밀번호" type="password" placeholder="••••••••" />
        <Btn full size="lg" onClick={submit}>가입하고 시작하기</Btn>
        <p style={{ textAlign: "center", fontSize: 14, color: C.faint, marginTop: 16 }}>
          이미 회원이신가요? <span onClick={() => nav("/login")} style={{ color: C.brand, fontWeight: 700, cursor: "pointer" }}>로그인</span>
        </p>
      </div>
    </Page>
  );
}
