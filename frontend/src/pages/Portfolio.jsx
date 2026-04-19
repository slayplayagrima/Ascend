import PortfolioSummary from "../components/portfolio/PortfolioSummary";
import HoldingsTable from "../components/portfolio/HoldingsTable";
import SidePanel from "../components/portfolio/SidePanel";
import SectorAllocation from "../components/portfolio/SectorAllocation";
import StressTest from "../components/portfolio/StressTest";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Portfolio() {
  return (
    <>
    <NavBar/>
    <div
      className="min-h-screen p-6 text-white"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* 🔹 TOP */}
      <PortfolioSummary />

      {/* 🔹 MAIN GRID */}
      <div className="grid grid-cols-3 gap-6 mt-6">
        <div className="col-span-2">
          <HoldingsTable />
        </div>

        <SidePanel />
      </div>

      {/* 🔹 SECTOR */}
      <div className="mt-6">
        <SectorAllocation />
      </div>

      {/* 🔹 STRESS TEST */}
      <div className="mt-6">
        <StressTest />
      </div>
    </div>
    <Footer/>
    </>
  );
}