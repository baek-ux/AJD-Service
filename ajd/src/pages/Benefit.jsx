import { Gift } from "lucide-react";
import { C } from "../theme";
import { Page, Btn } from "../components/ui";

const EVENTS = [
  { t: "첫 선정산 수수료 50% 할인", d: "가입 후 첫 신청 건 수수료를 절반으로." },
  { t: "친구 추천 시 2만원 적립", d: "추천한 분과 가입한 분 모두에게." },
];

export default function Benefit() {
  return (
    <Page title="혜택 / 이벤트" sub="선정산 회원만을 위한 아정당 단독 혜택을 모았어요.">
      <div style={{ background: C.amberTint, border: "1px solid #F2DFB0", borderRadius: 18, padding: 32, marginBottom: 20 }}>
        <Gift size={26} color={C.amberInk} />
        <h3 style={{ fontSize: 24, fontWeight: 800, color: C.ink, margin: "12px 0 8px" }}>사업장 인터넷·TV 신규 가입 시 최대 48만원 지원</h3>
        <p style={{ fontSize: 15.5, color: C.body, margin: "0 0 18px" }}>선정산으로 자금을 확보하고, 매월 나가는 고정비까지 아정당으로 줄이세요. 선정산 회원이면 추가 혜택이 더해집니다.</p>
        <Btn variant="dark">혜택 신청하기</Btn>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
        {EVENTS.map((e) => (
          <div key={e.t} style={{ flex: "1 1 280px", background: C.white, border: `1px solid ${C.line}`, borderRadius: 16, padding: 24 }}>
            <h4 style={{ fontSize: 17, fontWeight: 700, color: C.ink, margin: "0 0 8px" }}>{e.t}</h4>
            <p style={{ fontSize: 14.5, color: C.body, margin: 0 }}>{e.d}</p>
          </div>
        ))}
      </div>
    </Page>
  );
}
