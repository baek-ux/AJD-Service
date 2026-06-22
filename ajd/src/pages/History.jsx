import { useAppState } from "../store/appState";
import { Page } from "../components/ui";
import PayoutTable from "../components/PayoutTable";

export default function History() {
  const { payouts } = useAppState();
  return (
    <Page max={920} title="신청 · 지급 내역" sub="지금까지의 선정산 신청과 지급 기록이에요.">
      <PayoutTable payouts={payouts} empty="아직 내역이 없어요." />
    </Page>
  );
}
