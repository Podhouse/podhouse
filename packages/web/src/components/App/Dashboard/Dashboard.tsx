import React from "react";

import { DashboardContainer } from "./Dashboard.styles";

interface DashboardProps {
  children: React.ReactNode;
}

const Dashboard = ({ children }: DashboardProps) => (
  <DashboardContainer>{children}</DashboardContainer>
);

export default Dashboard;
