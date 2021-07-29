import { useEffect, useState } from "react";
import {FetchItemData , RequestItemm , CheckRequested} from './../Apicontroller';
import {link} from './../serverurl';
import Row from 'react-bootstrap/Row'
import Col from "react-bootstrap/Col"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
function RequestPage()
{
    let m=link();
    const [abc, upabc] = useState(true);
    const[data1,updatedata]=useState("");
    const[dsbl,updatedsbl]=useState(false);
    const[req,updateRequested]=useState("Request Item");
    let itemid=localStorage.getItem("itemID");
    const[isLoading,upLoading]=useState(false);
    const username = localStorage.getItem("loginResponse");
    const loginres = JSON.parse(username);
    const[msgs1,updatemsgs1]=useState("");
    const[showmsg1,updateshowmsg1]=useState(false);
    useEffect(()=>
    {
        FetchItemData(itemid).then((response) => {
            console.log(response);
            upabc(false);
            updateimagesrc(m+"/"+response.data.square)
            updatedata(response.data);
    })
    },[])
    const[imagesrc,updateimagesrc]=useState(m+"/"+data1.square);
    function heroz()
    {
        updateimagesrc(m+"/"+data1.hero);
    }
    function full()
    {
        updateimagesrc(m+"/"+data1.full_width);
    }
    function portraitz()
    {
        updateimagesrc(m+"/"+data1.portrait);
    }
    function squarez()
    {
        updateimagesrc(m+"/"+data1.square);
    }
    function thumbnail()
    {
        updateimagesrc(m+"/"+data1.thumbnail);
    }
    function RequestItem()
    {
        upLoading(true);
        updatedsbl(true);
        RequestItemm(itemid,loginres.userID,loginres.token).then((response) => {
            console.log(response);
            if(response.statusCode=="200")
            {
           updatemsgs1(response.message);
            }
            else
            {
           updatemsgs1("Please Login to Continue.");
            }
            
           updateshowmsg1(true);
           upLoading(false);
           checkagain();
           updatedsbl(false);
        });
    }
    function checkagain()
    {
        CheckRequested(itemid,loginres.userID,loginres.token).then((response) => {
            console.log(response);
              if(response.message=="0")
              {
                  updateRequested("Request Item");
                  updatedsbl(false);
              }
             else  if(response.message=="1")
                  {
                    updateRequested("Requested");
                    updatedsbl(true);
                  }
        });  
    }
        useEffect(()=>
        {
            CheckRequested(itemid,loginres.userID,loginres.token).then((response) => {
                console.log(response);
                  if(response.message=="0")
                  {
                      updateRequested("Request Item");
                      updatedsbl(false);
                  }
                 else  if(response.message=="1")
                      {
                        updateRequested("Requested");
                        updatedsbl(true);
                      }
            });
        },[])
    
        function close2()
        {
          updateshowmsg1(false);
        }
        function msgbtn1(){
            close2();
          }
    
    return(
        <>
        {abc ?<div className="dash2"> <center><img src="../assests/loader.gif" className="loader" width="150px" height="150px"></img></center></div> :
        <div class="dash3">
         <Row>
         <Col md={2}>
             <center>   <div class="sml-div"> <img class="sml-img" src={m+"/"+data1.hero} onClick={heroz}></img>
             <img class="sml-img" src={m+"/"+data1.full_width} onClick={full}></img>
             <img class="sml-img" src={m+"/"+data1.portrait} onClick={portraitz}></img>
             <img class="sml-img" src={m+"/"+data1.square} onClick={squarez}></img>
             <img class="sml-img" src={m+"/"+data1.thumbnail} onClick={thumbnail}></img>
              </div></center>
                 </Col>
                 <Col md={4}>
               
                 
<img  class="zin" src={imagesrc}/>

</Col>
<Col md={6}>
    <div class="descc">
  
        <span class="rp-item">{data1.itemName}</span>
        <br>
        </br>
        <span class="pr-item">{data1.itemDesc}</span>
        <br></br>
        <span class="pr-item">Posted on : {data1.date}</span>

</div>

<button class="rp-btn btn btn-warning" disabled={dsbl} onClick={RequestItem}>
    { isLoading ? <>Requesting...</> : <>
    {req}
    </>
}</button>

</Col>
</Row>
           </div>     
    }
    {/* Modal */}
    <Modal show={showmsg1} onHide={close2}>
     <Modal.Body class="msg-mdl-bdy">
     <div id="colrr-2" class="mbb-mdl">{msgs1}</div>  
    
     <div class="btn-msg-mdl"><Button variant="warning" class="btn btn-warning" onClick={msgbtn1}>
         OK
    </Button>
    </div>
     </Modal.Body>
      </Modal>
    </>
    )
}
export default RequestPage;