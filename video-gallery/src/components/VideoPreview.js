import React, { useState, useEffect } from "react";
import axios from "axios";

function VideoPreview({ fileId }) {
  const [videoUrl, setVideoUrl] = useState("");
  const [videoName, setVideoName] = useState("");
  const [videoDate, setVideoDate] = useState("");

  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/drive/v3/files/${fileId}`, {
        params: {
          fields: "webViewLink,name,createdTime",
          key: process.env.REACT_APP_GOOGLE_DRIVE_API_KEY,
        },
      })
      .then((response) => {
        let videoName = `${response.data.name}`;
        let videoUrl = response.data.webViewLink;
        videoUrl = videoUrl.replace("view?usp=drivesdk", "preview");
        let createdTime = response.data.createdTime;
        createdTime = createdTime.split("T")[0];
        setVideoDate(createdTime);
        setVideoUrl(videoUrl);
        setVideoName(videoName);
        console.log(videoUrl);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [fileId]);

  return (
    <div
      className="col-md-4"
      style={{ marginBottom: "5%", textAlign: "-webkit-center" }}
    >
      <div className="card" style={{ width: "95%" }}>
        <div className="bg-image " data-mdb-ripple-color="light">
          <iframe
            className="iframe-container"
            src={videoUrl}
            allowFullScreen
          ></iframe>
        </div>
        <div className="card-body">
          <h5 className="card-title">{videoName}</h5>
          <p className="card-text">{videoDate}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoPreview;
