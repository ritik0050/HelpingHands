import { useEffect, useState } from 'react';
import { IoIosStats } from "react-icons/io";
import { PendingReq, TotalRegisters, TotalDonors, TotalDonorsToday } from "../Apicontroller";
function AdminDashboard() {
    const username = localStorage.getItem("loginResponse");
    const loginres = JSON.parse(username);
    const [pendmsg, uppending] = useState("");
    const [donmsg, updonors] = useState("");
    const [dontodaymsg, updonorstoday] = useState("");
    const [regmsg, upregister] = useState("");
    const [pendingloader, updatependingloader] = useState(true);
    const [donorloader, updatedonorloader] = useState(true);
    const [dtloader, updatedtloader] = useState(true);
    const [userloader, updateuserloader] = useState(true);

    useEffect(() => {
        PendingReq(loginres.userID, loginres.token).then((response) => {
            uppending(response.message);
            updatependingloader(false);
        })
    }, [])
    useEffect(() => {
        TotalRegisters(loginres.userID, loginres.token).then((response) => {
            upregister(response.message);
            updateuserloader(false);
        })
    }, [])
    useEffect(() => {
        TotalDonorsToday(loginres.userID, loginres.token).then((response) => {
            updonorstoday(response.message);
            updatedtloader(false);
        })
    }, [])
    useEffect(() => {
        TotalDonors(loginres.userID, loginres.token).then((response) => {
            updonors(response.message);
            updatedonorloader(false);
        })
    }, [])

    return (
        <div class="admin-dash">
            <br></br>
            <div class="prnt-dash">

                <div class="stat-dash">
                    <span class="title-ad-span" id="colrr-1">TOTAL PENDING REQUESTS</span>
                    <br></br><br></br>
                    <div id="colrr-1" class="stat-icn"> <IoIosStats size="55px"></IoIosStats>
                        {pendingloader ? <img src="../../assests/pink-loader.gif" className="statss" width="50px" height="50px" /> :
                            <span id="colrr-1" class="statss">{pendmsg}</span>
                        }
                    </div>
                </div>
                <div class="stat-dash">
                    <span class="title-ad-span" id="colrr-2">TOTAL USERS</span>
                    <br></br><br></br>

                    <div id="colrr-2" class="stat-icn"> <IoIosStats size="55px"></IoIosStats>

                        {userloader ? <img src="../../assests/green-loader.gif" className="statss" width="50px" height="50px" /> :
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
        </div>
    )
}
export default AdminDashboard;