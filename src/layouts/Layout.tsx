import { Outlet } from "react-router-dom";
import { FooterNavbar } from "../components/navbar/FooterNavbar";
import { TopNavbar } from "../components/navbar/TopNavbar";

const Layout = () => {
  return (
    <div>
      <div>
        <TopNavbar />
      </div>
      <div>
        {/* <Outlet /> */}
      </div>
      <div>
        {/* <FooterNavbar /> */}
      </div>
    </div>
  );
};

export { Layout };
