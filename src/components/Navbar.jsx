import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "./Logo";

const links = [["Home","/"],["Dashboard","/dashboard"],["Search","/search"],["Saved","/saved"],["History","/history"]];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
    <div className="container-shell flex h-16 items-center justify-between">
      <Logo />
      <nav className="hidden items-center gap-7 md:flex">
        {links.map(([label,to]) => <NavLink key={to} to={to} end={to==="/"} className={({isActive}) => `text-sm font-semibold ${isActive ? "text-brand" : "text-slate-600 hover:text-brand"}`}>{label}</NavLink>)}
      </nav>
      <div className="hidden items-center gap-3 md:flex">
        <Link className="btn-outline !px-4 !py-2" to="/login">Login</Link>
        <Link className="btn-primary !px-4 !py-2" to="/signup">Sign up</Link>
      </div>
      <button className="rounded-lg p-2 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X/> : <Menu/>}</button>
    </div>
    {open && <nav className="border-t bg-white p-4 md:hidden">{links.map(([label,to]) => <Link onClick={()=>setOpen(false)} className="block rounded-lg px-3 py-3 text-sm font-semibold hover:bg-pale" key={to} to={to}>{label}</Link>)}<div className="mt-3 flex gap-2"><Link className="btn-outline flex-1" to="/login">Login</Link><Link className="btn-primary flex-1" to="/signup">Sign up</Link></div></nav>}
  </header>;
}