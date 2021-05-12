import React from "react";
import { screen, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import SignIn from "./SignIn";

describe("SignIn", () => {
  it("should render the fields", () => {
    render(<SignIn />);

    expect(screen.getByText(/Podhouse/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /The best podcast in the web to listen to your favorites podcasts/i
      )
    ).toBeInTheDocument();

    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /email/i })).toBeInTheDocument();

    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /sign in/i })
    ).toBeInTheDocument();
  });
});
