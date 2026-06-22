import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import AdminLayout from "./components/AdminLayout";
import RequireAuth from "./routes/RequireAuth";
import RequireAdmin from "./routes/RequireAdmin";

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

import AdminLogin from "./pages/admin/AdminLogin";
import Applications from "./pages/admin/Applications";
import Members from "./pages/admin/Members";
import Policy from "./pages/admin/Policy";

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
        {/* 일반 사이트 */}
        <Route element={<Layout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/limit" element={<LimitCheck />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/fee" element={<FeeCalc />} />
          <Route path="/benefit" element={<Benefit />} />
          <Route path="/support" element={<Support />} />
          <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
          <Route path="/connect" element={<RequireAuth><Connect /></RequireAuth>} />
          <Route path="/apply" element={<RequireAuth><Apply /></RequireAuth>} />
          <Route path="/history" element={<RequireAuth><History /></RequireAuth>} />
          <Route path="*" element={<Landing />} />
        </Route>

        {/* 운영자 콘솔 */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<RequireAdmin><AdminLayout /></RequireAdmin>}>
          <Route index element={<Applications />} />
          <Route path="members" element={<Members />} />
          <Route path="policy" element={<Policy />} />
        </Route>
      </Routes>
    </>
  );
}
