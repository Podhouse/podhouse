import { ReactNode, memo } from "react";

import { DashboardContainer } from "./Dashboard.styles";

interface DashboardProps {
  children: ReactNode;
}

const Dashboard = ({ children }: DashboardProps) => (
  <DashboardContainer>{children}</DashboardContainer>
);

export default memo(Dashboard);
