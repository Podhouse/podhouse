import React from "react";
import { screen, render, fireEvent, waitFor } from "@testing-library/react";
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

  it("should validate email field when not passing a valid email", async () => {
    render(<SignIn />);
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: {
        value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
      },
    });

    fireEvent.input(screen.getByLabelText(/password/i), {
      target: {
        value: "123456",
      },
    });

    expect(await screen.findByText("Email is invalid")).toBeInTheDocument();
  });

  it("should validate password field when not passing a password", async () => {
    render(<SignIn />);
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: {
        value: "leo@gmail.com",
      },
    });

    fireEvent.input(screen.getByLabelText(/password/i), {
      target: {
        value: "1234567",
      },
    });

    expect(
      await screen.findByText("Password should be 8 chars minimum")
    ).toBeInTheDocument();
  });
});
