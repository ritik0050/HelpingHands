import { CreateAdmin } from '../Apicontroller';
import { AddAdmin } from '../Apicontroller';
import { RemoveAdmin } from '../Apicontroller';
import { useEffect, useState } from 'react';
import { IoMdAdd } from "react-icons/io";
import { TiUserDelete } from "react-icons/ti";
import { FcApproval } from "react-icons/fc";
import { useHistory } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
function AdminCreateAdmin(){
    const history = new useHistory();
    let counter = 1;
    let c=1;
    const[data,updateData]=useState([]);
    const [abc, upabc] = useState(true);
    const[isClicked,updateisClicked]=useState("");
    const[cls,upcls]=useState("img-aca-i")
    const username = localStorage.getItem("loginResponse");
    const loginres = JSON.parse(username);
    useEffect(()=>
    {
        CreateAdmin(loginres.userID, loginres.token).then((response) => {
            console.log(response);
            updateData(response.data);
            upabc(false);
        })
    },[])

    function create(userid, name){
        updateisClicked("freeze");
        upcls("img-aca");
        AddAdmin(loginres.userID,userid,loginres.token).then((response) => {
            console.log(response);
            if(response.statusCode==200)
            {
                updatemsgs1(name + " is now admin");
          updateshowmsg1(true);
            }
            else 
            {
                updatemsgs1("Some error occured. Please try again!");
                updateshowmsg1(true);
            }
            updateisClicked("");
            upcls("img-aca-i");
            rerun();
        });
    }

    function remove(userid, name){
        updateisClicked("freeze");
        upcls("img-aca");
        RemoveAdmin(loginres.userID,userid,loginres.token).then((response) => {
            console.log(response);
            if(response.statusCode==200)
            {
               
                updatemsgs1(name + " is no longer admin");
          updateshowmsg1(true);
            }
            else 
            {
                updatemsgs1("Some error occured. Please try again!");
          updateshowmsg1(true);
            }
            updateisClicked("");
            upcls("img-aca-i");
            rerun();
        });
    }
    function rerun()
    {
        CreateAdmin(loginres.userID, loginres.token).then((response) => {
            console.log(response);
            updateData(response.data);
            upabc(false);
        }) 
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
    function count(){
        counter = counter + 1;
        return(
            <>counter</>
        );
    }

    function adminStatus(admin_status){
        console.log(admin_status);
        if( admin_status ){
            return(
                <>
                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Admin</Tooltip>}>
                        <FcApproval className="aca-icn"></FcApproval>
                    </OverlayTrigger>
                </>
            );
        } else{
            return(
                <h6></h6>
            );
        }
    }

    return (
        <>
         { abc ? <center><img src="../../assests/search.gif" className="loadersearch" width="150px" height="150px"></img></center> :
<>
     <div className="aca-tbl table-inbox"  id={isClicked}>
            <Table responsive="md">
                <tbody>
                    <tr class="inbx-pos">
                        <th width="50px"></th>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th></th>
                        <th>Phone</th>
                        <th></th>
                 
                    </tr>
                    { 
                    data.map((item)=>(
                    <tr class="aca-tr">
                        <td>{adminStatus(item.adminStatus)}</td>
                        <td>{c++}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td class="approved">{item.adminStatus ? <>ADMIN</>:<></>}</td>
                        <td>{item.phone}</td>
                        {   item.adminStatus == 0 ?
                        <td width="50px">
                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Create admin</Tooltip>}>
                                <IoMdAdd className="aca-icn" onClick={() => create(item.userID,item.name)}></IoMdAdd>
                            </OverlayTrigger>
                        </td>
                        :
                        <td width="50px">
                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Remove admin</Tooltip>}>
                                <TiUserDelete className="aca-icn"  onClick={() => remove(item.userID,item.name)}></TiUserDelete>
                            </OverlayTrigger>
                        </td>
}
                    </tr>))
             
                    }
                </tbody>
            </Table>
                {/* ======================================================== */}
        <Modal show={showmsg1} onHide={close2}>
     <Modal.Body class="msg-mdl-bdy">
     <div id="colrr-2" class="mbb-mdl">{msgs1}</div>  
    
     <div class="btn-msg-mdl"><Button variant="warning" class="btn btn-warning" onClick={msgbtn1}>
         OK
    </Button>
    </div>
     </Modal.Body>
      </Modal>
   
        </div>
   <div class={cls}><img src="../../assests/details.gif" width="150px" height="150px"/></div>
   </>
        }
    
        </>
    );                                                                                                                                                                                                                                                                                                                                                                              
}
export default AdminCreateAdmin;