import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import FolderInfo from "./FolderInfo";
import { Folder } from "../../hooks/getFolders";

const folder = {
  id: "folder1",
  name: "folder1",
} as Folder;

test("renders folder with name", () => {
  render(<FolderInfo folder={folder} isVisited={false} onFolderSelect={(f) => {}} />);
  const element = screen.getByText(/folder1/i);
  expect(element).toBeInTheDocument();
});

test("renders folder with folder icon", () => {
  render(<FolderInfo folder={folder} isVisited={false} onFolderSelect={(f) => {}} />);
  const element = screen.getByTestId(/folderIcon/i);
  expect(element).toBeInTheDocument();
});

test("renders folder with white background", () => {
  render(<FolderInfo folder={folder} isVisited={false} onFolderSelect={(f) => {}} />);
  const element = screen.getByTestId(/folderContainer/i);
  expect(element).toHaveClass('bg-white')
});

test("renders visited folder with blue background", () => {
  render(<FolderInfo folder={folder} isVisited={true} onFolderSelect={(f) => {}} />);
  const element = screen.getByTestId(/folderContainer/i);
  expect(element).toHaveClass('bg-blue-100')
});

test("triggers onFolderSelect on click", () => {
  const handler = jest.fn();
  render(<FolderInfo folder={folder} isVisited={false} onFolderSelect={handler} />);
  const element = screen.getByTestId(/folderContainer/i);
  fireEvent.click(element);
  expect(handler).toHaveBeenCalledTimes(1);
});
