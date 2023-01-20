import React, { useState, useEffect } from "react";
import axios from "axios";
import VideoPreview from "./VideoPreview";

function FileList() {
  const folderId = process.env.REACT_APP_GOOGLE_DRIVE_FOLDER_ID;
  const [fileIds, setFileIds] = useState([]);

  useEffect(() => {
    console.log(folderId);
    axios
      .get("https://www.googleapis.com/drive/v3/files", {
        params: {
          q: `'${folderId}' in parents and mimeType != 'application/vnd.google-apps.folder'`,
          fields: "nextPageToken, files(id)",
          key: process.env.REACT_APP_GOOGLE_DRIVE_API_KEY,
        },
      })
      .then((response) => {
        console.log(key);
        setFileIds(response.data.files.map((file) => file.id));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [folderId]);

  return (
    <div className="row ">
      {fileIds.map((fileId) => (
        <VideoPreview key={fileId} fileId={fileId}></VideoPreview>
      ))}
    </div>
  );
}

export default FileList;
