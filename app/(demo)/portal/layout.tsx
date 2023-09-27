export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll dark:bg-slate-900">
      <div className="p-2">{children}</div>
    </div>
  );
}
