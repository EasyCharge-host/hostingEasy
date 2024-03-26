import { Outlet } from "react-router-dom";
import Header from "../components/Header";
//!UIUI
function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className={`flex-grow overflow-y-auto relative `}>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
