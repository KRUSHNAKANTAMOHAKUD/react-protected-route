import React, { useEffect } from "react";
import DashboardImg from "../../assets/dashboard_img.png";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";

function Dashboard() {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userDetails"));
  useEffect(() => {
    if (!(userData&& userData.email)) {
      navigate("/login");
    }
  }, []);
  return(
    <>
    <Navbar/>
     <img src={DashboardImg} alt="dashboard image" style={{width:'100vw',height:'100vh'}}/>
     </>
     );
}

export default Dashboard;
