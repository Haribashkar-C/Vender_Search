import Navbar from "./Navbar";
export default function AppLayout({ children }) {
  return <><Navbar/><main className="min-h-[calc(100vh-64px)]">{children}</main><footer className="border-t border-slate-200 bg-white py-7"><div className="container-shell flex flex-col justify-between gap-2 text-sm text-slate-500 sm:flex-row"><span>© 2026 Vender Search. All rights reserved.</span><span>Discover suppliers with confidence.</span></div></footer></>;
}