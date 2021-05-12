import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import ResetPassword from "./ResetPassword";

describe("ResetPassword", () => {
  it("should render the fields", () => {
    render(<ResetPassword />);

    expect(screen.getByText(/Podhouse/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /The best podcast in the web to listen to your favorites podcasts/i
      )
    ).toBeInTheDocument();

    expect(screen.getByLabelText("Current password")).toBeInTheDocument();
    expect(screen.getByLabelText(/current password/i)).toBeInTheDocument();

    expect(screen.getByLabelText("New password")).toBeInTheDocument();
    expect(screen.getByLabelText(/new password/i)).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /change password/i })
    ).toBeInTheDocument();
  });

  it("should validate current password field when not passing a valid password", async () => {
    render(<ResetPassword />);

    fireEvent.input(screen.getByLabelText(/current password/i), {
      target: {
        value: "123456",
      },
    });

    expect(
      await screen.findByText("Current password should be 8 chars minimum")
    ).toBeInTheDocument();
  });

  it("should validate new password field when not passing a valid password", async () => {
    render(<ResetPassword />);

    fireEvent.input(screen.getByLabelText(/new password/i), {
      target: {
        value: "123456",
      },
    });

    expect(
      await screen.findByText("New password should be 8 chars minimum")
    ).toBeInTheDocument();
  });
});
