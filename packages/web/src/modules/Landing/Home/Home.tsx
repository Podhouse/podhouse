import React from "react";

import Main from "./Main/Main";
import Podcasts from "./Podcasts/Podcasts";
import Features from "./Features/Features";
import Premium from "./Premium/Premium";

import FAQ from "src/components/Landing/FAQ/FAQ";
import CallToAction from "src/components/Landing/CallToAction/CallToAction";

const items = [
  {
    title: "What's the best thing about Podhouse?",
    body:
      "We're a free podcast app with the best user experience you might have. Our mission is to have a cleaner, robust, and simple experience for you to listen to your favorite podcasts.",
  },
  {
    title: "Why another podcast app?",
    body:
      "Our mission is to provide a podcast app where listeners can have a nice, clean, and intuitive experience.",
  },
  {
    title: "Is it free or do you I have to pay anything?",
    body:
      "We're a free podcast app. We'll launch some premium features in the future, but you don't need to worry, you will always be able to use without have to pay anything.",
  },
  {
    title: "Is Podhouse available in other platforms?",
    body:
      "Currently, we're only a web app, but it's already in the plan to make an iOS and Android versions of the app.",
  },
];

const Home = () => (
  <>
    <Main />
    <Podcasts />
    <Features />
    <FAQ
      description="Here's some questions that you might have about us."
      items={items}
    />
    <Premium />
    <CallToAction />
  </>
);

export default Home;
