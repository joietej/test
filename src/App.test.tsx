import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("renders select files button", () => {
  render(<App />);
  const buttonElement = screen.getByText(/Select Files/i);
  expect(buttonElement).toBeInTheDocument();
});

test("opens file explorer dialog", async () => {
  render(<App />);
  const buttonElement = screen.getByText(/Select Files/i);
  fireEvent.click(buttonElement)
  const dialog = screen.getByTestId("dialog");
  expect(dialog).toBeInTheDocument();
});
