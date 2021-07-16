import { RiLockPasswordFill } from "react-icons/ri";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './../global.css';
import { UpdatePassInfo } from "../Apicontroller";
import { useState } from "react";
function PassReset(){
    const[newPass,updateNewPass]=useState("");
    const[oldPass,updateOldPass]=useState("");
    const username = localStorage.getItem("loginResponse");
    const loginres = JSON.parse(username);
    function setNewPass(event)
    {
        updateNewPass(event.target.value);
    }
    function setOldPass(event)
    {
        updateOldPass(event.target.value);
    }
    function Update()
    {
       UpdatePassInfo(loginres.userID,loginres.token,newPass,oldPass).then((response) => {
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
    return(
        <div>
            <Row>
                <Col md={1}></Col>
                <Col md={5}>
                    <div className="uui-img">
                        <img src="../../assests/pass.jpeg"/>
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
                            <RiLockPasswordFill size="1.4em" color="#d9d9d9"></RiLockPasswordFill>
                        </div>
                        <div>
                            <h5>Name</h5>
                            <input className="uui-input" type="password" placeholder="Enter your old password" onChange={setOldPass}></input>
                        </div>
                    </div>
                    <div className="uui-input-div uui-two">
                        <div class uui-i>
                            <RiLockPasswordFill className="ii" size="1.4em" color="#d9d9d9"></RiLockPasswordFill>
                        </div>
                        <div>
                            <h5>Email</h5>
                            <input className="uui-input" type="password" placeholder="Enter your new password" onChange={setNewPass}></input>
                        </div>
                    </div>
                    <input type="button" value="RESET PASSWORD" className="uui-btn " onClick={Update}></input>
                    </form>
                </div>
            </div>
            </Col>
            </Row>
        </div>
    );
}
export default PassReset;