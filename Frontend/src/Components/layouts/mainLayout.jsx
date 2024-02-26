import Navbar from "./navbar";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

const Index = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Index;
