import React, { useState } from "react";
import './style/index.css'
import FolderIcon from "./assets/avtar.png";
import CloseIcon from "./assets/CloseIcon.svg";

function App() {
  const [profilePicture, setProfilePicture] = useState("");
  const [isUploaded, setIsUploaded] = useState(false);

  function handleImageChange(e) {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();

      reader.onload = function (e) {
        setProfilePicture(e.target.result);
        setIsUploaded(true);
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  }

  return (
    <React.Fragment>
      <div className="BoxUpload">
        <div className="image-upload">
          {!isUploaded ? (
            <>
              <label htmlFor="upload-input">
                <img
                  src={FolderIcon}
                  draggable={"false"}
                  alt="placeholder"
                  style={{ width: 100, height: 100 }}
                />
              </label>

              <input
                id="upload-input"
                type="file"
                accept=".jpg,.jpeg,.png"
                onChange={handleImageChange}
              />
            </>
          ) : (
            <div div className="ImagePreview">
              <img
                className="close-icon"
                src={CloseIcon}
                alt="CloseIcon"
                onClick={() => {
                  setIsUploaded(false);
                  setProfilePicture(null);
                }}
              />
              <img
                id="uploaded-image"
                src={profilePicture}
                draggable={false}
                alt="uploaded-img"
              />
            </div>
          )}
        </div>
      </div>
    </React.Fragment >
  );
}

export default App;
