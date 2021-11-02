import React, { Fragment } from "react";
import useFolders, { Folder, File } from "../../hooks/getFolders";
import { Dialog, Transition } from "@headlessui/react";
import FileExplorerContent from "./FileExplorerContent";
import FileExplorerTitle from "./FileExplorerTitle";

const FileExplorerDialog: React.FunctionComponent<{
  open: boolean;
  onSelect: (files: Array<File | null>) => void;
  onClose: () => void;
}> = ({ open, onSelect, onClose }) => {
  console.log(open);
  const { data, error } = useFolders();

  const [selectedFolder, setSelectedFolder] = React.useState<Folder | null>(
    null
  );
  const [parentFolderId, setParentFolderId] = React.useState<string | null>(
    null
  );
  const [selectedFiles, setSelectedFiles] = React.useState<Array<File | null>>(
    []
  );
  React.useEffect(() => {
    setSelectedFolder(data);
  }, [data]);

  const searchFolder = (
    id: string | null,
    folder: Folder | null = null
  ): Folder | any => {
    const source = folder?.folders || (data?.folders as Folder[]);
    if (id && source?.length) {
      let parent = source.find((f) => f.id === id);
      if (!parent) {
        for (let i = 0; i < source.length; i++) {
          parent = searchFolder(id, source[i]);
          if (parent) {
            return parent;
          }
        }
      }
      return parent;
    }
    return null;
  };

  const goToFolder = (folder: Folder | null) => {
    setParentFolderId(folder?.parentFolderId || null);
    setSelectedFolder(folder);
  };

  const goToParentFolder = () => {
    const folder = searchFolder(parentFolderId);
    if (folder) {
      setParentFolderId(folder.parentFolderId);
      setSelectedFolder(folder);
    } else {
      setSelectedFolder(data);
      setParentFolderId(null);
    }
  };

  const selectFile = (checked: boolean, file: File | null) => {
    if (checked) {
      setSelectedFiles([...selectedFiles, file]);
    } else {
      setSelectedFiles([...selectedFiles.filter((f) => f?.id !== file?.id)]);
    }
  };

  const reset = () => {
    setSelectedFiles([]);
    setSelectedFolder(data);
    setParentFolderId(null);
    onClose();
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-hidden"
        onClose={() => reset()}
      >
        <div className="flex min-h-screen justify-center items-center">
          <Transition.Child
            as="div"
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75" />
          </Transition.Child>

          <Transition.Child
            as="div"
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="w-64 max-w-sm sm:w-96 sm:max-w-lg p-2 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all">
              <Dialog.Title>
                <FileExplorerTitle
                  defaultTitle="Root"
                  currentFolder={selectedFolder}
                  onGoToParentFolder={goToParentFolder}
                  onReset={reset}
                />
              </Dialog.Title>
              <FileExplorerContent
                currentFolder={selectedFolder}
                selectedFiles={selectedFiles}
                onFileSelect={selectFile}
                onFolderSelect={goToFolder}
                onSelect={onSelect}
              />
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default FileExplorerDialog;
