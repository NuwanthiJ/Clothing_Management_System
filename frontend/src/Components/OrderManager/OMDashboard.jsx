import { useState } from "react";
import "./OMDashboard.css";
import Header from "./OMHeader";
import Sidebar from "./OMSidebar";
import Home from "./OMHome";
import { useOMDashboardStore } from "../../store/useOMDashboardStore";
import OMCartitemdetails from "./OMCartitemdetails";
import OMOrderHistory from "./OMOrderHistory";

function OMDashboard() {
  // Get the state and actions from the store
  const { selectedTab } = useOMDashboardStore((state) => ({
    selectedTab: state.selectedTab,
  }));

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="om-grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
      {selectedTab === "Dashboard" && <Home />}
      {selectedTab === "Cart Item Details" && <OMCartitemdetails />}
      {selectedTab === "Order History" && <OMOrderHistory />}
    </div>
  );
}

export default OMDashboard;
