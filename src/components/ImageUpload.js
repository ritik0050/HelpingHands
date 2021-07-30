import { useState } from "react";
import { ImagePass } from '../Apicontroller'
import './.././../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { VerifyTokenn } from './../Apicontroller'
import { useEffect } from "react";
import { useHistory } from "react-router";

function ImageUpload() {

  const history = new useHistory();
  useEffect(() => {

    let uname4 = localStorage.getItem("loginResponse");
    let lgnres7 = JSON.parse(uname4);
    VerifyTokenn(lgnres7.userID, lgnres7.token).then((response) => {
      console.log("response");
      console.log(response);
      if (response.statusCode === "200") {
      }
      else {
        history.push("/user/dashboard");
      }
    });
  }, [])
  const [a, selectedFile1] = useState("");
  const [b, selectedFile2] = useState("");
  const [c, selectedFile3] = useState("");
  const [d, selectedFile4] = useState("");
  const [e, selectedFile5] = useState("");
  const [f, itemdesc1] = useState("");
  const [g, itemname1] = useState("");
  const [category, setCategory] = useState("");
  const [imgSrc, updatefileurl] = useState("../../assests/imagealt.jpeg");
  const [imgSrc2, updatefileurl2] = useState("../../assests/imagealt.jpeg");
  const [imgSrc3, updatefileurl3] = useState("../../assests/imagealt.jpeg");
  const [imgSrc4, updatefileurl4] = useState("../../assests/imagealt.jpeg");
  const [imgSrc5, updatefileurl5] = useState("../../assests/imagealt.jpeg");
  const [isLoading, updateisLoading] = useState(false);
  var reader = new FileReader();
  function itemdesc(event) {
    itemdesc1(event.target.value);
  }
  function itemname(event) {
    itemname1(event.target.value);
  }

  function imageChange1(event) {

    selectedFile1(event.target.files[0]);
    updatefileurl(URL.createObjectURL(event.target.files[0]));
  }
  function imageChange2(event) {
    selectedFile2(event.target.files[0]);
    updatefileurl2(URL.createObjectURL(event.target.files[0]));
  }
  function imageChange3(event) {

    selectedFile3(event.target.files[0]);
    updatefileurl3(URL.createObjectURL(event.target.files[0]));

  }
  function imageChange4(event) {
    selectedFile4(event.target.files[0]);
    updatefileurl4(URL.createObjectURL(event.target.files[0]));
  }
  function imageChange5(event) {
    selectedFile5(event.target.files[0]);
    updatefileurl5(URL.createObjectURL(event.target.files[0]));
  }
  function updateCategory(event) {
    // updatevalue(event.target.value);
    console.log(event.target.value);
    setCategory(event.target.value);
  }

  const username = localStorage.getItem("loginResponse");
  const loginres = JSON.parse(username);
  function fileUpload(event) {
    event.preventDefault();
    updateisLoading(true);
    ImagePass(a, b, c, d, e, f, g, loginres.userID, loginres.token, category).then(response => {
      console.log(response);
      if (response.data.statusCode === "200") {
        updatemsgs1("You have successfully donated.");
        updateshowmsg1(true);
      }
      else {
        updatemsgs1("Try Again");
        updateshowmsg1(true);
      }
      updateisLoading(false);
    })
      .catch(error => {
        console.log(error);
      });
  }
  const [msgs1, updatemsgs1] = useState("");
  const [showmsg1, updateshowmsg1] = useState(false);
  function close2() {
    updateshowmsg1(false);
  }
  function msgbtn1() {
    close2();
  }
  return (
    <div>
      <br></br>
      <h2 className="heading"><font face="Times New Roman">Donate Something...</font></h2>
      <br></br>
      <hr className="heading-hr"></hr>
      <br></br><br></br>
      <div className="uploadImg">

        <div className="row">
          <div class="mb-3 col-md-5">
            <div class="row">
              <label for="formGroupExampleInput" class="form-label">Item Name</label>
              <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Item Name" onChange={itemname} />
            </div>
            <div class="row frm-lbl-hgt">
              <select class="form-control" onChange={updateCategory}>
                <option value="0" selected>Select Category</option>
                <option value="1">Education</option>
                <option value="2">Furniture</option>
                <option value="3">Clothes</option>
              </select>
            </div>
          </div>
          <div class="mb-3 col-md-7">
            <label for="formGroupExampleInput" class="form-label">Item Description</label>
            <textarea rows="4" class="form-control" id="formGroupExampleInput" placeholder="Item Description" onChange={itemdesc}></textarea>
          </div>

        </div>
        <div className="row">

          <div className="col-md-4">
            <img src={imgSrc} className="uploadedimage" />
            <div class="upload-btn-wrapper col">
              <button class="btttn col-md-10">Upload  Image</button>
              <input type="file" name="fileThumbnail" class="form-control" id="inputGroupFile02" onChange={imageChange1} />
            </div>

          </div>
          <div className="col-md-4">
            <img src={imgSrc2} className="uploadedimage" />
            <div class="upload-btn-wrapper col">
              <button class="btttn col-md-10">Upload  Image</button>
              <input type="file" name="fileThumbnail" class="form-control" id="inputGroupFile02" onChange={imageChange2} />
            </div>
          </div>
          <div className="col-md-4">
            <img src={imgSrc3} className="uploadedimage" />
            <div class="upload-btn-wrapper col">
              <button class="btttn col-md-10">Upload  Image</button>
              <input type="file" name="fileThumbnail" class="form-control" id="inputGroupFile02" onChange={imageChange3} />
            </div>
          </div>
        </div>
        <br></br>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-4">
            <img src={imgSrc4} className="uploadedimage" />
            <div class="upload-btn-wrapper col">

              <button class="btttn col-md-10">Upload  Image</button>
              <input type="file" name="fileThumbnail" class="form-control" id="inputGroupFile02" onChange={imageChange4} />
            </div>

          </div>
          <div className="col-md-4">
            <img src={imgSrc5} onerror="this.src='../assests/imagealt.jepg';" className="uploadedimage" />
            <div class="upload-btn-wrapper col">
              <button class="btttn col-md-10">Upload  Image</button>
              <input type="file" name="fileThumbnail" class="form-control" id="inputGroupFile02" onChange={imageChange5} />
            </div>
          </div>
        </div>


        <div class="row mt-5">

          <button type="button" class="btn btn-warning wui-save" data-dismiss="modal" disabled={isLoading} onClick={fileUpload}>{isLoading ? <>Donating...</> : <>Donate</>}</button>

        </div>


      </div>
      {/* ================================================ */}
      <Modal show={showmsg1} onHide={close2}>
        <Modal.Body class="msg-mdl-bdy">
          <div id="colrr-z" class="mbb-mdl">{msgs1}</div>

          <div class="btn-msg-mdl"><Button variant="dark" class="btn btn-dark" onClick={msgbtn1}>
            OK
          </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default ImageUpload;