import './../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../global.css'
import React, { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import {useHistory} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form  from 'react-bootstrap/Form';
import { LoginPass, MailLogin, VerifyOtp, SignUp } from './../Apicontroller';

function Header() {
  const [show, updateshow] = useState("a1");
  const [show1, updateshow1] = useState("a2");
  const [lgn, updatelgn] = useState(false);
  const [lgnlm, updatelgnlm] = useState(false);
  const [sgnup, updatesgnup] = useState(false);
  const history=new useHistory();
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

  }

  const [email, updateemail] = useState("");

  const [pass, updatepass] = useState("");


  function setemail(event) {
    updateemail(event.target.value);
  }
  function setpassword(event) {
    updatepass(event.target.value);
  }

  function fetchData() {
    console.log("aagya");
    console.log(email+" "+pass)
    LoginPass(email, pass).then((response) => {
      console.log("response");
      console.log(response);
      if (response.statusCode === "202") {
        alert(response.message);
        updateres(response.message);
      }
      if (response.statusCode === "200") {

        updatelgn(false);
        updateshow("a2");
        updateshow1("a1");
        const loginResponse = JSON.stringify(response.data);
      localStorage.setItem("loginResponse",loginResponse);
      if(response.data.adminStatus===1)
      {
        history.push("/admin/sidebar");
      }
      }

    });
    // updateres(Abc(email,pass));

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
  function sendotp() {

    // MailLogin(emailLm).then((response)=>{
    //     console.log("response");
    //  console.log(response);
    //  if(response.statusCode=="200")
    //  {
    updatewait(false);
    updatecname("a2");
    //  }
    // });
  }
  function verifyotp() {
    VerifyOtp(emailLm, otp).then((response) => {
      console.log("response");
      console.log(response);
    });

  }
  const [emailsu, updateemailsu] = useState("");

  const [passsu, updatepasssu] = useState("");
  const [name, updatename] = useState("");
  const [phn, updatephn] = useState("");
  const [res, updateres] = useState("");

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
      console.log(emailsu+" "+name); 
    SignUp(emailsu, name, passsu, phn).then((response) => {
      console.log("response");
      console.log(response);
      if (response.statusCode === "202") {
        alert(response.message);
        updateres(response.message);
      }

    });
  }
  function openDashboard()
  {
  history.push("/user/dashboardcard")
  }
  function openHome()
  {
    history.push("/user/dashboard");
  }

  return (
    <div className="fixed-header">
   <Navbar fixed="top" />
   <Navbar collapseOnSelect className="zw" expand="lg" bg="dark" variant="dark">
 
  <Navbar.Text><span className="fonts">Helping</span><span className="fonts jkl">Hands</span></Navbar.Text>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  
  <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
   
    <Nav>

      <Nav.Link className={show1}  onClick={modalOpensup}><span className="nav-hvr">SIGNUP</span></Nav.Link>
      <Nav.Link className={show1}  onClick={modalOpen1}> <span className="nav-hvr">LOGIN</span></Nav.Link>
      <Nav.Link className={show} onClick={openHome}><span className="nav-hvr">HOME</span></Nav.Link>
      <Nav.Link className={show} onClick={openDashboard}><span className="nav-hvr">DASHBOARD</span></Nav.Link>
      <Nav.Link className={show}><span className="nav-hvr">LOG OUT</span> </Nav.Link>

    </Nav>
  </Navbar.Collapse>

</Navbar>
      {/* LOGIN MODAL */}
    
      <Modal show={lgn}  onHide={close} animation={false} >
   
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

  <Form.Group  controlId="formBasicPassword">
   
    <Form.Control type="password" placeholder="Password" onChange={setpassword} />
  </Form.Group>
</Form>       
         </Modal.Body>
        <Modal.Footer className="ft">
          <Button variant="secondary" onClick={modalOpenlm}>
            Forgot Password
          </Button>
          <Button variant="warning" onClick={fetchData}>
          Login
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
  <Form.Group  controlId="formBasicPassword">
   
    <Form.Control type="text" placeholder="OTP" onChange={setOtp} />
  </Form.Group>
  </div>
</Form>       
         </Modal.Body>
        <Modal.Footer className="ft">
          <Button variant="secondary" >
          Login via Phone
          </Button>
          <div className={cname}>
          <Button variant="secondary" onClick={verifyotp}>
       Verify Otp
          </Button>
          </div>
          <Button variant="warning" onClick={sendotp}>
      Send Otp
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
  <Form.Group  controlId="formBasicEmail">
    <Form.Label></Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={setemailsu} />
  </Form.Group>

  <Form.Group  controlId="formBasicPassword">
    <Form.Control type="text" placeholder="Enter Name" onChange={setname} />
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    
    <Form.Control type="password" placeholder="Enter Password" onChange={setpasswordsu} />
  
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
  
    <Form.Control type="text" placeholder="Enter Mobile No." onChange={setphn} />
  
  </Form.Group>
</Form>       
         </Modal.Body>
        <Modal.Footer className="ft">
         
          <Button variant="warning" onClick={fetchData1}>
          SignUp
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="weeq"></div>
    </div>
  )
}
export default Header;