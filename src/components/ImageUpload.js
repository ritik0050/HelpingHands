import { useState } from "react";
import { ImagePass } from '../Apicontroller'
import './.././../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'


function ImageUpload()
{
    const[a,selectedFile1]=useState("");
    const [b, selectedFile2] = useState("");
  const [c, selectedFile3] = useState("");
  const [d, selectedFile4] = useState("");
  const [e, selectedFile5] = useState("");
  const [f, itemdesc1] = useState("");
  const [g, itemname1] = useState("");
  const[category,setCategory]=useState("");
  const [imgSrc,updatefileurl]=useState("../../assests/imagealt.jpeg");
  const [imgSrc2,updatefileurl2]=useState("../../assests/imagealt.jpeg");
  const [imgSrc3,updatefileurl3]=useState("../../assests/imagealt.jpeg");
  const [imgSrc4,updatefileurl4]=useState("../../assests/imagealt.jpeg");
  const [imgSrc5,updatefileurl5]=useState("../../assests/imagealt.jpeg");
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
  function updateCategory(event)
  {
    // updatevalue(event.target.value);
    console.log(event.target.value);
    setCategory(event.target.value);
  }

  const username = localStorage.getItem("loginResponse");
    const loginres = JSON.parse(username);
  function fileUpload(event) {
    event.preventDefault();
   ImagePass(a,b,c,d,e,f,g,loginres.userID,loginres.token,category).then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return(
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
  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Item Name" onChange={itemname}/>
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
{/* <div class="col-md-2 marginn">
<DropdownButton id="dropdown-basic-button" variant="secondary" title="Category" onChange={selectCategory}>
  <Dropdown.Item value="1">Education</Dropdown.Item>
  <Dropdown.Item value="2">Furniture</Dropdown.Item>
  <Dropdown.Item value="3">Clothes</Dropdown.Item>
</DropdownButton>
</div> */}
</div>
<div className="row">
 
  <div className="col-md-4">
<img src={imgSrc} className="uploadedimage"/>
 <div class="upload-btn-wrapper col">
 <button class="btttn col-md-10">Upload  Image</button>
 <input type="file" name="fileThumbnail" class="form-control" id="inputGroupFile02" onChange={imageChange1}/>
</div>

</div>
<div className="col-md-4">
<img src={imgSrc2} className="uploadedimage"/>
<div class="upload-btn-wrapper col">
 <button class="btttn col-md-10">Upload  Image</button>
 <input type="file" name="fileThumbnail" class="form-control" id="inputGroupFile02" onChange={imageChange2}/>
</div>
</div>
<div className="col-md-4">
<img src={imgSrc3} className="uploadedimage"/>
<div class="upload-btn-wrapper col">
 <button class="btttn col-md-10">Upload  Image</button>
 <input type="file" name="fileThumbnail" class="form-control" id="inputGroupFile02" onChange={imageChange3}/>
</div>
</div>
</div>
<br></br>
<div className="row">
<div className="col-md-2"></div>
  <div className="col-md-4">
<img src={imgSrc4} className="uploadedimage"/>
 <div class="upload-btn-wrapper col">
   
 <button class="btttn col-md-10">Upload  Image</button>
 <input type="file" name="fileThumbnail" class="form-control" id="inputGroupFile02" onChange={imageChange4}/>
</div>

</div>
<div className="col-md-4">
<img src={imgSrc5} onerror="this.src='../assests/imagealt.jepg';"className="uploadedimage"/>
<div class="upload-btn-wrapper col">
 <button class="btttn col-md-10">Upload  Image</button>
 <input type="file" name="fileThumbnail" class="form-control" id="inputGroupFile02" onChange={imageChange5}/>
</div>
</div>
</div>


<div class="row mt-5">

<button type="button" class="btn btn-warning wui-save" data-dismiss="modal" onClick={fileUpload}>Donate</button>

</div>


 </div>


</div>
    );
}
export default ImageUpload;