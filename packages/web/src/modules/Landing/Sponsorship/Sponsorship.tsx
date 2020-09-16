import React from "react";

import Main from "./Main/Main";

import FAQ from "src/components/Landing/FAQ/FAQ";

const items = [
  {
    title: "Can I advertise my product/company?",
    body:
      "Yes. We accept companies and products to run advertising with us as well.",
  },
  {
    title: "How are the metrics calculated?",
    body:
      "The performance of advertisings is updated daily. The performance of your ad is not guaranteed, it can vary over time and depends on the quality, content, and relevance of your ad.",
  },
  {
    title: "What are the terms of sale?",
    body:
      "After you purchase your ad, it will be approved in 24 hours. Ad text and images must be appropriate for a general audience of all ages.",
  },
  {
    title: "How long my ad will run?",
    body: "Your ad will run for 30 days.",
  },
  {
    title: "What if my ad was not approved?",
    body:
      "We reserve the right to reject an ad for any reason, such as quality concerns, content, etc. If your ad was not approved, your payment will be refunded.",
  },
  {
    title: "How do the prices and slots work?",
    body:
      "Our prices are automatically adjusted with demand. Most of the time, price changes, notifications about slots, and expirations happen after midnight.",
  },
];

const Sponsorship = () => (
  <>
    <Main />
    <FAQ
      description="Here's some questions about advertising in Podhouse that you might have"
      items={items}
    />
  </>
);

export default Sponsorship;
