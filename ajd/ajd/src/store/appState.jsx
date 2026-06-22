import { createContext, useContext, useState } from "react";
import { SEED_PAYOUTS } from "../data/mock";

const AppStateContext = createContext(null);

export function AppStateProvider({ children }) {
  const [connected, setConnected] = useState(["coupang", "naver"]);
  const [payouts, setPayouts] = useState(SEED_PAYOUTS);

  const connect = (id) =>
    setConnected((c) => (c.includes(id) ? c : [...c, id]));
  const addPayout = (p) => setPayouts((list) => [p, ...list]);

  return (
    <AppStateContext.Provider value={{ connected, connect, payouts, addPayout }}>
      {children}
    </AppStateContext.Provider>
  );
}

export function useAppState() {
  return useContext(AppStateContext);
}
