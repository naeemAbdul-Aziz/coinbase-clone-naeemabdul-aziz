import { Outlet } from 'react-router-dom';
import { SidebarProvider, useSidebar } from '../context/SidebarContext';
import AppSidebar from './AppSidebar';
import DashboardHeader from './DashboardHeader';
import Backdrop from './Backdrop';

const LayoutContent = () => {
  const { isExpanded, isHovered } = useSidebar();

  return (
    <div className="dashboard-root min-h-screen bg-[#0a0f1a] flex">
      <AppSidebar />
      <Backdrop />
      <div
        className={`flex-1 flex flex-col min-h-screen transition-all duration-300 ease-in-out
          ${isExpanded || isHovered ? 'lg:ml-[270px]' : 'lg:ml-[80px]'}`}
      >
        <DashboardHeader />
        <main className="flex-1 p-4 md:p-6 max-w-screen-2xl w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

const DashboardLayout = () => (
  <SidebarProvider>
    <LayoutContent />
  </SidebarProvider>
);

export default DashboardLayout;
