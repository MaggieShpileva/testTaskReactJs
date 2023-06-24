import React from "react";
import { render, screen } from "@testing-library/react";
import { MainPage } from "../components/MainPage";

jest.mock("axios", () => ({
  post: jest.fn(() =>
    Promise.resolve({ data: { accessToken: "mockedAccessToken" } })
  ),
}));

test("renders main page", async () => {
  render(<MainPage />);
  const el = screen.getByText(/логотип/i);
  expect(el).toBeInTheDocument();
});
