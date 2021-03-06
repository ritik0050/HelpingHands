import Navbar from 'react-bootstrap/Navbar';
import './../global.css'
import { useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react';
import InboxIcon from '@material-ui/icons/Inbox';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import NoEncryptionIcon from '@material-ui/icons/NoEncryption';
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { LogOutt } from './../Apicontroller'

function AdminSidebar() {
    const history = new useHistory();
    const [path, updatePath] = useState("");
    const username = localStorage.getItem("loginResponse");
    const loginres = JSON.parse(username);
    function openWindow1() {
        updatePath("inbox");
        console.log(window.location.pathname);
        history.push("/admin/sidebar/inbox");
    }
    function openWindow2() {
        updatePath("dashboard");
        console.log(window.location.pathname);
        history.push("/admin/sidebar/dashboard");
    }
    function openWindow3() {
        updatePath("createadmin");
        console.log(window.location.pathname);
        history.push("/admin/sidebar/createadmin");
    }
    function openWindow4() {
        updatePath("userlist");
        history.push("/admin/sidebar/userlist");
    }
    function openWindow5() {
        updatePath("lockuser");
        history.push("/admin/sidebar/lockuser");
    }
    function openWindow6() {
        LogOutt(loginres.userID).then((response) => {
            console.log("response");
            console.log(response);
            if (response.statusCode === "200") {
                history.push("/");

            }
        })
    }
    return (
        <div className="Sidebar">
            <ul className="list as-list">

                <li className="rowss" id={path == "inbox" ? "active" : ""} onClick={openWindow1}>
                    <div className="icon"> <InboxIcon></InboxIcon></div>
                    <div className="title"> Inbox</div>
                </li>
                <li className="rowss" id={path == "dashboard" ? "active" : ""} onClick={openWindow2}>
                    <div className="icon"> <DashboardIcon></DashboardIcon></div>
                    <div className="title"> Dashboard</div>
                </li>
                <li className="rowss" id={path == "createadmin" ? "active" : ""} onClick={openWindow3}>
                    <div className="icon"><SupervisorAccountIcon></SupervisorAccountIcon></div>
                    <div className="title"> Create Admin</div>
                </li>
                <li className="rowss" id={path == "userlist" ? "active" : ""} onClick={openWindow4}>
                    <div className="icon"> <GroupAddIcon></GroupAddIcon></div>
                    <div className="title">List Of Users</div>
                </li>
                <li className="rowss" id={path == "lockuser" ? "active" : ""} onClick={openWindow5}>
                    <div className="icon"> <NoEncryptionIcon></NoEncryptionIcon></div>
                    <div className="title">Lock User</div>
                </li>
                <li className="rowss" onClick={openWindow6}>
                    <div className="icon"> <ExitToAppIcon></ExitToAppIcon></div>
                    <div className="title">Log Out</div>
                </li>
            </ul>
        </div>
    )
}
export default AdminSidebar;