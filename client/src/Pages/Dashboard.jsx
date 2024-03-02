/* eslint-disable no-unused-vars */
// import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../Components/DashSidebar";
import DashProfile from "../Components/DashProfile";
import DashPost from "../Components/DashPost";
import DashUsers from "../Components/DashUsers";
import DashComment from "../Components/DashComment";
import DashboardComp from "../Components/DashboardComp";

const Dashboard = () => {
	const location = useLocation();

	const [tab, setTab] = useState("");
	useEffect(() => {
		const urlParams = new URLSearchParams(location.search);
		const tabFromUrl = urlParams.get("tab");
		if (tabFromUrl) {
			setTab(tabFromUrl);
		}
	}, [location.search]);
	return (
		<div className="min-h-screen flex flex-col md:flex-row ">
			<div className="md:w-56">
				<DashSidebar />
				{/* sidebar */}
			</div>
			{tab === "profile" && <DashProfile />}
			{/* profile  */}
			{tab === "posts" && <DashPost />}
			{tab === "users" && <DashUsers />}
			{tab === "comments" && <DashComment />}
			{tab === "dash" && <DashboardComp />}
		</div>
	);
};

export default Dashboard;
