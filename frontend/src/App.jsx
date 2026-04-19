import { Routes, Route, Navigate } from "react-router-dom";

import Hero from "./pages/Hero";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Portfolio from "./pages/Portfolio";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="min-h-screen bg-[#122B1D]">
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/portfolio" element={<Portfolio />} />
        {/* fallback */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
