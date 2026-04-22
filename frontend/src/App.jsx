import { Routes, Route, Navigate } from "react-router-dom";
import { useMarketStore } from "./store/useMarketStore";
import { useEffect } from "react";
import { socket } from "./socket";
import Hero from "./pages/Hero";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Portfolio from "./pages/Portfolio";
import Profile from "./pages/Profile";

function App() {
  useEffect(() => {
  socket.on("connect", () => {
    console.log("Connected to socket:", socket.id);
  });

  socket.on("test", (data) => {
    console.log("TEST EVENT:", data);
  });

  return () => {
    socket.off("connect");
    socket.off("test");
  };
}, []);

useEffect(() => {
  socket.on("market:update", (data) => {
    useMarketStore.getState().updatePrices(data);
  });

  return () => {
    socket.off("market:update");
  };
}, []);

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
