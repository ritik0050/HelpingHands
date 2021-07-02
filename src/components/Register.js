import './../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Modal from 'react-modal';
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import {SignUp} from "./../Apicontroller";
function Register() {
    const [show, updateshow] = useState(true);
    function close() {
        updateshow(false);
    }
    const[email,updateemail]=useState("");
   
    const[pass,updatepass]=useState("");
    const[name,updatename]=useState("");
    const[phn,updatephn]=useState("");
    const[res,updateres]=useState("");
    
    function setemail(event){
   updateemail(event.target.value);
    }
    function setpassword(event)
    {
        updatepass(event.target.value);
    }
  function setname(event)
  {
      updatename(event.target.value);
  }
  function setphn(event)
  {
      updatephn(event.target.value);
  }
    function fetchData(){

       SignUp(email,name,pass,phn).then((response)=>{
           console.log("response");
        console.log(response);
        if(response.statusCode==="202")
        {
            alert(response.message);
updateres(response.message);
        }
        
          });
    
 
    
    }
    return (


        <Modal isOpen={show} className="abc">
            <div class="modal-header hd">
                <h3 class="modal-title">Register</h3>
                <Link to="/">
                    <button type="button" class="btn-close q" data-bs-dismiss="modal" aria-label="Close" onClick={close}></button>
                </Link>
            </div>
            <div class="modal-body body">
            <br></br>
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={setemail}/>
                    <label for="floatingInput">Email address</label>
                </div>
                
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingPassword" placeholder="Password" onChange={setname}/>
                    <label for="floatingPassword">Name</label>
                </div>
                
               
                <div class="form-floating mb-3">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" onChange={setpassword}/>
                    <label for="floatingPassword">Password</label>
                </div>
                
            
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingPassword" placeholder="Password" onChange={setphn}/>
                    <label for="floatingPassword">Phone</label>
                </div>
                <br></br>
            
                {/* <center>{res}</center> */}
            </div>
            <div class="modal-footer ft">
         
        <button type="button" class="btn btn-warning bttn" data-dismiss="modal" onClick={fetchData}>Register</button>
      </div>

        </Modal>

    );
}

export default Register;