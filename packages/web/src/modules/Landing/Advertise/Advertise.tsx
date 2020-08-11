import React from "react";

import Main from "./Main/Main";
import Pricing from "./Pricing/Pricing";

import FAQ from "src/components/Landing/FAQ/FAQ";
import CallToAction from "src/components/Landing/CallToAction/CallToAction";

const items = [
  {
    title: "I am a podcast owner. Can I advertise?",
    body:
      "Yes. We accept podcast owners that want to increases traffic listeners to advertise in our app.",
  },
  {
    title: "I have a product/company. Can I advertise?",
    body:
      "Yes, totally. We accept all kinds of companies, products, to run advertising with us.",
  },
  {
    title: "For how long my ads will run?",
    body:
      "The ads will run for 30 days straight from the data of confirmation. ",
  },
  {
    title: "What are the terms of sale?",
    body:
      "All ad sales are final, no refund. The price may change at any time. All prices are in U.S. dollars.",
  },
  {
    title: "What assets should I provide to start running my ads?",
    body:
      "We need only an image 1800x30 in high resolution to start running your ad in our app. The image should be appropriate for all ages.",
  },
  {
    title: "Are the ads exclusive?",
    body:
      "No. You might have running your ads at the same time as other companies as well, but we have a limit.",
  },
];

const Advertise = () => (
  <>
    <Main />
    <Pricing />
    <FAQ
      description="Here's some questions about advertising in Podhouse that you might have."
      items={items}
    />
    <CallToAction />
  </>
);

export default Advertise;
