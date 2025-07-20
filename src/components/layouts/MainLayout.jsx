import Footer from "../Header/Footer";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
// import Header from "../Header/Header";

const MainLayout = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen w-full text-body">
        <header>
          <Header />
        </header>
        <div className="flex-1 px-4">
          <Outlet />
        </div>
        <footer className="w-full">
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default MainLayout;
