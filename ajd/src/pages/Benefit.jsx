import { Page } from "../components/ui";
import PromoBanner from "../components/PromoBanner";

const EVENTS = [
  { t: "첫 선정산 수수료 50% 할인", d: "가입 후 첫 신청 건 수수료를 절반으로." },
  { t: "친구 추천 시 2만원 적립", d: "추천한 분과 가입한 분 모두에게." },
];

const APPLY_URL = "https://www.ajd.co.kr/";

export default function Benefit() {
  return (
    <Page title="혜택 / 이벤트" sub="선정산 회원만을 위한 아정당 단독 혜택을 모았어요.">
      <div style={{ marginBottom: 20 }}>
        <PromoBanner
          ctaLabel="혜택 신청하기"
          onCta={() => window.open(APPLY_URL, "_blank", "noopener,noreferrer")}
        />
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
        {EVENTS.map((e) => (
          <div key={e.t} style={{ flex: "1 1 280px", background: "#fff", border: "1px solid #E3E8F2", borderRadius: 16, padding: 24 }}>
            <h4 style={{ fontSize: 17, fontWeight: 700, color: "#0B1B3F", margin: "0 0 8px" }}>{e.t}</h4>
            <p style={{ fontSize: 14.5, color: "#3A4A66", margin: 0 }}>{e.d}</p>
          </div>
        ))}
      </div>
    </Page>
  );
}
