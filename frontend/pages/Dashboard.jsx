import NavBar from "../components/NavBar";
import DashboardStats from "../components/dashboard/dashboardStats";
import MarketWatch from "../components/dashboard/marketWatch";

function Dashboard(){
    return(
        <>
        <NavBar/>
        <DashboardStats/>
        <MarketWatch/>
        </> 
    )
};

export default Dashboard;