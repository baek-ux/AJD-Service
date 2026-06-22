import { Navigate } from "react-router-dom";
import { useAuth } from "../lib/auth";

// 로그인하지 않은 사용자가 보호된 페이지에 접근하면 로그인으로 보냅니다.
export default function RequireAuth({ children }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  return children;
}
