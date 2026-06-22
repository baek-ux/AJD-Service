import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingBag, Bike, Loader2, CheckCircle2, ArrowRight } from "lucide-react";
import { C, won } from "../theme";
import { Page, Field, Btn } from "../components/ui";

export default function LimitCheck() {
  const nav = useNavigate();
  const [step, setStep] = useState(0); // 0 입력 / 1 조회중 / 2 결과
  const [type, setType] = useState("seller");
  const [sales, setSales] = useState("");
  const result = Math.round((Number(sales.replace(/[^0-9]/g, "")) || 0) * 0.9);
  const run = () => { setStep(1); setTimeout(() => setStep(2), 1800); };

  return (
    <Page max={560} title="내 선정산 한도 조회" sub="간단한 정보만 입력하면 받을 수 있는 금액을 바로 확인할 수 있어요.">
      <div style={{ background: C.white, border: `1px solid ${C.line}`, borderRadius: 18, padding: 28 }}>
        {step === 0 && (
          <>
            <span style={{ display: "block", fontSize: 13.5, fontWeight: 600, color: C.ink, marginBottom: 9 }}>사업 유형</span>
            <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
              {[{ k: "seller", t: "이커머스 셀러", i: <ShoppingBag size={18} /> }, { k: "rider", t: "배달 라이더", i: <Bike size={18} /> }].map((o) => (
                <button key={o.k} onClick={() => setType(o.k)} style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "13px 0", borderRadius: 11, cursor: "pointer", fontWeight: 700, fontSize: 14.5, border: `1.5px solid ${type === o.k ? C.brand : C.line}`, background: type === o.k ? C.tint : C.white, color: type === o.k ? C.brand : C.faint }}>{o.i}{o.t}</button>
              ))}
            </div>
            <Field label={type === "seller" ? "월 평균 매출 (원)" : "월 평균 배달 정산액 (원)"} placeholder="예) 5,000,000" value={sales} onChange={(e) => setSales(e.target.value)} />
            <Btn full size="lg" onClick={run}>한도 조회하기</Btn>
            <p style={{ fontSize: 12.5, color: C.faint, textAlign: "center", marginTop: 14 }}>조회는 무료이며 신용등급에 영향을 주지 않습니다.</p>
          </>
        )}
        {step === 1 && (
          <div style={{ textAlign: "center", padding: "40px 0" }}>
            <Loader2 size={34} color={C.brand} style={{ animation: "ajdspin 1s linear infinite" }} />
            <p style={{ fontSize: 16, fontWeight: 600, color: C.ink, marginTop: 16 }}>정산 데이터를 조회하고 있습니다…</p>
            <p style={{ fontSize: 13.5, color: C.faint, marginTop: 6 }}>잠시만 기다려 주세요</p>
          </div>
        )}
        {step === 2 && (
          <div style={{ textAlign: "center", padding: "8px 0" }}>
            <div style={{ width: 52, height: 52, borderRadius: 999, background: C.greenTint, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" }}><CheckCircle2 size={28} color={C.green} /></div>
            <p style={{ fontSize: 15, color: C.faint, fontWeight: 600 }}>예상 선정산 가능 금액</p>
            <div style={{ fontSize: 40, fontWeight: 800, color: C.brand, letterSpacing: "-1.2px", margin: "6px 0 18px" }}>{won(result || 4500000)}</div>
            <Btn full size="lg" onClick={() => nav("/signup")} icon={<ArrowRight size={18} />}>회원가입하고 지급받기</Btn>
            <button onClick={() => setStep(0)} style={{ background: "none", border: "none", color: C.faint, fontSize: 13.5, marginTop: 14, cursor: "pointer", textDecoration: "underline" }}>다시 조회하기</button>
          </div>
        )}
      </div>
    </Page>
  );
}
