import { TotalUsers } from '../Apicontroller';
import { LockUser } from '../Apicontroller';
import { UnlockUser } from '../Apicontroller';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { useHistory } from 'react-router-dom'
import Tooltip from 'react-bootstrap/Tooltip';
import { BsLockFill } from "react-icons/bs";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { BsFillUnlockFill } from "react-icons/bs";
function AdminLockUser() {
    let c = 1;
    const history = new useHistory();
    const [data, updateData] = useState([]);
    const username = localStorage.getItem("loginResponse");
    const loginres = JSON.parse(username);
    const [abc, upabc] = useState(true);
    const [msgs1, updatemsgs1] = useState("");
    const [showmsg1, updateshowmsg1] = useState(false);
    const [isClicked, updateisClicked] = useState("");
    const [cls, upcls] = useState("img-aca-i")
    function close2() {
        updateshowmsg1(false);
    }
    function msgbtn1() {
        close2();
    }
    useEffect(() => {
        TotalUsers(loginres.userID, loginres.token).then((response) => {
            console.log(response);
            updateData(response.data);
            upabc(false);
        })
    }, [])



    function unlock(userid, name) {
        updateisClicked("freeze");
        upcls("img-aca");
        UnlockUser(loginres.userID, userid, loginres.token).then((response) => {
            console.log(response);
            if (response.statusCode == 200) {
                updatemsgs1(name + " is unlocked");
                updateshowmsg1(true);
            }
            else {
                updatemsgs1("Some error occured. Please try again!");
                updateshowmsg1(true);
            }
            updateisClicked("");
            upcls("img-aca-i");

            rerun();
        });
    }
    function rerun() {
        TotalUsers(loginres.userID, loginres.token).then((response) => {
            console.log(response);
            updateData(response.data);
            upabc(false);
        })
    }

    return (
        <>
            {abc ? <center><img src="../../assests/search.gif" className="loadersearch" width="150px" height="150px"></img></center> :
                <div>
                    <div className="aca-tbl inbox-table" id={isClicked}>
                        <Table responsive="md">
                            <tbody>
                                <tr class="inbx-pos">
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th></th>
                                </tr>
                                {data.map((item) => (
                                    <>
                                        {item.userEntity.activeStatus ? <div></div> :

                                            <tr class="aca-tr">
                                                <td>{c++}</td>
                                                <td>{item.userEntity.name}</td>
                                                <td>{item.userEntity.email}</td>
                                                <td>{item.userEntity.phone}</td>
                                                <td width="50px">

                                                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Unlock User</Tooltip>}>
                                                        <BsLockFill onClick={() => unlock(item.userEntity.userID, item.userEntity.name)} className="aca-icn"></BsLockFill>
                                                    </OverlayTrigger>



                                                </td>
                                            </tr>
                                        }
                                    </>

                                ))}
                            </tbody>
                        </Table>
                    </div>
                    <div class={cls}><img src="../../assests/details.gif" width="150px" height="150px" /></div>
                    {/* ========================================= */}
                    <Modal show={showmsg1} onHide={close2}>
                        <Modal.Body class="msg-mdl-bdy">
                            <div id="colrr-z" class="mbb-mdl">{msgs1}</div>

                            <div class="btn-msg-mdl"><Button variant="dark" class="btn btn-dark" onClick={msgbtn1}>
                                OK
                            </Button>
                            </div>
                        </Modal.Body>
                    </Modal>
                </div>
            }


        </>
    );
}
export default AdminLockUser;