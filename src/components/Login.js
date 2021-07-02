import './../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Modal from 'react-modal';
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import {LoginPass} from './../Apicontroller';
function Login() {
    const [show, updateshow] = useState(true);
    function close() {
        updateshow(false);
    }
    const[email,updateemail]=useState("");
   
    const[pass,updatepass]=useState("");
    const[res,updateres]=useState("");
    
    function setemail(event){
   updateemail(event.target.value);
    }
    function setpassword(event)
    {
        updatepass(event.target.value);
    }

    function fetchData(){

       LoginPass(email,pass).then((response)=>{
           console.log("response");
        console.log(response);
        if(response.statusCode==="202")
        {
            alert(response.message);
updateres(response.message);
        }
        
          });
    // updateres(Abc(email,pass));
 
    
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
                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" onChange={setpassword}/>
                    <label for="floatingPassword">Password</label>
                </div>
                <br></br>
                <center>{res}</center>
            </div>
            <div class="modal-footer ft">
                <Link to="/loginmail">
        <button type="button" class="btn btn-outline-warning bttn">Forgot password</button>
        </Link>
        <button type="button" class="btn btn-warning bttn" data-dismiss="modal" onClick={fetchData}>Login</button>
      </div>

        </Modal>

    );
}

export default Login;