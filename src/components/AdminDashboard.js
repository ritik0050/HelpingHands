import { useEffect, useState } from 'react';
import { IoIosStats } from "react-icons/io";
import { useHistory } from 'react-router-dom'
import { PendingReq, TotalRegisters, TotalDonors, TotalDonorsToday, TotalLocked, TotalRejected, TotalApproved, TotalActive } from "../Apicontroller";
function AdminDashboard() {
    const username = localStorage.getItem("loginResponse");
    const loginres = JSON.parse(username);
    const [pendmsg, uppending] = useState("");
    const [donmsg, updonors] = useState("");
    const [dontodaymsg, updonorstoday] = useState("");
    const [regmsg, upregister] = useState("");
    const [lockmsg, uplock] = useState("");
    const [rejmsg, uprej] = useState("");
    const [appmsg, upaprv] = useState("");
    const [actmsg, upactve] = useState("");
    const [pendingloader, updatependingloader] = useState(true);
    const [donorloader, updatedonorloader] = useState(true);
    const [dtloader, updatedtloader] = useState(true);
    const [userloader, updateuserloader] = useState(true);
    const [approveuser, updateapproveuser] = useState(true);
    const [rejectuser, updateruser] = useState(true);
    const [lockeduser, updateluser] = useState(true);
    const [activeuser, updateauser] = useState(true);
    const history = new useHistory();
    useEffect(() => {
        PendingReq(loginres.userID, loginres.token).then((response) => {
            if (response.statusCode == "200") {
                uppending(response.message);
                updatependingloader(false);
            }
        })
    }, [])
    useEffect(() => {
        TotalActive(loginres.userID, loginres.token).then((response) => {
            if (response.statusCode == "200") {
                upactve(response.message);
                updateauser(false);
            }
        })
    }, [])
    useEffect(() => {
        TotalRegisters(loginres.userID, loginres.token).then((response) => {
            if (response.statusCode == "200") {
                upregister(response.message);
                updateuserloader(false);
            }
        })
    }, [])
    useEffect(() => {
        TotalDonorsToday(loginres.userID, loginres.token).then((response) => {
            if (response.statusCode == "200") {
                updonorstoday(response.message);
                updatedtloader(false);
            }
        })
    }, [])
    useEffect(() => {
        TotalDonors(loginres.userID, loginres.token).then((response) => {
            if (response.statusCode == "200") {
                updonors(response.message);
                updatedonorloader(false);
            }
        })
    }, [])
    useEffect(() => {
        TotalLocked(loginres.userID, loginres.token).then((response) => {
            if (response.statusCode == "200") {
                uplock(response.message);
                updateluser(false);
            }
        })
    }, [])
    useEffect(() => {
        TotalApproved(loginres.userID, loginres.token).then((response) => {
            if (response.statusCode == "200") {
                upaprv(response.message);
                updateapproveuser(false);
            }
        })
    }, [])
    useEffect(() => {
        TotalRejected(loginres.userID, loginres.token).then((response) => {
            if (response.statusCode == "200") {
                uprej(response.message);
                updateruser(false);
            }
        })
    }, [])
    function openTab1() {
        history.push("inbox");
    }
    function openTab2() {
        history.push("userlist");
    }
    function openTab3() {
        history.push("lockuser");
    }
    return (
        <div class="admin-dash">
            <br></br>
            <div class="prnt-dash">

                <div class="stat-dash" onClick={openTab1}>
                    <span class="title-ad-span" id="colrr-1">TOTAL PENDING REQUESTS</span>
                    <br></br><br></br>
                    <div id="colrr-1" class="stat-icn"> <IoIosStats size="55px"></IoIosStats>
                        {pendingloader ? <img src="../../assests/pink-loader.gif" className="statss" width="50px" height="50px" /> :
                            <span id="colrr-1" class="statss">{pendmsg}</span>
                        }
                    </div>
                </div>
                <div class="stat-dash" onClick={openTab2}>
                    <span class="title-ad-span" id="colrr-2" >TOTAL USERS</span>
                    <br></br><br></br>

                    <div id="colrr-2" class="stat-icn"> <IoIosStats size="55px"></IoIosStats>

                        {userloader ? <img src="../../assests/orange-loader.gif" className="statss" width="50px" height="50px" /> :
                            <span id="colrr-2" class="statss">{regmsg}</span>
                        }
                    </div>

                </div>
                <div class="stat-dash">
                    <span class="title-ad-span" id="colrr-3">TOTAL DONATIONS TODAY</span>
                    <br></br><br></br>
                    <div id="colrr-3" class="stat-icn"> <IoIosStats size="55px"></IoIosStats>
                        {dtloader ? <img src="../../assests/blue-loader.gif" className="statss" width="50px" height="50px" /> :
                            <span id="colrr-3" class="statss">{dontodaymsg}</span>

                        }</div>
                </div>
                <div class="stat-dash">
                    <span class="title-ad-span" id="colrr-4">TOTAL DONATIONS</span>
                    <br></br><br></br>
                    <div id="colrr-4" class="stat-icn"> <IoIosStats size="55px"></IoIosStats>
                        {donorloader ? <img src="../../assests/yellow-loader.gif" className="statss" width="50px" height="50px" /> :
                            <span id="colrr-4" class="statss">{donmsg}</span>
                        }
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>            <div class="prnt-dash">

                <div class="stat-dash" onClick={openTab3}>
                    <span class="title-ad-span" id="colrr-5" >TOTAL LOCKED USERS</span>
                    <br></br><br></br>
                    <div id="colrr-5" class="stat-icn"> <IoIosStats size="55px"></IoIosStats>
                        {lockeduser ? <img src="../../assests/green-loader.gif" className="statss" width="50px" height="50px" /> :
                            <span id="colrr-5" class="statss">{lockmsg}</span>
                        }
                    </div>
                </div>

                <div class="stat-dash" onClick={openTab1}>
                    <span class="title-ad-span" id="colrr-6" >TOTAL APPROVED REQUESTS</span>
                    <br></br><br></br>

                    <div id="colrr-6" class="stat-icn"> <IoIosStats size="55px"></IoIosStats>

                        {approveuser ? <img src="../../assests/brown-loader.gif" className="statss" width="50px" height="50px" /> :
                            <span id="colrr-6" class="statss">{appmsg}</span>
                        }
                    </div>

                </div>
                <div class="stat-dash" onClick={openTab1}>
                    <span class="title-ad-span" id="colrr-7" >TOTAL REJECTED REQUESTS</span>
                    <br></br><br></br>
                    <div id="colrr-7" class="stat-icn"> <IoIosStats size="55px"></IoIosStats>
                        {rejectuser ? <img src="../../assests/purple-loader.gif" className="statss" width="50px" height="50px" /> :
                            <span id="colrr-7" class="statss">{rejmsg}</span>

                        }</div>
                </div>
                <div class="stat-dash" onClick={openTab2}>
                    <span class="title-ad-span" id="colrr-8" >TOTAL ACTIVE USERS</span>
                    <br></br><br></br>
                    <div id="colrr-8" class="stat-icn"> <IoIosStats size="55px"></IoIosStats>
                        {activeuser ? <img src="../../assests/purple-loader.gif" className="statss" width="50px" height="50px" /> :
                            <span id="colrr-8" class="statss">{actmsg}</span>

                        }</div>
                </div>

            </div>
        </div>
    )
}
export default AdminDashboard;