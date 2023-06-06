import { Outlet } from "react-router-dom";
import HeaderDefault from "./header/headerDef";
import FooterDef from "./footer/footerDef";
import ScrollToTop from "./outlet/scrollToTop";

function LayoutDefault() {
  return (
    <>
      <HeaderDefault />
      <div className="height-body">
        <Outlet />
        <ScrollToTop />
      </div>
      <FooterDef />
    </>
  );
}

export default LayoutDefault;
