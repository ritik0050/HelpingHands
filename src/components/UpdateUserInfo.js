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
function UpdateUserInfo(){
    const history = new useHistory();
    const[name,updateName]=useState("");
    const[email,updateEmail]=useState("");
    const[phone,updatePhone]=useState("");
    const username = localStorage.getItem("loginResponse");
    const loginres = JSON.parse(username);
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
       UpdateInfo(loginres.userID,loginres.token,email,name,phone).then((response) => {
        console.log(response);
        if(response.statusCode==200)
        {
            alert("Updated Successfully");
        }
        else 
        {
            alert("try again");
        }
})
    }
    function updatePass(){
        history.push("/user/dashboardcard/updatePassinfo");
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
                            <input className="uui-input" type="text" placeholder="Enter your name" onChange={setName}></input>
                        </div>
                    </div>
                    <div className="uui-input-div uui-two">
                        <div class uui-i>
                            <AiFillMail className="ii" size="1.4em" color="#d9d9d9"></AiFillMail>
                        </div>
                        <div>
                            <h5>Email</h5>
                            <input className="uui-input" type="text" placeholder="Enter your email" onChange={setEmail}></input>
                        </div>
                    </div>
                    <div className="uui-input-div uui-two">
                        <div class uui-i>
                            <AiTwotonePhone className="ii" size="1.4em" color="#d9d9d9"></AiTwotonePhone>
                        </div>
                        <div>
                            <h5>Phone</h5>
                            <input className="uui-input" type="text" placeholder="Enter your phone" onChange={setPhone}></input>
                        </div>
                    </div>
                    <input type="button" value="UPDATE" className="uui-btn " onClick={Update}></input>
                    <input type="button" value="RESET PASSWORD" className="uui-btn " onClick={updatePass}></input>
                    </form>
                </div>
            </div>
            </Col>
            </Row>
        </div>
    );
}
export default UpdateUserInfo;