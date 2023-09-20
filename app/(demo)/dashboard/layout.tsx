import MobileNav from "@/components/nav/mobile";
import Sidebar from "@/components/nav/sidebar";
import Topbar from "@/components/nav/topbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-50 dark:bg-slate-900">
      <Topbar />
      <MobileNav />
      <Sidebar />
      <Content>{children}</Content>
    </div>
  );
}

function Content({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72 h-[calc(100vh-3rem)]">
      {children}
    </div>
  );
}
