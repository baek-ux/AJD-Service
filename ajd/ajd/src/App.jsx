import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import RequireAuth from "./routes/RequireAuth";

import Landing from "./pages/Landing";
import LimitCheck from "./pages/LimitCheck";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import FeeCalc from "./pages/FeeCalc";
import Benefit from "./pages/Benefit";
import Support from "./pages/Support";
import Dashboard from "./pages/Dashboard";
import Connect from "./pages/Connect";
import Apply from "./pages/Apply";
import History from "./pages/History";
import Admin from "./pages/Admin";

// 페이지 이동 시 스크롤을 맨 위로
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          {/* 공개 */}
          <Route path="/" element={<Landing />} />
          <Route path="/limit" element={<LimitCheck />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/fee" element={<FeeCalc />} />
          <Route path="/benefit" element={<Benefit />} />
          <Route path="/support" element={<Support />} />
          {/* 로그인 필요 */}
          <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
          <Route path="/connect" element={<RequireAuth><Connect /></RequireAuth>} />
          <Route path="/apply" element={<RequireAuth><Apply /></RequireAuth>} />
          <Route path="/history" element={<RequireAuth><History /></RequireAuth>} />
          {/* 운영자 */}
          <Route path="/admin" element={<Admin />} />
          {/* 그 외 */}
          <Route path="*" element={<Landing />} />
        </Route>
      </Routes>
    </>
  );
}
