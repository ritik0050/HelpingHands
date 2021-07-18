import { TotalUsers } from '../Apicontroller';
import { LockUser } from '../Apicontroller';
import { UnlockUser } from '../Apicontroller';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { useHistory } from 'react-router-dom'
import Tooltip from 'react-bootstrap/Tooltip';
import { BsLockFill } from "react-icons/bs";
import { BsFillUnlockFill } from "react-icons/bs";
function AdminLockUser(){
    let c=1;
    const history = new useHistory();
    const[data,updateData]=useState([]);
    const username = localStorage.getItem("loginResponse");
    const loginres = JSON.parse(username);
    const [abc, upabc] = useState(true);
    useEffect(()=>
    {
        TotalUsers(loginres.userID, loginres.token).then((response) => {
            console.log(response);
            updateData(response.data);
           upabc(false);
        })
    },[])

    function lock(userid, name){
        LockUser(loginres.userID,userid,loginres.token).then((response) => {
            console.log(response);
            if(response.statusCode==200)
            {
                alert(name + " is locked");
            }
            else 
            {
                alert("Some error occured. Please try again!");
            }
            history.push("/admin/sidebar/dashboard");
            history.push("/admin/sidebar/lockuser");
        });
    }

    function unlock(userid, name){
        UnlockUser(loginres.userID,userid,loginres.token).then((response) => {
            console.log(response);
            if(response.statusCode==200)
            {
                alert(name + " is unlocked");
            }
            else 
            {
                alert("Some error occured. Please try again!");
            }
            history.push("/admin/sidebar/dashboard");
            history.push("/admin/sidebar/lockuser");
        });
    }

    return(
        <>
         { abc ? <center><img src="../../assests/search.gif" className="loadersearch" width="150px" height="150px"></img></center> :
        <div className="aca-tbl">
            <Table responsive="md">
                <tbody>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th></th>
                    </tr>
                    {data.map((item)=>(
                    <tr class="aca-tr">
                        <td>{c++}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td width="50px">
                            {
                                item.activeStatus ?
                                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Lock User</Tooltip>}>
                                    <BsFillUnlockFill onClick={() => lock(item.userID,item.name)} className="aca-icn"></BsFillUnlockFill>
                                </OverlayTrigger>
                                :
                                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Unlock User</Tooltip>}>
                                    <BsLockFill onClick={() => unlock(item.userID,item.name)} className="aca-icn"></BsLockFill>
                                </OverlayTrigger>
                            }
                        </td>
                    </tr>))}
                </tbody>
            </Table>
        </div>
        }
        </>
    );
}
export default AdminLockUser;