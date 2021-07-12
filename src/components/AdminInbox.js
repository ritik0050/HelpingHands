import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { AdminInboxx } from '../Apicontroller';
import { BsThreeDots } from "react-icons/bs";
import Dropdown from 'react-bootstrap/Dropdown';
import { AdminAccept } from '../Apicontroller';
import { AdminDecline } from '../Apicontroller';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Modal from 'react-bootstrap/Modal';
import { link } from '../serverurl';

function AdminInbox()
{
    let m=link();
    const[data,updateData]=useState([]);
    const[itemsss,updateitemss]=useState([]);
    

    const username = localStorage.getItem("loginResponse");
    const loginres = JSON.parse(username);
     console.log(data);
   
      const [show, setShow] = useState(false);
    
        const handleClose = () => setShow(false);
       
    

     function AcceptReq(itemID)
     {
        AdminAccept(itemID,loginres.userID,loginres.token).then((response) => {
            console.log(response);
            if(response.statusCode==200)
            {
                alert(itemID+" ACcepted");
            }
            else 
            {
                alert("try again");
            }
   })
     }
     function DeclineReq(itemID)
     {
        AdminDecline(itemID,loginres.userID,loginres.token).then((response) => {
            console.log(response);
            if(response.statusCode==200)
            {
                alert(itemID+" Declined");
            }
            else 
            {
                alert("try again");
            }
   })
     }
     function ItemDescription(itemss)
     {
        setShow(true);
 updateitemss(itemss);

     }
    useEffect(()=>
    {
        AdminInboxx(loginres.userID, loginres.token).then((response) => {
            console.log(response);
            updateData(response.data2);
   })
    },[])
  
    return(
        <div class="inbx-tbl ">
      <br></br>

    <Table responsive="md">
 
    <tbody>
        
      <tr class="inbx-tr">
        <th>Item Id</th>
        <th>Item Name</th>
        <th>Item Desc</th>
        <th>Date</th>
        <th>Actions</th>
      </tr>
     
      {
          data.map((item)=>(
          <tr class="inbx-tr">
              <td>{item.itemID}</td>
              <td>{item.itemName}</td>
              <td>{item.itemDesc}</td>
              <td>{item.date.substring(0,10)}</td>
              <td width="50px"  >
            <Dropdown>
  <Dropdown.Toggle variant="light" className="ndrptgl-bt bg-white border-0 p-0"  id="dropdown-basic">
  <BsThreeDots size="28px" color="black"/>
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item onClick={() => AcceptReq(item.itemID)}>Accept</Dropdown.Item>
    <Dropdown.Item onClick={() => DeclineReq(item.itemID)}>Decline</Dropdown.Item>
    <Dropdown.Item onClick={() => ItemDescription(item)}>Description</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
</td>
          </tr>
          ))
      }
      

    </tbody>

  </Table>
  
  {/* ===============Descrption MODAL================== */}
  <Modal show={show}  onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title><b>DESCRIPTION</b></Modal.Title>
          
    
        </Modal.Header>
        <Modal.Body><div className="slide-container"  id='slide' >
        <Slide >
          <div className="each-slide" >
            
              <span><center><img src={m+"/"+itemsss.square} width="300px" height="300px"></img></center></span>
            </div>
        
          <div className="each-slide">
            
              <span><center><img src={m+"/"+itemsss.full_width} width="300px" height="300px"></img></center></span>
            </div>
          
          <div className="each-slide">
        
              <span><center><img src={m+"/"+itemsss.hero} width="300px" height="300px"></img></center></span>
            </div>
         
        </Slide>
        <div id='slide1'>
          <span><b>DESCRIPTION:</b>  {itemsss.itemDesc}</span><br></br>
          <span><b>ITEM'S NAME:</b>   {itemsss.itemName}</span><br></br>
          <span><b>DATE:</b>  {itemsss.date}</span><br></br>
        </div>
        
      </div></Modal.Body>
  
      </Modal>
  </div>
    )
}
export default AdminInbox;