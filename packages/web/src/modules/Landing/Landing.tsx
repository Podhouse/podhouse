import * as React from "react";
import { ScrollingProvider, Section } from "react-scroll-section";

import Header from "./Header/Header";
import Main from "./Main/Main";
import Podcasts from "./Podcasts/Podcasts";
import Features from "./Features/Features";
import Pricing from "./Pricing/Pricing";
import CTA from "./CTA/CTA";
import Footer from "./Footer/Footer";

import { LandingContainer } from "./Landing.styles";

const Landing = () => (
  <ScrollingProvider>
    <LandingContainer>
      <Header />
      <Main />
      <Podcasts />
      <Section id="features">
        <Features />
      </Section>
      <Section id="pricing">
        <Pricing />
      </Section>
      <CTA />
      <Footer />
    </LandingContainer>
  </ScrollingProvider>
);

export default Landing;
