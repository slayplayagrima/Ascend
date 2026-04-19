import { useEffect } from "react";
import { usePortfolioStore } from "../store/usePortfolioStore";

import NavBar from "../components/NavBar";
import DashboardStats from "../components/dashboard/dashboardStats";
import MarketWatch from "../components/dashboard/marketWatch";
import RiskAnalysis from "../components/dashboard/riskAnalysis";
import TradeSection from "../components/dashboard/tradeSection";
import PerformanceInsights from "../components/dashboard/performanceInsights";
import Footer from "../components/Footer";

function Dashboard() {
  const { fetchPortfolio } = usePortfolioStore();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetchPortfolio(token);
    }
  }, [fetchPortfolio]);

  return (
    <>
      <NavBar />
      <DashboardStats />
      <MarketWatch />
      <RiskAnalysis />
      <TradeSection />
      <PerformanceInsights />
      <Footer />
    </>
  );
}

export default Dashboard;