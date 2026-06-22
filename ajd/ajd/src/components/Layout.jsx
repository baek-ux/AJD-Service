import { Outlet, useLocation } from "react-router-dom";
import { C, FONT } from "../theme";
import Header from "../components/Header";
import Footer from "../components/Footer";

// 마케팅성 공개 페이지에서만 푸터를 노출합니다.
const FOOTER_PATHS = ["/", "/limit", "/fee", "/benefit", "/support"];

export default function Layout() {
  const { pathname } = useLocation();
  const showFooter = FOOTER_PATHS.includes(pathname);
  return (
    <div style={{ fontFamily: FONT, color: C.body, background: C.white, minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      {showFooter && <Footer />}
    </div>
  );
}
