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
function AdminCreateAdmin(){
    const history = new useHistory();
    let counter = 1;
    let c=1;
    const[data,updateData]=useState([]);
    const [abc, upabc] = useState(true);
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
        AddAdmin(loginres.userID,userid,loginres.token).then((response) => {
            console.log(response);
            if(response.statusCode==200)
            {
                alert(name + " is now admin");
            }
            else 
            {
                alert("Some error occured. Please try again!");
            }
            history.push("/admin/sidebar/dashboard");
            history.push("/admin/sidebar/createadmin");
        });
    }

    function remove(userid, name){
        RemoveAdmin(loginres.userID,userid,loginres.token).then((response) => {
            console.log(response);
            if(response.statusCode==200)
            {
                alert(name + " is no longer admin");
            }
            else 
            {
                alert("Some error occured. Please try again!");
            }
            history.push("/admin/sidebar/dashboard");
            history.push("/admin/sidebar/createadmin");
        });
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
        <div className="aca-tbl">
            <Table responsive="md">
                <tbody>
                    <tr>
                        <th width="50px"></th>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th></th>
                        <th></th>
                    </tr>
                    { 
                    data.map((item)=>(
                    <tr class="aca-tr">
                        <td>{adminStatus(item.adminStatus)}</td>
                        <td>{c++}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td width="50px">
                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Create admin</Tooltip>}>
                                <IoMdAdd className="aca-icn" onClick={() => create(item.userID,item.name)}></IoMdAdd>
                            </OverlayTrigger>
                        </td>
                        <td width="50px">
                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Remove admin</Tooltip>}>
                                <TiUserDelete className="aca-icn"  onClick={() => remove(item.userID,item.name)}></TiUserDelete>
                            </OverlayTrigger>
                        </td>
                    </tr>))
             
                    }
                </tbody>
            </Table>
        </div>
        }
        </>
    );                                                                                                                                                                                                                                                                                                                                                                              
}
export default AdminCreateAdmin;