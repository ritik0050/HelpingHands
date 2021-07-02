import './../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Modal from 'react-modal';
import React, { useState } from "react";
import { MailLogin,VerifyOtp} from '../Apicontroller';
import { Link } from 'react-router-dom';

function LoginMail() {
    const [show, updateshow] = useState(true);
    function close() {
        updateshow(false);
    }
    const[email,updateemail]=useState("");
    const[otp,updateotp]=useState("");
    function setemail(event){
        updateemail(event.target.value);
         }
         function setOtp(event){
updateotp(event.target.value);
         }
    const [wait, updatewait] = useState(true);
    function sendotp() {
       
        MailLogin(email).then((response)=>{
            console.log("response");
         console.log(response);
         if(response.statusCode=="200")
         {
            updatewait(false); 
         }
        });
    }
    function verifyotp()
    {
        VerifyOtp(email,otp).then((response)=>{
            console.log("response");
         console.log(response);
        });
    }
    return (


        <Modal isOpen={show} className="abc">
            <div class="modal-header hd">
                <h3 class="modal-title">Login</h3>
                <Link to="/">
                    <button type="button" class="btn-close q" data-bs-dismiss="modal" aria-label="Close" onClick={close}></button>
                </Link>
            </div>
            <div class="modal-body bdy">
            <br></br><br></br>
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={setemail}/>
                    <label for="floatingInput">Email address</label>
                </div>
                <br></br>
                <div class="form-floating am">
                    <input type="text" class="form-control"  id="floatingPassword" placeholder="Otp" disabled={wait} onChange={setOtp}/>
                    <label for="floatingPassword">Otp</label>
                </div>
            </div>
            <div class="modal-footer ft">
        <button type="button" class="btn btn-outline-warning bttn">Login via Phone</button>
        <button type="button" class="btn btn-outline-warning bttn" disabled={wait} onClick={verifyotp}>Verify Otp</button>
        <button type="button" class="btn btn-warning bttn" data-dismiss="modal" onClick={sendotp}>Send Otp</button>
      </div>

        </Modal>
            );
        }
        
        export default LoginMail;
