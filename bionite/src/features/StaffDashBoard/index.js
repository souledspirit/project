import DashboardStats from "./components/DashboardStats";
import AmountStats from "./components/AmountStats";
import PageStats from "./components/PageStats";

import UserGroupIcon from "@heroicons/react/24/outline/UserGroupIcon";
import UsersIcon from "@heroicons/react/24/outline/UsersIcon";
import CircleStackIcon from "@heroicons/react/24/outline/CircleStackIcon";
import CreditCardIcon from "@heroicons/react/24/outline/CreditCardIcon";
import UserChannels from "./components/UserChannels";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";

import { useDispatch } from "react-redux";
import { showNotification } from "../common/headerSlice";
import DoughnutChart from "./components/DoughnutChart";
import { useState } from "react";

const statsData = [
  {
    title: "Present Day Attendance",
    value: "Present",
    icon: <UserGroupIcon className="w-8 h-8" />,
    description: "approved",
  },
  {
    title: "Number Of Hours",
    value: "3",
    icon: <CreditCardIcon className="w-8 h-8" />,
    description: "Time duration",
  },
  {
    title: "Number Of Period ",
    value: "3",
    icon: <CircleStackIcon className="w-8 h-8" />,
    description: "Attended",
  },
  {
    title: "Attendance Percentage",
    value: "35.5%",
    icon: <UsersIcon className="w-8 h-8" />,
    description: "based on current day",
  },
];

function StaffDashBoard() {
  const dispatch = useDispatch();

  const updateDashboardPeriod = (newRange) => {
    // Dashboard range changed, write code to refresh your values
    dispatch(
      showNotification({
        message: `Period updated to ${newRange.startDate} to ${newRange.endDate}`,
        status: 1,
      })
    );
  };

  return (
    <>
      {/** ---------------------- Select Period Content ------------------------- */}
      {/** ---------------------- Different stats content 1 ------------------------- */}
      <div className="grid lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-1 gap-6">
        {statsData.map((d, k) => {
          return <DashboardStats key={k} {...d} colorIndex={k} />;
        })}
      </div>
      {/* * ---------------------- Different charts ------------------------- */}
      {/* <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
        <LineChart />
        <BarChart />
      </div> */}
      {/** ---------------------- Different stats content 2 ------------------------- */}
      {/* <div className="grid lg:grid-cols-2 mt-10 grid-cols-1 gap-6">
        <AmountStats />
        <PageStats />
      </div> */}
      {/** ---------------------- User source channels table  ------------------------- */}
      {/* <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
        <UserChannels />
        <DoughnutChart />
      </div> */}
    </>
  );
}

export default StaffDashBoard;
