import './../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../global.css'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from "react";
import Modal from 'react-modal';
import { LoginPass, MailLogin, VerifyOtp, SignUp } from './../Apicontroller';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
function Header() {
  const [show, updateshow] = useState("a1");
  const [show1, updateshow1] = useState("a2");
  const [lgn, updatelgn] = useState(false);
  const [lgnlm, updatelgnlm] = useState(false);
  const [sgnup, updatesgnup] = useState(false);
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

    SignUp(emailsu, name, passsu, phn).then((response) => {
      console.log("response");
      console.log(response);
      if (response.statusCode === "202") {
        alert(response.message);
        updateres(response.message);
      }

    });
  }

  return (
    <div>
   
      <nav class="navbar navbar-expand-lg navbar-light zw">
        <div class="container-fluid">
          <span class="fonts">Helping Hands</span>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">

            </ul>
            <form class="d-flex">
              <div className={show1}>
                <button class="btn btn-primary btnrgs" onClick={modalOpensup}>SIGNUP</button>
                &nbsp;
                <span className="lgnbtn" onClick={modalOpen1}>LOGIN</span>
                &nbsp;
              </div>
              <div className={show}>
                <Link to="/home" style={{ textDecoration: 'none' }}>
                  <span className="lgnbtn">HOME</span>
                </Link>
                &nbsp;
                <Link to="/dashboard"  style={{ textDecoration: 'none' }}>
                <span className="lgnbtn">DASHBOARD</span>
                </Link>
                <Link to="/" style={{ textDecoration: 'none',  }}>
                  <ExitToAppIcon className="lgout" style={{ fontSize: 40, animation : 'none' }}></ExitToAppIcon>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </nav>
      {/* LOGIN MODAL */}
      <Modal isOpen={lgn} className="abc">
        <div class="modal-header hd">
          <h3 class="modal-title">Login</h3>

          <button type="button" class="btn-close q" data-bs-dismiss="modal" aria-label="Close" onClick={close}></button>

        </div>
        <div class="modal-body bdy">
          <br></br><br></br>
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={setemail} />
            <label for="floatingInput">Email address</label>
          </div>
          <br></br>
          <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" onChange={setpassword} />
            <label for="floatingPassword">Password</label>
          </div>
          <br></br>
          <center>{res}</center>
        </div>
        <div class="modal-footer ft">

          <button type="button" class="btn btn-outline-warning bttn" onClick={modalOpenlm}>Forgot password</button>

          <button type="button" class="btn btn-warning bttn" data-dismiss="modal" onClick={fetchData}>Login</button>
        </div>

      </Modal>
      {/* LOGINMail MODAL */}
      <Modal isOpen={lgnlm} className="abc">
        <div class="modal-header hd">
          <h3 class="modal-title">Login</h3>
          <button type="button" class="btn-close q" data-bs-dismiss="modal" aria-label="Close" onClick={close}></button>
        </div>
        <div class="modal-body bdy">
          <br></br><br></br>
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={setemailLm} />
            <label for="floatingInput">Email address</label>
          </div>
          <br></br>
          <div className={cname}>
            <div class="form-floating am">
              <input type="text" class="form-control" id="floatingPassword" placeholder="Otp" onChange={setOtp} />
              <label for="floatingPassword">Otp</label>
            </div>
          </div>
        </div>
        <div class="modal-footer ft">
          <button type="button" class="btn btn-outline-warning bttn">Login via Phone</button>
          <div className={cname}>
            <button type="button" className={"btn btn-outline-warning bttn"} onClick={verifyotp}>Verify Otp</button>
          </div>
          <button type="button" class="btn btn-warning bttn" data-dismiss="modal" onClick={sendotp}>Send Otp</button>
        </div>

      </Modal>

      {/* SignUP MODAL */}

      <Modal isOpen={sgnup} className="abc">
        <div class="modal-header hd">
          <h3 class="modal-title">Register</h3>

          <button type="button" class="btn-close q" data-bs-dismiss="modal" aria-label="Close" onClick={close}></button>

        </div>
        <div class="modal-body body">
          <br></br>
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={setemailsu} />
            <label for="floatingInput">Email address</label>
          </div>

          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingPassword" placeholder="Password" onChange={setname} />
            <label for="floatingPassword">Name</label>
          </div>


          <div class="form-floating mb-3">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" onChange={setpasswordsu} />
            <label for="floatingPassword">Password</label>
          </div>


          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingPassword" placeholder="Password" onChange={setphn} />
            <label for="floatingPassword">Phone</label>
          </div>
          <br></br>

          {/* <center>{res}</center> */}
        </div>
        <div class="modal-footer ft">

          <button type="button" class="btn btn-warning bttn" data-dismiss="modal" onClick={fetchData1}>Register</button>
        </div>

      </Modal>
      <div className="weeq"></div>
    </div>
  )
}
export default Header;