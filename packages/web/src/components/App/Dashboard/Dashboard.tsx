import React from "react";

import { DashboardContainer } from "./Dashboard.styles";

interface DashboardProps {
  children: any;
}

const Dashboard: React.FC<DashboardProps> = ({ children }) => (
  <DashboardContainer>{children}</DashboardContainer>
);

export default Dashboard;
