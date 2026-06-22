import { createContext, useContext, useState } from "react";
// import { supabase } from "../lib/supabase";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // 데모: 입력값을 그대로 사용자로 받아들입니다.
  // 실제 전환 시:
  //   const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  //   if (!error) setUser({ name: data.user.email, type: "seller" });
  const login = (u) => setUser(u || { name: "김셀러", type: "seller" });

  // 실제: const { data } = await supabase.auth.signUp({ email, password });
  const signup = (u) => setUser(u || { name: "김셀러", type: "seller" });

  // 실제: await supabase.auth.signOut();
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
