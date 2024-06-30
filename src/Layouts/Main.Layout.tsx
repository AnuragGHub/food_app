import { Outlet } from "react-router-dom";
import SidebarMenu from "../Components/SidebarMenu";

const MainLayout = () => {
  return (
    <>
      <SidebarMenu />
      <Outlet />
    </>
  );
};

export default MainLayout;
