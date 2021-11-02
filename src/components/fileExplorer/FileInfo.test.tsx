import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import FileInfo from "./FileInfo";
import { File } from "../../hooks/getFolders";

const file = {
  id: "file1",
  name: "file1.jpg",
  mimeType: "image/jpeg",
} as File;

test("renders file with name", () => {
  render(<FileInfo file={file} isChecked={true} onFileSelect={(f) => {}} />);
  const element = screen.getByText(/file1.jpg/i);
  expect(element).toBeInTheDocument();
});

test("renders file with image icon", () => {
  render(<FileInfo file={file} isChecked={true} onFileSelect={(f) => {}} />);
  const element = screen.getByTestId(/fileImageIcon/i);
  expect(element).toBeInTheDocument();
});

test("renders file with document icon", () => {
  const doc = {...file, name:'file1.pdf', mimeType : 'document/pdf'}
  render(<FileInfo file={doc} isChecked={true} onFileSelect={(f) => {}} />);
  const element = screen.getByTestId(/fileDocIcon/i);
  expect(element).toBeInTheDocument();
});

test("renders file with chekmark", () => {
  render(<FileInfo file={file} isChecked={true} onFileSelect={(f) => {}} />);
  const checkMarkElement = screen.getByTestId(/fileCheckIcon/i);
  expect(checkMarkElement).toBeInTheDocument();
});

test("renders file without chekmark", () => {
  render(<FileInfo file={file} isChecked={false} onFileSelect={(f) => {}} />);
  const checkMarkElement = screen.queryByTestId(/fileCheckIcon/i);
  expect(checkMarkElement).toBeFalsy();
});

test("triggers onFileSelect on click", () => {
  const handler = jest.fn();
  render(<FileInfo file={file} isChecked={false} onFileSelect={handler} />);
  const element = screen.getByTestId(/fileSwitchContainer/i);
  fireEvent.click(element);
  expect(handler).toHaveBeenCalledTimes(1);
});
