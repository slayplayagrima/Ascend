import ProfileHeader from "../components/profile/ProfileHeader";
import NavBar from "../components/NavBar";
import AccountIdentity from "../components/profile/AccountIdentity";
import SimulationWallet from "../components/profile/SimulationWallet";
import TradingPreferences from "../components/profile/TradingPreferences";
import SecuritySessions from "../components/profile/SecuritySessions";
import Footer from "../components/Footer";

function Profile() {
  return (
    <main className="max-w-[1400px] mx-auto">
      <NavBar />
      <ProfileHeader/>
      
      {/* Two Column Layout: AccountIdentity and SimulationWallet with equal width */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-10 mb-10">
        <AccountIdentity />
        <SimulationWallet />
      </div>
      
      {/* Full Width Sections */}
      <div className="px-6">
        <TradingPreferences/>
        <SecuritySessions />
        <Footer />
      </div>
    </main>
  );
}

export default Profile;
