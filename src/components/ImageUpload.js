import { useState } from "react";
import { ImagePass } from '../Apicontroller'
import 'image-upload-react/dist/index.css'
function ImageUpload()
{
    const[a,selectedFile1]=useState("");
    const [b, selectedFile2] = useState("");
  const [c, selectedFile3] = useState("");
  const [d, selectedFile4] = useState("");
  const [e, selectedFile5] = useState("");
  const [f, itemdesc1] = useState("");
  const [g, itemname1] = useState("");
  function itemdesc(event) {
    itemdesc1(event.target.value);
  }
  function itemname(event) {
    itemname1(event.target.value);
  }

  function imageChange1(event) {

    selectedFile1(event.target.files[0]);
  }
  function imageChange2(event) {
    selectedFile2(event.target.files[0]);
  }
  function imageChange3(event) {

    selectedFile3(event.target.files[0]);

  }
  function imageChange4(event) {
    selectedFile4(event.target.files[0]);
  }
  function imageChange5(event) {
    selectedFile5(event.target.files[0]);
  }
  function fileUpload(event) {
    event.preventDefault();
   ImagePass(a,b,c,d,e,f,g).then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return(
    <div className="Image"> 
 <div class="row g-3">
  <div class="col">
    <input type="text" class="form-control" placeholder="item_name" aria-label="Item Name" onChange={itemdesc}/>
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="item_desc" aria-label="Item Description" onChange={itemname}/>
  </div>
 <div class="input-group mb-3">
 <ImageUpload
      handleImageSelect={imageChange1}
      imageSrc={a}
      setImageSrc={selectedFile1}
      style={{
        width: 700,
        height: 500,
        background: 'gold'
      }}
    />
</div>
<div class="input-group mb-3">
  <input type="file" name="fileThumbnail" class="form-control" id="inputGroupFile02" onChange={imageChange2}/>
</div>
<div class="input-group mb-3">
  <input type="file" name="filePortrait" class="form-control" id="inputGroupFile02" onChange={imageChange3}/>
</div>
<div class="input-group mb-3">
  <input type="file"  name="fileSquare" class="form-control" id="inputGroupFile02" onChange={imageChange4}/>
</div>
<div class="input-group mb-3">
  <input type="file" name="fileHero" class="form-control" id="inputGroupFile02" onChange={imageChange5}/>
</div>
<div>
<button type="button" class="btn btn-warning bttn" data-dismiss="modal" onClick={fileUpload}>Donate</button>
</div>


 </div>
</div>
    );
}
export default ImageUpload;