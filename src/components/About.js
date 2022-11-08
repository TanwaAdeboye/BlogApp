import React from "react";
import "../components/css/Article.css";
import CloseBtn from "../images/cancel-btn.png";
import img_icon from "../images/img_upload.svg";
import add_icon from "../images/add-icon.png";
import { useState, useRef } from "react";

function About({closeModal}) {
  const [file, setFile] = useState(false);
  const[files, setFiles] = useState([]);

  const fileInputField = useRef(null);
  const handleFileChange = (e) => {
    setFile(e.target.files[0].name);

  };
  const AddMoreFile = (e) =>{
    setFile(e.target.files[1].name);
    setFiles([...files, files.push(file)]);
    console.log("TANWA INLAW");

  }

  return (
    <>
      <div className="main-container">
     <div>
          <div className="top">
            <h2 className="write-an-article">Write an Article</h2>
            <button className="close_btn" onClick = {() => closeModal(false)}> X
              {/* <img src={CloseBtn} /> */}
            </button>
          </div>

          <textarea className="text_area" placeholder="Write here" />

          <div className="upload_wrapper">
            <input
              type="file"
              id="file-upload"
              onChange={handleFileChange}
              ref={fileInputField}
            />

            <label
              htmlFor="file"
              className="custom-file-upload"
              onClick={() => fileInputField.current.click()}
            >
              <div className="wrap-icon-photo">
              <img src={img_icon} />
              <span style={{ color: "lightgray" }}>Add photo</span>
              </div>
              <a href= "/">{file}</a>
            </label>
          </div>



          <div className="more-pic">
            <label htmlFor="file" className="custom-file-upload"  onClick={() => fileInputField.current.click()}>
            <div className="wrap-icon-photo-two">
            <img src={add_icon}/> <span className="add-more-pic"  onClick={AddMoreFile}>Add more photos</span>
            </div>
            </label>
          </div>



          <div className="article-btn">
            <button className="cancel-btn" onClick = {() => closeModal(false)}> Cancel</button>
            <button className="publish-btn"> Publish</button>
          </div>
          {files.map(file => {
            return <img src = {file} alt= "newImg" key={file}/>
          })}
        </div>
      </div>
    </>
  );
}

export default About;
