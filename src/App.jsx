import { Routes, Route } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import SearchResults from "./pages/SearchResults";
import VendorDetails from "./pages/VendorDetails";
import SavedVendors from "./pages/SavedVendors";
import SearchProgress from "./pages/SearchProgress";
import History from "./pages/History";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";

export default function App() {
 return <AppLayout><Routes>
  <Route path="/" element={<Landing/>}/>
  <Route path="/dashboard" element={<Dashboard/>}/>
  <Route path="/search" element={<SearchResults/>}/>
  <Route path="/search/progress" element={<SearchProgress/>}/>
  <Route path="/vendors/:id" element={<VendorDetails/>}/>
  <Route path="/saved" element={<SavedVendors/>}/>
  <Route path="/history" element={<History/>}/>
  <Route path="/profile" element={<Profile/>}/>
  <Route path="/settings" element={<Profile/>}/>
  <Route path="/login" element={<Auth mode="login"/>}/>
  <Route path="/signup" element={<Auth mode="signup"/>}/>
  <Route path="*" element={<Landing/>}/>
 </Routes></AppLayout>;
}