import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Zap, Wallet, LayoutGrid, ShoppingBag, Bike, ChevronRight } from "lucide-react";
import { C, won } from "../theme";
import { FEED, STATS } from "../data/mock";
import { useCountUp } from "../lib/useCountUp";
import { Btn, Stat } from "../components/ui";

function TrackCard({ icon, title, desc, chips, accent }) {
  return (
    <div className="ajd-card" style={{ flex: "1 1 340px", background: C.white, border: `1px solid ${C.line}`, borderRadius: 18, padding: 28 }}>
      <div style={{ width: 48, height: 48, borderRadius: 13, background: accent ? C.amberTint : C.tint, color: accent ? C.amberInk : C.brand, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>{icon}</div>
      <h3 style={{ fontSize: 21, fontWeight: 800, color: C.ink, letterSpacing: "-0.5px", margin: "0 0 10px" }}>{title}</h3>
      <p style={{ fontSize: 15.5, lineHeight: 1.65, color: C.body, margin: "0 0 18px" }}>{desc}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {chips.map((c) => <span key={c} style={{ fontSize: 12.5, fontWeight: 600, color: C.faint, background: C.surface, border: `1px solid ${C.line}`, borderRadius: 8, padding: "5px 10px" }}>{c}</span>)}
      </div>
    </div>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div style={{ flex: "1 1 300px" }}>
      <div style={{ width: 42, height: 42, borderRadius: 11, background: C.tint, color: C.brand, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>{icon}</div>
      <h3 style={{ fontSize: 18, fontWeight: 700, color: C.ink, letterSpacing: "-0.4px", margin: "0 0 8px" }}>{title}</h3>
      <p style={{ fontSize: 15, lineHeight: 1.65, color: C.body, margin: 0 }}>{desc}</p>
    </div>
  );
}

export default function Landing() {
  const nav = useNavigate();
  const total = useCountUp(STATS.total);
  const sellers = useCountUp(STATS.sellers, 1700);
  const [fi, setFi] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setFi((i) => (i + 1) % FEED.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <section style={{ background: `radial-gradient(1100px 480px at 78% -8%, ${C.tint} 0%, rgba(238,243,254,0) 60%)` }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "64px 24px 48px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 48, alignItems: "center" }}>
            <div style={{ flex: "1 1 440px", minWidth: 320 }}>
              <span style={{ display: "inline-block", background: C.tint, color: C.brand, fontWeight: 700, fontSize: 13.5, padding: "7px 13px", borderRadius: 999, marginBottom: 20 }}>셀러 · 배달라이더를 위한 통합 선정산</span>
              <h1 style={{ fontSize: 46, lineHeight: 1.18, fontWeight: 800, color: C.ink, letterSpacing: "-1.4px", margin: "0 0 18px" }}>
                오늘 번 매출,<br /><span style={{ color: C.brand }}>오늘 바로 정산</span>받으세요
              </h1>
              <p style={{ fontSize: 17.5, lineHeight: 1.65, color: C.body, margin: "0 0 30px", maxWidth: 460 }}>
                쿠팡·네이버부터 배달 정산까지. 길게는 일주일 걸리던 정산을 한 번의 연동으로 최대 1시간 안에 현금으로 받아보세요.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                <Btn size="lg" onClick={() => nav("/limit")} icon={<ArrowRight size={18} />}>내 선정산 한도 조회하기</Btn>
                <Btn size="lg" variant="ghost" onClick={() => nav("/fee")}>수수료 먼저 계산하기</Btn>
              </div>
              <p style={{ fontSize: 13.5, color: C.faint, marginTop: 18 }}>신용등급 영향 없음 · 가입비 0원 · 정산 데이터 한 번만 연동</p>
            </div>
            <div style={{ flex: "1 1 360px", minWidth: 300 }}>
              <div style={{ background: C.white, border: `1px solid ${C.line}`, borderRadius: 20, padding: 24, boxShadow: "0 24px 60px rgba(11,27,63,.12)" }}>
                <div style={{ fontSize: 14, color: C.faint, fontWeight: 600 }}>선정산 가능 금액</div>
                <div style={{ fontSize: 38, fontWeight: 800, color: C.ink, letterSpacing: "-1px", margin: "6px 0 2px" }}>₩3,420,000</div>
                <div style={{ fontSize: 13.5, color: C.green, fontWeight: 600, marginBottom: 18 }}>· 연동된 3개 채널 기준 · 즉시 지급 가능</div>
                <Btn full onClick={() => nav("/limit")}>지금 지급받기</Btn>
                <div style={{ borderTop: `1px solid ${C.line}`, marginTop: 18, paddingTop: 14 }}>
                  <div style={{ fontSize: 12.5, color: C.faint, fontWeight: 600, marginBottom: 8 }}>실시간 지급 현황</div>
                  <div key={fi} style={{ display: "flex", alignItems: "center", gap: 10, animation: "ajdfade .4s ease" }}>
                    <span style={{ width: 8, height: 8, borderRadius: 999, background: C.green, animation: "ajdpulse 1.6s infinite", flexShrink: 0 }} />
                    <div style={{ fontSize: 13.5, color: C.ink, flex: 1 }}><b>{FEED[fi].who}</b><span style={{ color: C.faint }}> · {FEED[fi].tag}</span></div>
                    <div style={{ fontSize: 13.5, fontWeight: 700, color: C.brand }}>{won(FEED[fi].amt)}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: C.surface, borderTop: `1px solid ${C.line}`, borderBottom: `1px solid ${C.line}` }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "36px 24px", display: "flex", flexWrap: "wrap", gap: 24, justifyContent: "space-between" }}>
          <Stat label="누적 선정산 지급액" value={won(total) + "+"} />
          <Stat label="함께하는 셀러 · 라이더" value={sellers.toLocaleString("ko-KR") + "명+"} />
          <Stat label="평균 지급 소요 시간" value={STATS.avgMinutes + "분"} />
          <Stat label="연동 가능 채널" value={STATS.channels + "곳+"} />
        </div>
      </section>

      <section style={{ maxWidth: 1120, margin: "0 auto", padding: "72px 24px 16px" }}>
        <h2 style={{ fontSize: 30, fontWeight: 800, color: C.ink, letterSpacing: "-1px", margin: "0 0 10px" }}>이커머스도, 배달도. 정산은 기다리지 않습니다</h2>
        <p style={{ fontSize: 16.5, color: C.body, margin: "0 0 36px" }}>매출이 잡히는 곳이라면 어디든. 한 계정으로 두 정산을 한 번에 관리하세요.</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
          <TrackCard icon={<ShoppingBag size={22} />} title="이커머스 셀러 선정산" desc="쿠팡, 네이버 스마트스토어, 11번가 등 정산 예정 금액을 구매확정 전에 미리. 광고비·사입비 걱정 없이 매출을 키우세요." chips={["쿠팡 윙", "네이버", "11번가", "지마켓"]} />
          <TrackCard icon={<Bike size={22} />} title="배달라이더 선정산" accent desc="다음 정산일까지 기다리지 마세요. 그날 일한 배달 수수료를 그날 바로. 가장 바쁜 라이더에게 가장 빠른 정산을." chips={["일 단위 지급", "수수료 정산", "앱 연동"]} />
        </div>
      </section>

      <section style={{ maxWidth: 1120, margin: "0 auto", padding: "56px 24px 8px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
          <Feature icon={<Wallet size={20} />} title="업계 최저 수준 수수료" desc="후발주자로서 군더더기를 덜어낸 단순·투명한 수수료. 받는 금액에서 얼마가 빠지는지 미리 계산해 보세요." />
          <Feature icon={<Zap size={20} />} title="신청 후 최대 1시간 지급" desc="복잡한 서류 없이 한 번의 연동으로. 24시간 언제든 신청하면 빠르게 입금됩니다." />
          <Feature icon={<LayoutGrid size={20} />} title="흩어진 정산을 한 곳에서" desc="쇼핑몰별·배달앱별로 따로 확인하던 정산을 하나의 화면에서. 들어올 돈과 나갈 돈을 한눈에." />
        </div>
      </section>

      <section style={{ maxWidth: 1120, margin: "0 auto", padding: "64px 24px" }}>
        <div style={{ background: C.amberTint, border: "1px solid #F2DFB0", borderRadius: 20, padding: "34px 36px", display: "flex", flexWrap: "wrap", gap: 20, alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ flex: "1 1 420px" }}>
            <span style={{ fontSize: 13.5, fontWeight: 800, color: C.amberInk }}>아정당 단독 혜택</span>
            <h3 style={{ fontSize: 24, fontWeight: 800, color: C.ink, letterSpacing: "-0.6px", margin: "8px 0" }}>자금은 선정산으로, 고정비는 아정당으로 줄이세요</h3>
            <p style={{ fontSize: 15.5, color: C.body, margin: 0 }}>사업장 인터넷·TV 신규 가입 시 <b style={{ color: C.amberInk }}>최대 48만원 지원</b>. 선정산 회원이면 추가 혜택까지.</p>
          </div>
          <Btn variant="dark" onClick={() => nav("/benefit")} icon={<ChevronRight size={17} />}>혜택 보기</Btn>
        </div>
      </section>

      <section style={{ background: C.brand }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "56px 24px", textAlign: "center" }}>
          <h2 style={{ fontSize: 30, fontWeight: 800, color: C.white, letterSpacing: "-1px", margin: "0 0 12px" }}>지금 내 선정산 한도부터 확인해 보세요</h2>
          <p style={{ fontSize: 16.5, color: "rgba(255,255,255,.85)", margin: "0 0 26px" }}>연동 1분, 조회는 무료. 신용등급에 영향을 주지 않습니다.</p>
          <Btn variant="white" size="lg" onClick={() => nav("/limit")} icon={<ArrowRight size={18} />}>무료로 한도 조회하기</Btn>
        </div>
      </section>
    </>
  );
}
