import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import LoginAdmin from "../pages/LoginAdmin";
import LoginParent from "../pages/LoginParent";
import LoginDriver from "../pages/LoginDriver";
import DashboardAdmin from "../pages/DashboardAdmin";
import DashboardParent from "../pages/DashboardParent";
import DashboardDriver from "../pages/DashboardDriver";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/admin" element={<LoginAdmin />} />
        <Route path="/login/parent" element={<LoginParent />} />
        <Route path="/login/driver" element={<LoginDriver />} />
        
        {/* ✅ Dashboards now accessible without authentication */}
        <Route path="/dashboard/admin" element={<DashboardAdmin />} />
        <Route path="/dashboard/parent" element={<DashboardParent />} />
        <Route path="/dashboard/driver" element={<DashboardDriver />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
