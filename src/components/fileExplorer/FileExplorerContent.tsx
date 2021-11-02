import React from "react";
import { File, Folder } from "../../hooks/getFolders";
import FolderInfo from "./FolderInfo";
import FileInfo from "./FileInfo";

const isValidFile = (file: File): boolean => {
  var parts = file?.name?.split(".");
  if (parts?.length > 1) {
    const extn = parts[1].toLowerCase();
    return (
      extn === "jpeg" || extn === "jpg" || extn === "png" || extn === "pdf"
    );
  }
  return false;
};

const FileExplorerContent: React.FunctionComponent<{
  selectedFiles: Array<File | null>;
  currentFolder: Folder | null;
  onFolderSelect: (folder: Folder | null) => void;
  onFileSelect: (checked: boolean, file: File | null) => void;
  onSelect: (files: Array<File | null>) => void;
}> = ({
  selectedFiles,
  currentFolder,
  onFileSelect,
  onFolderSelect,
  onSelect,
}) => {
  const isChecked = (id: string) =>
    selectedFiles.map((file) => file?.id).includes(id);
  return (
    <div className="flex flex-col justify-between align-middle">
      <ul className="overflow-y-scroll">
        {currentFolder?.folders?.map((f: Folder) => (
          <FolderInfo folder={f} onFolderSelect={onFolderSelect} />
        ))}
        {currentFolder?.files
          ?.filter((f) => isValidFile(f))
          ?.map((f) => (
            <FileInfo
              file={f}
              isChecked={isChecked(f.id)}
              onFileSelect={onFileSelect}
            />
          ))}
      </ul>
      <div className="flex justify-end pt-8 mr-2">
        <button
          disabled={!selectedFiles.length}
          className="bg-blue-600 disabled:bg-gray-200 text-white rounded-md px-4 py-2 text- text-sm font-light"
          onClick={() => onSelect([...selectedFiles])}
        >{`Select ${selectedFiles.length || ""} Files`}</button>
      </div>
    </div>
  );
};

export default FileExplorerContent;
