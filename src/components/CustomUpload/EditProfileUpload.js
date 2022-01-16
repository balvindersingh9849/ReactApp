/*eslint-disable*/
import React from "react";

export default function PictureUpload(props) {
  // const { handleImageChange } = props.state;
  // eslint-disable-next-line

  // this.state.file is the file/image uploaded
  // in this function you can save the image (this.state.file) on form submit
  // you have to call it yourself

  return (
    <div
      className="picture-container"
      style={{ position: "relative", bottom: "5px" }}
    >
      <div className="picture" style={{ width: "130px", height: "130px" }}>
        <img
          src={props.picUrl ? props.picUrl : imagePreviewUrl}
          className="picture-src"
          alt="..."
        />
        <input type="file" disabled={true} />
      </div>
    </div>
  );
}
