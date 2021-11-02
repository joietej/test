import { ChevronRightIcon, FolderIcon } from "@heroicons/react/outline";
import React from "react";
import { Folder } from "../../hooks/getFolders";

const FolderInfo: React.FunctionComponent<{
  folder: Folder | null;
  onFolderSelect: (folder: Folder | null) => void;
}> = ({ folder, onFolderSelect }) => {
  return (
    <li>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        href="#"
        className="flex rounded p-2 mt-2 gap-2 align-middle justify-between cursor-pointer hover:bg-blue-50 bg-white visited:bg-blue-100"
        onClick={() => onFolderSelect(folder)}
      >
        <div className="flex gap-4 align-middle">
          <FolderIcon className="h-6 w-6" />
          <span className="text-sm font-light text-gray-600">
            {folder?.name}
          </span>
        </div>

        <ChevronRightIcon className="h-6 w-6" />
      </a>
    </li>
  );
};

export default FolderInfo;
