import * as React from "react";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

import { LandingContainer } from "./Landing.styles";

interface LandingProps {
  children: React.ReactNode;
}

const Landing = ({ children }: LandingProps) => (
  <LandingContainer>
    <Header />
    {children}
    <Footer />
  </LandingContainer>
);

export default Landing;
