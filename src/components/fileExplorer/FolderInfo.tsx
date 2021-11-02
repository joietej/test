import { ChevronRightIcon, FolderIcon } from "@heroicons/react/outline";
import React from "react";
import { Folder } from "../../hooks/getFolders";

const FolderInfo: React.FunctionComponent<{
  folder: Folder | null;
  isVisited: boolean;
  onFolderSelect: (folder: Folder | null) => void;
}> = ({ folder, isVisited, onFolderSelect }) => {
  const classNames =
    "flex rounded p-2 mt-2 gap-2 align-middle justify-between cursor-pointer hover:bg-blue-50";
  return (
    <li
      className={`${classNames} ${isVisited ? "bg-blue-100" : "bg-white"}`}
      onClick={() => onFolderSelect(folder)}
    >
      <div className="flex gap-4 align-middle">
        <FolderIcon className="h-6 w-6" />
        <span className="text-sm font-light text-gray-600">{folder?.name}</span>
      </div>

      <ChevronRightIcon className="h-6 w-6" />
    </li>
  );
};

export default FolderInfo;
