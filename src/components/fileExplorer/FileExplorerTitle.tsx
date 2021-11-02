import { ChevronLeftIcon, XIcon } from "@heroicons/react/outline";
import React from "react";
import { Folder } from "../../hooks/getFolders";

const FileExplorerTitle: React.FunctionComponent<{
  defaultTitle: string;
  currentFolder: Folder | null;
  onGoToParentFolder: () => void;
  onReset: () => void;
}> = ({ defaultTitle, currentFolder, onGoToParentFolder, onReset }) => {
  return (
    <div className="flex p-2 gap-4 align-middle justify-between">
      <div className="flex gap-4 align-middle">
        {currentFolder?.name && (
          <button onClick={() => onGoToParentFolder()}>
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
        )}
        <span className="text-sm font-semibold text-gray-600">
          {currentFolder?.name || defaultTitle}
        </span>
      </div>
      <button onClick={() => onReset()}>
        <XIcon className="h-6 w-6" />
      </button>
    </div>
  );
};

export default FileExplorerTitle;
