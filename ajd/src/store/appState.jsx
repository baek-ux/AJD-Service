import { createContext, useContext, useState } from "react";
import { SEED_APPLICATIONS } from "../data/mock";

const AppStateContext = createContext(null);

export function AppStateProvider({ children }) {
  const [connected, setConnected] = useState(["coupang", "naver"]);
  const [applications, setApplications] = useState(SEED_APPLICATIONS);

  const connect = (id) => setConnected((c) => (c.includes(id) ? c : [...c, id]));

  // 사용자가 선정산 신청 → 검토중 상태로 목록에 추가 (운영자 콘솔에서 보임)
  const addApplication = (a) => setApplications((l) => [a, ...l]);

  // 운영자가 승인/반려 → 상태 변경 (사용자 내역에도 반영)
  const setStatus = (id, status) =>
    setApplications((l) => l.map((x) => (x.id === id ? { ...x, status } : x)));

  return (
    <AppStateContext.Provider value={{ connected, connect, applications, addApplication, setStatus }}>
      {children}
    </AppStateContext.Provider>
  );
}

export function useAppState() {
  return useContext(AppStateContext);
}
