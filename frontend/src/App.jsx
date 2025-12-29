import { Routes, Route, Navigate } from "react-router-dom";

import Hero from "../pages/Hero";
import Auth from "../pages/Auth";
import Dashboard from "../pages/Dashboard";

function App() {
  return (
    <div className="min-h-screen bg-[#122B1D]">
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* fallback */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
