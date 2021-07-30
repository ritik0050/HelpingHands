import './../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../global.css'
import React, { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form';
import { LoginPass, MailLogin, VerifyOtp, SignUp, LogOutt, VerifyTokenn } from './../Apicontroller';
import NavDropdown from 'react-bootstrap/NavDropdown'



function Header() {

  const [show, updateshow] = useState("a1");
  const [show1, updateshow1] = useState("a2");
  const [lgn, updatelgn] = useState(false);
  const [lgnlm, updatelgnlm] = useState(false);
  const [sgnup, updatesgnup] = useState(false);
  const [showmsg, updateshowmsg] = useState(false);
  const [showmsg1, updateshowmsg1] = useState(false);
  const [lgnPh, updatelgnPh] = useState(false);
  const [ress, upress] = useState([]);
  const [ressgn, upressgn] = useState([]);


  const [email, updateemail] = useState("");
  const [pass, updatepass] = useState("");
  const [phone, updatephone] = useState("");
  const [otp2, updateotp2] = useState("");

  const [isLoading, setLoading] = useState(false);
  const [isLoading1, setLoading1] = useState(false);
  const [isLoadingLM, setLoadingLM] = useState(false);
  const [isLoadingVM, setLoadingVM] = useState(false);
  const history = new useHistory();
  let lgnres1 = {
    "userID": "unknown@gmail.com",
    "token": "",
    "name": "unknown"
  }
  const [lgnres, uplgnres] = useState(lgnres1);
  useEffect(() => {
    let uname2 = localStorage.getItem("loginResponse");
    if (uname2 == null) {
      const loginResponse = JSON.stringify(lgnres1);
      localStorage.setItem("loginResponse", loginResponse);
    }
    let uname = localStorage.getItem("loginResponse");
    let lgnres2 = JSON.parse(uname);
    uplgnres(lgnres2);
  }, [])


  function modalOpen1(event) {
    event.preventDefault();
    updatelgn(true);
  }
  function modalOpenlm(event) {
    event.preventDefault();
    updatelgnlm(true);
  }
  function modalOpensup(event) {
    event.preventDefault();
    updatesgnup(true);
  }
  function close() {
    updatelgn(false);
    updatelgnlm(false);
    updatesgnup(false);
    updatelgnPh(false);

    updateres("");
    updateresLM("");
    updateresLP("");
    updatecname("a1");
    upressgn("");
  }
  function close1() {
    updateshowmsg(false);
  }
  function close2() {
    updateshowmsg1(false);
  }
  const [msgs, updatemsgs] = useState("");
  const [msgs1, updatemsgs1] = useState("");


  useEffect(() => {
    console.log("dnsx");
    let uname4 = localStorage.getItem("loginResponse");
    let lgnres7 = JSON.parse(uname4);
    VerifyTokenn(lgnres7.userID, lgnres7.token).then((response) => {
      console.log("response");
      console.log(response);
      upress(response);
      if (response.statusCode === "200") {
        updateshow("a2");
        updateshow1("a1");
        if (response.data == 1) {
          history.push("/admin/sidebar/dashboard");
        }
      }
      else {
        updateshow("a1");
        updateshow1("a2");
      }
    });
  }, [])
  function setemail(event) {
    updateemail(event.target.value);
  }
  function setpassword(event) {
    updatepass(event.target.value);
  }

  function fetchData() {
    setLoading(true);
    LoginPass(email, pass).then((response) => {
      if (response.statusCode === "202") {
        updateres(response.message);
        setLoading(false);
      }
      if (response.statusCode === "200") {
        setLoading(false);
        updatelgn(false);
        updateshow("a2");
        updateshow1("a1");
        const loginResponse = JSON.stringify(response.data);
        localStorage.setItem("loginResponse", loginResponse);
        uplgnres(response.data);
        if (response.data.adminStatus === 1) {
          history.push("/admin/sidebar/dashboard");
        }
      }

    });


  }
  const [emailLm, updateemailLm] = useState("");
  const [otp, updateotp] = useState("");

  function setemailLm(event) {
    updateemailLm(event.target.value);
  }
  function setOtp(event) {
    updateotp(event.target.value);
  }
  const [wait, updatewait] = useState(true);
  const [cname, updatecname] = useState("a1");
  const [cname1, updatecname1] = useState("a1");
  const [resLM, updateresLM] = useState("");
  const [resLP, updateresLP] = useState("");


  function sendotp() {
    setLoadingLM(true);
    MailLogin(emailLm).then((response) => {
      console.log("response");
      console.log(response);
      updateresLM(response.message);
      setLoadingLM(false);
      if (response.statusCode == "200") {
        updatewait(false);
        updatecname("a2");
      }
    });
  }
  const [resOtp, updateresOtp] = useState("");
  function verifyotp() {
    updateresLM("");
    setLoadingVM(true);
    VerifyOtp(emailLm, otp).then((response) => {
      console.log("response");
      console.log(response);
      updateresOtp(response.message);
      setLoadingVM(false);

    });

  }
  const [emailsu, updateemailsu] = useState("");

  const [passsu, updatepasssu] = useState("");
  const [name, updatename] = useState("");
  const [phn, updatephn] = useState("");
  const [res, updateres] = useState("");
  const [sgnupBtn, updatesgnBtn] = useState(true);

  function setemailsu(event) {
    updateemailsu(event.target.value);
  }
  function setpasswordsu(event) {
    updatepasssu(event.target.value);
  }
  function setname(event) {
    updatename(event.target.value);
  }
  function setphn(event) {
    updatephn(event.target.value);
  }
  function fetchData1() {
    updatesgnBtn(true);
    setLoading1(true);
    SignUp(emailsu, name, passsu, phn).then((response) => {
      console.log("response");
      console.log(response);
      updatesgnBtn(false);
      if (response.statusCode === "202") {
        upressgn(response.message);
        setLoading1(false);
      }
      if (response.statusCode === "200") {
        setLoading1(false);
        updatesgnup(false);
        updatelgn(true);
        setLoading1(false);
        //Signed Up success ka modal
      }

    });
  }

  function openDashboard() {
    history.push("/user/dashboardcard")
  }
  function openHome() {
    history.push("/user/dashboard");
  }
  function logOut() {
    LogOutt(lgnres.userID).then((response) => {
      console.log("response");
      console.log(response);
      if (response.statusCode === "200") {
        history.push("/");
        updateshow("a1");
        updateshow1("a2");
      }

    });
  }
  useEffect(() => {
    if (emailsu == "" || passsu == "" || phn == "" || name == "") {
      updatesgnBtn(true);
    }
    else {
      updatesgnBtn(false);
    }
  })
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
  function msgbtn() {
    close1();
  }
  function msgbtn1() {
    close2();
  }
  return (
    <div className="fixed-header">
      <Navbar fixed="top" />
      <Navbar collapseOnSelect className="zw" expand="lg" bg="dark" variant="dark">

        <Navbar.Text><span className="fonts">Helping</span><span className="fonts jkl">Hands</span></Navbar.Text>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">

          <Nav>

            <Nav.Link className={show1} onClick={modalOpensup}><span className="nav-hvr">SIGNUP</span></Nav.Link>
            <Nav.Link className={show1} onClick={modalOpen1}> <span className="nav-hvr">LOGIN</span></Nav.Link>
            <Nav.Link className={show} onClick={openHome}><span className="nav-hvr">HOME</span></Nav.Link>
            <Nav.Link className={show} onClick={openDashboard}><span className="nav-hvr">DASHBOARD</span></Nav.Link>
            <span id="mt-1s" className={show}>

              <NavDropdown className={show} title={lgnres.name.substring(0, 1).toUpperCase()} id="basic-nav-dropdown" >

                <NavDropdown.Item className="nav-drpdwn1"><center>{lgnres.name}<br></br><span class="nav-drpdwn-spn">{lgnres.email}</span></center></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="drp-lg-out" onClick={logOut}><center>Log Out &nbsp;</center></NavDropdown.Item>
              </NavDropdown>
            </span>


          </Nav>
        </Navbar.Collapse>

      </Navbar>
      {/* LOGIN MODAL */}

      <Modal show={lgn} onHide={close} animation={false} >

        <Modal.Header closeButton className="hd">
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bdy">
          <br></br>

          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label></Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={setemail} />

            </Form.Group>

            < Form.Group controlId="formBasicPassword">

              <Form.Control type="password" placeholder="Password" onChange={setpassword} />

            </Form.Group>
            <center>< Form.Group> <span id="colrr-2">{res}</span>  </Form.Group></center>

          </Form>

        </Modal.Body>
        <Modal.Footer className="ft">
          <Button variant="secondary" onClick={modalOpenlm}>
            Forgot Password
          </Button>
          <Button variant="warning" disabled={isLoading} onClick={fetchData}>
            {isLoading ? 'Loading...' : 'Login'}
          </Button>
        </Modal.Footer>

      </Modal>

      {/* LOGINMail MODAL */}
      <Modal show={lgnlm} onHide={close}>

        <Modal.Header closeButton className="hd">
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bdy">
          <br></br>

          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label></Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={setemailLm} />

            </Form.Group>
            <div className={cname}>
              <Form.Group controlId="formBasicPassword">

                <Form.Control type="text" placeholder="OTP" onChange={setOtp} />
              </Form.Group>
            </div>
            <center><Form.Group><span id="colrr-2">{resLM}</span></Form.Group></center>
            <center><Form.Group><span id="colrr-2">{resOtp}</span></Form.Group></center>

          </Form>

        </Modal.Body>
        <Modal.Footer className="ft">
          <div className={cname}>
            <Button variant="secondary" disabled={isLoadingVM} onClick={verifyotp}>
              {isLoadingVM ? 'Verifying...' : 'Verify OTP'}
            </Button>
          </div>
          <Button variant="warning" disabled={isLoadingLM} onClick={sendotp}>
            {isLoadingLM ? 'Sending...' : 'Send OTP'}
          </Button>
        </Modal.Footer>

      </Modal>
      {/* SignUP MODAL */}

      <Modal show={sgnup} onHide={close}>
        <Modal.Header closeButton className="hd">
          <Modal.Title>SignUp</Modal.Title>
        </Modal.Header>
        <Modal.Body className="body">
          <br></br>

          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label></Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={setemailsu} onBlur={validateEmail} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control type="text" placeholder="Enter Name" onChange={setname} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">

              <Form.Control type="password" placeholder="Enter Password" onChange={setpasswordsu} onBlur={validatePassword} />

            </Form.Group>
            <Form.Group controlId="formBasicEmail">

              <Form.Control type="text" placeholder="Enter Mobile No." onChange={setphn} onBlur={validateNumber} />

            </Form.Group>
            <center>< Form.Group> <span id="colrr-2">{ressgn}</span>  </Form.Group></center>
          </Form>

        </Modal.Body>
        <Modal.Footer className="ft">

          <Button variant="warning" disabled={sgnupBtn} onClick={fetchData1}>
            {isLoading1 ? 'Loading...' : 'SignUp'}
          </Button>
        </Modal.Footer>
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
      {/* Modal for evrything */}
      {/* ========= */}
      <Modal show={showmsg1} onHide={close2}>
        <Modal.Body class="msg-mdl-bdy">
          <div id="colrr-z" class="mbb-mdl">{msgs1}</div>

          <div class="btn-msg-mdl"><Button variant="dark" class="btn btn-dark" onClick={msgbtn1}>
            Okay
          </Button>
          </div>
        </Modal.Body>
      </Modal>
      <div className="weeq"></div>
    </div>
  )
}
export default Header;