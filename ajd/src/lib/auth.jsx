import { createContext, useContext, useState } from "react";
// import { supabase } from "../lib/supabase";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);   // 일반 사용자
  const [admin, setAdmin] = useState(false); // 운영자 세션

  // 데모: 입력값을 그대로 사용자로 받아들입니다.
  // 실제: const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  const login = (u) => setUser(u || { name: "김셀러", type: "seller" });
  const signup = (u) => setUser(u || { name: "김셀러", type: "seller" });
  const logout = () => setUser(null);

  // 운영자 로그인 (데모: 자격 검증 없음 / 실제: 별도 role 검증)
  const adminLogin = () => setAdmin(true);
  const adminLogout = () => setAdmin(false);

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, admin, adminLogin, adminLogout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
