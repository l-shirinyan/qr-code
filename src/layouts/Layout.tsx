import { Outlet } from "react-router-dom";
import { FooterNavbar } from "../components/navbar/FooterNavbar";
import { TopNavbar } from "../components/navbar/TopNavbar";

const Layout = () => {
  return (
    <div>
      <div>
        <TopNavbar />
      </div>
      <div className="max-w-[1277px] mx-auto pt-[105px]">
        <Outlet />
      </div>
      <div>
        <FooterNavbar />
      </div>
    </div>
  );
};

export { Layout };
