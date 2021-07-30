import { useEffect, useState } from 'react';
import { TiTimes } from "react-icons/ti";
import { TiTick } from "react-icons/ti"
import Table from 'react-bootstrap/Table';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { UserInbox, AcceptUserReq, RejectUserReq, UserOutbox } from '../Apicontroller';
import { VerifyTokenn } from './../Apicontroller'
import { useHistory } from "react-router";
function Inbox() {
  const [msgs1, updatemsgs1] = useState("");
  const [showmsg1, updateshowmsg1] = useState(false);
  const [abc, upabc] = useState(true);
  const [data, updateData] = useState([]);
  const [data2, updateData2] = useState([]);
  const [isClicked, updateisClicked] = useState("");
  const [cls1, upcls1] = useState("img-aca-i")
  const username = localStorage.getItem("loginResponse");
  const loginres = JSON.parse(username);

  const history = new useHistory();
  useEffect(() => {

    let uname4 = localStorage.getItem("loginResponse");
    let lgnres7 = JSON.parse(uname4);
    VerifyTokenn(lgnres7.userID, lgnres7.token).then((response) => {
      console.log("response");
      console.log(response);
      if (response.statusCode === "200") {
      }
      else {
        history.push("/user/dashboard");
      }
    });
  }, [])
  useEffect(() => {
    UserInbox(loginres.userID, loginres.token).then((response) => {
      console.log(response);
      updateData(response.data);
      upabc(false);
    })
  }, [])
  useEffect(() => {
    UserOutbox(loginres.userID, loginres.token).then((response) => {
      console.log(response);
      updateData2(response.data);
      // upabc(false);
    })
  }, [])
  function close2() {
    updateshowmsg1(false);
  }
  function msgbtn1() {
    close2();
  }
  function Approval(donorID, itemID, name, itemName) {
    updateisClicked("freeze");
    upcls1("img-inbx");
    AcceptUserReq(loginres.userID, loginres.token, itemID, donorID).then((response) => {
      console.log(response);
      if (response.statusCode == "200") {
        updatemsgs1("You donated " + itemName + " to " + name + ".");
        updateshowmsg1(true);
      }
      else {
        updatemsgs1("Some error occured. Please try again!");
        updateshowmsg1(true);
      }

      updateisClicked("");
      upcls1("img-aca-i");
      rerun();
    })
  }
  function RejectReq(donorID, itemID, name, itemName) {
    updateisClicked("freeze");
    upcls1("img-inbx");
    RejectUserReq(loginres.userID, loginres.token, itemID, donorID).then((response) => {
      console.log(response);
      if (response.statusCode == "200") {
        updatemsgs1("You rejected " + name + "'s request for " + itemName + ".");
        updateshowmsg1(true);
      }
      else {
        updatemsgs1("Some error occured. Please try again!");
        updateshowmsg1(true);
      }
      updateisClicked("");
      upcls1("img-aca-i");
      rerun();
    })
  }
  function rerun() {
    UserInbox(loginres.userID, loginres.token).then((response) => {
      console.log(response);
      updateData(response.data);
      upabc(false);
    })
  }
  let c = 1;
  const [isInbox, updateisInbox] = useState(true);
  const [idinbx, updateidinbx] = useState("inbx-act1");
  const [idoutbx, updateidoutbx] = useState("inbx-act2");
  function openInbox() {
    updateisInbox(true);
    updateidinbx("inbx-act1");
    updateidoutbx("inbx-act2");

  }
  function openOutbox() {
    updateisInbox(false);
    updateidinbx("inbx-act2");
    updateidoutbx("inbx-act1");
  }
  return (
    <>
      <div class="inbx-tbl" id={isClicked}>
        <h2 className="heading"><font face="Times New Roman">{isInbox ? <>INBOX</> : <>OUTBOX</>}</font></h2>
        <br></br>
        <div class="inbx-btn-open" onClick={openInbox}><span class="txt-inbx" id={idinbx}>Inbox</span></div>
        <div class="inbx-btn-open" onClick={openOutbox}><span class="txt-inbx" id={idoutbx}>Outbox</span></div>
        {abc ? <center><img src="../../assests/search.gif" className="loadersearch" width="150px" height="150px"></img></center> :
          <div className="aca-tbl table-inbox">
            {isInbox ?
              <Table responsive="md">
                <tbody>
                  <tr class="inbx-pos">

                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Item Name</th>
                    <th>Date</th>
                    <th></th>
                    <th></th>

                  </tr>
                  {
                    data.map((item) => (
                      <tr class="aca-tr">
                        <td>{c++}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.item_name}</td>
                        <td>{item.date.substring(0, 10)}</td>

                        <td width="50px">
                          <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Approve Request</Tooltip>}>
                            <TiTick color="green" size="1.5em" className="aca-icn" onClick={() => Approval(item.request_id, item.item_id, item.name, item.item_name)}></TiTick>
                          </OverlayTrigger>
                        </td>

                        <td width="50px">
                          <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Reject Request</Tooltip>}>
                            <TiTimes color="red" size="1.5em" className="aca-icn" onClick={() => RejectReq(item.request_id, item.item_id, item.name, item.item_name)} ></TiTimes>
                          </OverlayTrigger>
                        </td>

                      </tr>
                    ))

                  }
                </tbody>
              </Table> :
              <Table responsive="md">
                <tbody>
                  <tr class="inbx-pos">

                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Item Name</th>
                    <th>Item Description</th>
                    <th>Date</th>


                  </tr>
                  {
                    data2.map((item) => (
                      <tr class="aca-tr">
                        <td>{c++}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.item_name}</td>
                        <td>{item.item_description}</td>
                        <td>{item.date.substring(0, 10)}</td>

                      </tr>
                    ))

                  }
                </tbody>
              </Table>
            }
            {/* ======================================================== */}
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
      </div>
      <div class={cls1}><img src="../../assests/details.gif" width="150px" height="150px" /></div>
    </>
  );
}
export default Inbox;