import { RiLockPasswordFill } from "react-icons/ri";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './../global.css';
import { UpdatePassInfo } from "../Apicontroller";
import { useState } from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { VerifyTokenn } from './../Apicontroller'
import { useEffect } from "react";
import { useHistory } from "react-router";
function PassReset() {
    const [newPass, updateNewPass] = useState("");
    const [oldPass, updateOldPass] = useState("");
    const username = localStorage.getItem("loginResponse");
    const loginres = JSON.parse(username);
    const [isLoading, updateisLoading] = useState(false);
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
    function setNewPass(event) {
        updateNewPass(event.target.value);
    }
    function setOldPass(event) {
        updateOldPass(event.target.value);
    }
    function Update() {
        updateisLoading(true);
        UpdatePassInfo(loginres.userID, loginres.token, newPass, oldPass).then((response) => {
            console.log(response);
            if (response.statusCode == 200) {

                updatemsgs1(response.message);
                updateshowmsg1(true);
            }
            else {
                updatemsgs1(response.message);
                updateshowmsg1(true);
            }
            updateisLoading(false);
        })
    }
    const [msgs, updatemsgs] = useState("");
    const [showmsg, updateshowmsg] = useState(false);
    function close1() {
        updateshowmsg(false);
    }
    function msgbtn() {
        close1();
    }
    function validateEmail(event) {
        var a = event.target.value;
        if (a == "") {

        }
        else {
            var reg = /^(.+)@(.+)$/;
            var test = reg.test(a);
            if (!test) {
                updatemsgs1("Enter a valid email");
                updateshowmsg1(true);
            }
        }
    }
    function validateNumber(event) {
        var a = event.target.value;
        if (a == "") {

        }
        else {
            var reg = /[0-9]{10}/;
            var test = reg.test(a);
            if (!test) {
                updatemsgs1("Enter a valid phone number.");
                updateshowmsg1(true);
            }
        }
    }
    function validatePassword(event) {
        var a = event.target.value;
        if (a == "") {

        }
        else {
            var reg = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()]).{8,32}$/;
            var test = reg.test(a);
            if (!test) {
                updatemsgs("Password must contain at least one lowercase, one uppercase, one special character and one numeric digit with length 8 to 20.");
                updateshowmsg(true);
            }
        }
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
            <Row>
                <Col md={1}></Col>
                <Col md={5}>
                    <div className="uui-img">
                        <img src="../../assests/pass.jpeg" />
                    </div>
                </Col>
                <Col md={3}>
                    <div className="uui-container">
                        <div className="uui-login-container">
                            <form>
                                <img className="uui-avatar" src="../../assests/avatar.jpeg" />
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
                                        <input className="uui-input" type="password" placeholder="Enter your new password" onBlur={validatePassword} onChange={setNewPass}></input>
                                    </div>
                                </div>
                                <input type="button" value={isLoading ? "Updating..." : "Reset Password"} disabled={isLoading} className="uui-btn " onClick={Update}></input>
                            </form>
                        </div>
                    </div>
                </Col>
            </Row>
            {/* ============================================= */}
            <Modal show={showmsg1} onHide={close2}>
                <Modal.Body class="msg-mdl-bdy">
                    <div id="colrr-z" class="mbb-mdl">{msgs1}</div>

                    <div class="btn-msg-mdl"><Button variant="dark" class="btn btn-dark" onClick={msgbtn1}>
                        OK
                    </Button>
                    </div>
                </Modal.Body>
            </Modal>
            {/* Message Modal */}
            <Modal show={showmsg} onHide={close1}>
                <Modal.Body class="msg-bdy">
                    <div id="colrr-z" class="mbb">{msgs}</div>

                    <div class="btn-msg"><Button variant="dark" class="btn btn-dark" onClick={msgbtn}>
                        OK
                    </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}
export default PassReset;