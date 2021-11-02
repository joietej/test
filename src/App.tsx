import React from "react";
import FileExplorerDialog from "./components/fileExplorer/FileExplorerDialog";
import { File } from "./hooks/getFolders";

function App() {
  const [showFileExplorer, setShowFileExplorer] = React.useState(false);
  const [selectedFiles, setSelectedFiles] = React.useState<Array<File | null>>(
    []
  );

  const selectFiles = (files: Array<File | null>) => {
    setSelectedFiles(files);
    setShowFileExplorer(false);
  };

  const close = () => {
    setShowFileExplorer(false);
    setSelectedFiles([]);
  };

  return (
    <div className="h-screen p-16">
      <div className="flex flex-col items-center align-middle">
        <button
          className="bg-blue-600 rounded px-4 py-2 text-white text-xs font-lighht"
          onClick={() => setShowFileExplorer(true)}
        >
          Select Files
        </button>
        <ul className="flex flex-col mt-8 p-4 gap-2 w-64 items-start truncate">
          {selectedFiles.length > 0 && (
            <li className="text-sm font-semibold">Files Selected</li>
          )}
          {selectedFiles.map((file) => (
            <li title={file?.name} className="text-sm font-light">
              {file?.name}
            </li>
          ))}
        </ul>
      </div>

      <FileExplorerDialog
        open={showFileExplorer}
        onSelect={selectFiles}
        onClose={close}
      />
    </div>
  );
}

export default App;
