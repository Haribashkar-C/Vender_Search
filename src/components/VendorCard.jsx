import { BadgeCheck, MapPin, Star, Globe, Mail, Phone, Bookmark } from "lucide-react";
import { Link } from "react-router-dom";
export default function VendorCard({ vendor, saved = false, onSave }) {
  return <article className="card p-5">
    <div className="flex flex-col gap-4 sm:flex-row">
      <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-slate-50 text-center text-sm font-black text-brand">{vendor.short}</div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2"><h3 className="text-lg font-bold text-navy">{vendor.name}</h3><BadgeCheck size={18} className="text-brand"/></div>
        <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-500"><span>{vendor.category}</span><span className="flex items-center gap-1"><MapPin size={13}/>{vendor.location}</span><span className="flex items-center gap-1 text-amber-500"><Star size={13} fill="currentColor"/>{vendor.rating} ({vendor.reviews} reviews)</span></div>
        <p className="mt-3 text-sm leading-6 text-slate-600">{vendor.description}</p>
        <div className="mt-3 flex flex-wrap gap-3 text-xs text-slate-500"><span className="flex items-center gap-1"><Mail size={13}/>{vendor.email}</span><span className="flex items-center gap-1"><Phone size={13}/>{vendor.phone}</span><span className="flex items-center gap-1"><Globe size={13}/>{vendor.website}</span></div>
        <div className="mt-4 flex flex-wrap gap-2"><Link to={`/vendors/${vendor.id}`} className="btn-primary">View details</Link><button onClick={onSave} className="btn-outline"><Bookmark size={15}/>{saved ? "Saved" : "Save vendor"}</button></div>
      </div>
    </div>
  </article>;
}