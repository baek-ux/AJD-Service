import { Navigate } from "react-router-dom";
import { useAuth } from "../lib/auth";

// 운영자 세션이 없으면 운영자 로그인으로 보냅니다.
export default function RequireAdmin({ children }) {
  const { admin } = useAuth();
  if (!admin) return <Navigate to="/admin/login" replace />;
  return children;
}
