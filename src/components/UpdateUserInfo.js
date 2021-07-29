import { AiFillMail } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { AiTwotonePhone } from "react-icons/ai";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './../global.css';
import { UpdateInfo } from "../Apicontroller";
import { useState } from "react";
import { useHistory } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
function UpdateUserInfo(){
    const history = new useHistory();
  
    const[isLoading,updateisLoading]=useState("");
    const username = localStorage.getItem("loginResponse");
    const loginres = JSON.parse(username);
    const[name,updateName]=useState(loginres.name);
    const[email,updateEmail]=useState(loginres.email);
    const[phone,updatePhone]=useState(loginres.phone);
    function setEmail(event)
    {
        updateEmail(event.target.value);
    }
    function setName(event)
    {
        updateName(event.target.value);
    }
    function setPhone(event)
    {
        updatePhone(event.target.value);
    }
    function Update()
    {
        updateisLoading(true);
       UpdateInfo(loginres.userID,loginres.token,email,name,phone).then((response) => {
        console.log(response);
        if(response.statusCode==200)
        {
       
            updatemsgs1("Updated Successfully");
          updateshowmsg1(true);
        }
        else 
        {
            updatemsgs1("Try Again");
          updateshowmsg1(true);
        }
        updateisLoading(false);
})
    }
    function validateEmail(event)
{
  var a=event.target.value;
  if(a=="")
  {

  }
  else{
  var reg=/^(.+)@(.+)$/;
  var test=reg.test(a);
  if(!test)
  {
    updatemsgs1("Enter a valid email");
    updateshowmsg1(true);
  }
}
}
function validateNumber(event){
  var a=event.target.value;
  if(a=="")
  {

  }
  else{
  var reg=/[0-9]{10}/;
  var test=reg.test(a);
  if(!test)
  {
    updatemsgs1("Enter a valid phone number.");
    updateshowmsg1(true);
  }
}
}
    function updatePass(){
        history.push("/user/dashboardcard/updatePassinfo");
    }
    const[msgs1,updatemsgs1]=useState("");
    const[showmsg1,updateshowmsg1]=useState(false);   
function close2()
        {
          updateshowmsg1(false);
        }
        function msgbtn1(){
            close2();
          }
    return(
      
           <div>
            <Row>
                <Col md={1}></Col>
                <Col md={5}>
                    <div className="uui-img">
                        <img src="../../assests/img.jpeg"/>
                    </div>
                </Col>
                <Col md={3}>
                <div className="uui-container">
                <div className="uui-login-container">
                    <form>
                    <img className="uui-avatar" src="../../assests/avatar.jpeg"/>
                    <h2>Update your info</h2>
                    <div className="uui-input-div focus uui-one">
                        <div class uui-i>
                            <FaUserAlt size="1.4em" color="#d9d9d9"></FaUserAlt>
                        </div>
                        <div>
                            <h5>Name</h5>
                            <input className="uui-input" type="text" placeholder="Enter your name" value={name} onChange={setName} ></input>
                        </div>
                    </div>
                    <div className="uui-input-div uui-two">
                        <div class uui-i>
                            <AiFillMail className="ii" size="1.4em" color="#d9d9d9"></AiFillMail>
                        </div>
                        <div>
                            <h5>Email</h5>
                            <input className="uui-input" type="text" placeholder="Enter your email" value={email} onChange={setEmail} onBlur={validateEmail}></input>
                        </div>
                    </div>
                    <div className="uui-input-div uui-two">
                        <div class uui-i>
                            <AiTwotonePhone className="ii" size="1.4em" color="#d9d9d9"></AiTwotonePhone>
                        </div>
                        <div>
                            <h5>Phone</h5>
                            <input className="uui-input" type="text" placeholder="Enter your phone" value={phone} onChange={setPhone} onBlur={validateNumber}></input>
                        </div>
                    </div>
                    <input type="button" value={isLoading ? "Updating..." : "Update"} disabled={isLoading} className="uui-btn " onClick={Update}></input>
                    <input type="button" value="RESET PASSWORD" className="uui-btn " onClick={updatePass}></input>
                    </form>
                </div>
            </div>
            </Col>
            </Row>
            {/* ==================================== */}
            <Modal show={showmsg1} onHide={close2}>
     <Modal.Body class="msg-mdl-bdy">
     <div id="colrr-z" class="mbb-mdl">{msgs1}</div>  
    
     <div class="btn-msg-mdl"><Button variant="primary" class="btn btn-primary" onClick={msgbtn1}>
         Okay
    </Button>
    </div>
     </Modal.Body>
      </Modal>
        </div>
    );
}
export default UpdateUserInfo;