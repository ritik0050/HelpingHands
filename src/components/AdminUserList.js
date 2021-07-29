import { TotalUsers } from '../Apicontroller';
import { LockUser } from '../Apicontroller';
import { UnlockUser , DonationsPerPerson } from '../Apicontroller';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { useHistory } from 'react-router-dom'
import Tooltip from 'react-bootstrap/Tooltip';
import { BsLockFill } from "react-icons/bs";
import { BsFillUnlockFill } from "react-icons/bs";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
function AdminUserList(){
    let c=1;
    const history = new useHistory();
    const[data,updateData]=useState([]);
    const[isClicked,updateisClicked]=useState("");
    const[cls,upcls]=useState("img-aca-i")
    const username = localStorage.getItem("loginResponse");
    const loginres = JSON.parse(username);
    const [abc, upabc] = useState(true);
    // const[qwe,upqwe]=useState([]);
    let qwe=[];
    useEffect(()=>
    {
        TotalUsers(loginres.userID, loginres.token).then((response) => {
            console.log(response);
            updateData(response.data);
           upabc(false);
        })
    },[])

    function lock(userid, name){
        
       updateisClicked("freeze");
       upcls("img-aca");
        LockUser(loginres.userID,userid,loginres.token).then((response) => {
            console.log(response);
            if(response.statusCode==200)
            {
               
                updatemsgs1(name + " is locked");
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
    const[msgs1,updatemsgs1]=useState("");
    const[showmsg1,updateshowmsg1]=useState(false);   
function close2()
        {
          updateshowmsg1(false);
        }
        function msgbtn1(){
            close2();
          }
    function unlock(userid, name){
        updateisClicked("freeze");
        upcls("img-aca");

        UnlockUser(loginres.userID,userid,loginres.token).then((response) => {
            console.log(response);
            if(response.statusCode==200)
            {
                updatemsgs1(name + " is unlocked");
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
    TotalUsers(loginres.userID, loginres.token).then((response) => {
        console.log(response);
        updateData(response.data);
       upabc(false);
    })
}   
 return(
        <>
         { abc ? <center><img src="../../assests/search.gif" className="loadersearch" width="150px" height="150px"></img></center> :
       <>
       <div className="aca-tbl inbox-table" id={isClicked}>
            <Table responsive="md">
                <tbody>
                    <tr class="inbx-pos">
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Total Donation</th>
                        <th>Total Approval</th>
                        <th>Total Rejected</th>
                        <th></th>
                    </tr>
                    {data.map((item)=>(
                    <tr class="aca-tr">
                        <td>{c++}</td>
                        <td>{item.userEntity.name}</td>
                        <td>{item.userEntity.email}</td>
                        <td>{item.totalDonations}</td>
                        <td>{item.acceptedReq}</td>
                        <td>{item.rejectedReq}</td>
                        <td width="50px">
                            {
                                item.userEntity.activeStatus ?
                                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Lock User</Tooltip>}>
                                    <BsFillUnlockFill onClick={() => lock(item.userEntity.userID,item.userEntity.name)} className="aca-icn"></BsFillUnlockFill>
                                </OverlayTrigger>
                                :
                                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Unlock User</Tooltip>}>
                                    <BsLockFill onClick={() => unlock(item.userEntity.userID,item.userEntity.name)} className="aca-icn"></BsLockFill>
                                </OverlayTrigger>
                            }
                        </td>
                    </tr>))}
                </tbody>
            </Table>
            {/* =================================================== */}
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
export default AdminUserList;