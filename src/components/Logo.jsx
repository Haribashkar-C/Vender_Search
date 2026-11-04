import { Search } from "lucide-react";
import { Link } from "react-router-dom";

export default function Logo({ light = false }) {
  return <Link to="/" className={`flex items-center gap-2 font-extrabold tracking-tight ${light ? "text-white" : "text-slate-900"}`}>
    <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand text-white"><Search size={21} strokeWidth={3} /></span>
    <span>Vender <span className={light ? "text-blue-200" : "text-brand"}>Search</span></span>
  </Link>;
}