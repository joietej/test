import useSWR from "swr";

export type File = {
  id: string;
  name: string;
  parentFolderId: string;
  mimeType: string;
  url: string;
};

export type Folder = {
  id: string;
  parentFolderId: string;
  name: string;
  folders: Folder[];
  files: File[];
};

export default function useFolders() {
  const url = "https://api-dev.reo.so/api/folderStructure ";
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data, error } = useSWR(url, fetcher);
  if (!error && data) {
    return { data, error: "" };
  }
  return { data: null, error };
}
