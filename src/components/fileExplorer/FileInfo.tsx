import React from "react";
import { Switch } from "@headlessui/react";
import { PhotographIcon, DocumentIcon } from "@heroicons/react/outline";
import { CheckCircleIcon } from "@heroicons/react/solid";
import { File } from "../../hooks/getFolders";

const FileInfo: React.FunctionComponent<{
  file: File | null;
  isChecked: boolean;
  onFileSelect: (checked: boolean, file: File | null) => void;
}> = ({ file, isChecked, onFileSelect }) => {
  return (
    <li className="flex rounded p-2 gap-2 mt-2 justify-between align-middle hover:bg-blue-50">
      <Switch
        className="w-full"
        checked={isChecked}
        onChange={(checked) => onFileSelect(checked, file)}
      >
        <div className="w-full flex justify-between">
          <div className="flex align-middle">
            {file?.mimeType?.includes("image") ? (
              <PhotographIcon className="w-6 h-6" />
            ) : (
              <DocumentIcon className="w-6 h-6" />
            )}
            <span className="ml-4 text-sm font-light text-gray-600">
              {file?.name}
            </span>
          </div>
          {isChecked && <CheckCircleIcon className="h-6 w-6  text-blue-600" />}
        </div>
      </Switch>
    </li>
  );
};

export default FileInfo;
