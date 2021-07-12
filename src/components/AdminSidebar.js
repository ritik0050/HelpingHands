import Navbar from 'react-bootstrap/Navbar';
import './../global.css'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import InboxIcon from '@material-ui/icons/Inbox';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import NoEncryptionIcon from '@material-ui/icons/NoEncryption';


function AdminSidebar() {
    const history = new useHistory();
    function openWindow1() {  history.push("/admin/sidebar/inbox");}
    function openWindow2() {  history.push("/admin/sidebar/dashboard");}
    function openWindow3() {  history.push("/admin/sidebar/createadmin");}
    function openWindow4() {  history.push("/admin/sidebar/users");}
    function openWindow5() {  history.push("/admin/sidebar/lockuser");}
    return (
        <div className="Sidebar">
            <ul className="list">
            
            <li className="rowss" onClick={openWindow1}>
                    <div className="icon"> <InboxIcon></InboxIcon></div>
                    <div className="title"> Inbox</div>
                </li>
                <li className="rowss" onClick={openWindow2}>
                    <div className="icon"> <DashboardIcon></DashboardIcon></div>
                    <div className="title"> Dashboard</div>
                </li>  
                  <li className="rowss" onClick={openWindow3}>
                    <div className="icon"><SupervisorAccountIcon></SupervisorAccountIcon></div>
                    <div className="title"> Create Admin</div>
                </li>
                <li className="rowss" onClick={openWindow4}>
                    <div className="icon"> <GroupAddIcon></GroupAddIcon></div>
                    <div className="title">List Of Users</div>
                </li>
                <li className="rowss"onClick={openWindow5}>
                    <div className="icon"> <NoEncryptionIcon></NoEncryptionIcon></div>
                    <div className="title">Lock User</div>
                </li>
            </ul>
        </div>
    )
}
export default AdminSidebar;