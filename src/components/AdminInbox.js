import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { AdminInboxx } from '../Apicontroller';
import { BiDotsVerticalRounded } from "react-icons/bi";
import Dropdown from 'react-bootstrap/Dropdown';
import { AdminAccept, } from '../Apicontroller';
import { AdminDecline } from '../Apicontroller';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import { link } from '../serverurl';
import Row from 'react-bootstrap/Row'
import Col from "react-bootstrap/Col"

function AdminInbox() {
  let c = 1;
  let m = link();
  const [data, updateData] = useState([]);
  const [itemsss, updateitemss] = useState([]);
  const [abc, upabc] = useState(true);
  const [isPending, updatePending] = useState(true);
  const [isRejected, updateRejected] = useState(false);
  const [isApproved, updateApproved] = useState(false);

  const [isClicked, updateisClicked] = useState("");
  const [cls, upcls] = useState("img-aca-i")
  const username = localStorage.getItem("loginResponse");
  const loginres = JSON.parse(username);


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [a, upa] = useState("we");


  function AcceptReq(itemID) {
    updateisClicked("freeze");
    upcls("img-aca");
    AdminAccept(itemID, loginres.userID, loginres.token).then((response) => {
      console.log(response);
      if (response.statusCode == 200) {
        updatemsgs1(response.data.itemName + " has been approved.");
        updateshowmsg1(true);
        best();
      }
      else {
        updatemsgs1("Some error occured. Please try again!");
        updateshowmsg1(true);
      }
      updateisClicked();
      upcls("img-aca-i");
    })
  }
  function DeclineReq(itemID) {
    updateisClicked("freeze");
    upcls("img-aca");
    AdminDecline(itemID, loginres.userID, loginres.token).then((response) => {
      console.log(response);
      if (response.statusCode == 200) {
        updatemsgs1(response.data.itemName + " has been rejected.");
        updateshowmsg1(true);
        best();
      }
      else {
        updatemsgs1("Some error occured. Please try again!");
        updateshowmsg1(true);
      }
      updateisClicked("");
      upcls("img-aca-i");
    })
  }
  function ItemDescription(itemss) {
    setShow(true);
    updateitemss(itemss);

  }
  function best() {
    AdminInboxx(loginres.userID, loginres.token).then((response) => {
      console.log(response);
      updateData(response.data2);
      upabc(false);
    })
  }
  useEffect(() => {
    AdminInboxx(loginres.userID, loginres.token).then((response) => {
      console.log(response);
      updateData(response.data2);
      upabc(false);
    })
  }, [])
  function setcat(event) {
    let a = event.target.value;
    if (a == "approve") {
      updatePending(false);
      updateRejected(false);
      updateApproved(true);
    }
    if (a == "reject") {
      updatePending(false);
      updateRejected(true);
      updateApproved(false);
    }
    if (a == "pending") {
      updatePending(true);
      updateRejected(false);
      updateApproved(false);
    }
  }
  const [msgs1, updatemsgs1] = useState("");
  const [showmsg1, updateshowmsg1] = useState(false);
  function close2() {
    updateshowmsg1(false);
  }
  function msgbtn1() {
    close2();
  }
  return (
    <>
      {abc ? <center><img src="../../assests/search.gif" className="loadersearch" width="150px" height="150px"></img></center> :
        <div>

          <div class="inbox-table" id={isClicked}>
            <Table responsive="md">

              <tbody>

                <tr class="inbx-pos">
                  <th>Item Id</th>
                  <th>Item Name</th>
                  <th>Item Desc</th>
                  <th><select class="form-control slct" onChange={setcat}>
                    <option selected value="pending">Pending</option>
                    <option value="approve">Approved</option>
                    <option value="reject">Rejected</option>
                  </select></th>
                  <th>Date</th>
                  <th></th>
                </tr>
                {isPending ? <>
                  {
                    data.map((item) => (
                      <>    {item.aprrovedStatus == 0 && item.expireStatus == 0 ?
                        <tr class="inbx-tr">
                          <td>{c++}</td>
                          <td>{item.itemName}</td>
                          <td>{item.itemDesc}</td>
                          <td><span class="pending">Pending</span></td>
                          <td>{item.date.substring(0, 10)}</td>
                          <td width="50px"  >
                            <Dropdown>
                              <Dropdown.Toggle variant="light" className="ndrptgl-bt bg-white border-0 p-0" id="dropdown-basic">
                                <BiDotsVerticalRounded size="28px" color="black" />
                              </Dropdown.Toggle>

                              <Dropdown.Menu>
                                <Dropdown.Item onClick={() => AcceptReq(item.itemID)}>Accept</Dropdown.Item>
                                <Dropdown.Item onClick={() => DeclineReq(item.itemID)}>Decline</Dropdown.Item>
                                <Dropdown.Item onClick={() => ItemDescription(item)}>Description</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </td>
                        </tr>
                        : <></>
                      }
                      </>))
                  }
                </>
                  : <>
                    {
                      isRejected ? <><div></div>
                        {
                          data.map((item) => (
                            <>    {item.aprrovedStatus == 0 && item.expireStatus == 1 ?
                              <tr class="inbx-tr">
                                <td>{c++}</td>
                                <td>{item.itemName}</td>
                                <td>{item.itemDesc}</td>
                                <td><span class="rejected">Rejected</span></td>
                                <td>{item.date.substring(0, 10)}</td>
                                <td width="50px"  >
                                  <Dropdown>
                                    <Dropdown.Toggle variant="light" className="ndrptgl-bt bg-white border-0 p-0" id="dropdown-basic">
                                      <BiDotsVerticalRounded size="28px" color="black" />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                      <Dropdown.Item onClick={() => AcceptReq(item.itemID)}>Accept</Dropdown.Item>
                                      <Dropdown.Item onClick={() => ItemDescription(item)}>Description</Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                </td>
                              </tr>
                              : <></>
                            }
                            </>))
                        }
                      </> : <>
                        {
                          data.map((item) => (
                            <>    {item.aprrovedStatus == 1 && item.expireStatus == 0 ?
                              <tr class="inbx-tr">
                                <td>{c++}</td>
                                <td>{item.itemName}</td>
                                <td>{item.itemDesc}</td>
                                <td><span class="approved">Approved</span></td>
                                <td>{item.date.substring(0, 10)}</td>
                                <td width="50px"  >
                                  <Dropdown>
                                    <Dropdown.Toggle variant="light" className="ndrptgl-bt bg-white border-0 p-0" id="dropdown-basic">
                                      <BiDotsVerticalRounded size="28px" color="black" />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>

                                      <Dropdown.Item onClick={() => DeclineReq(item.itemID)}>Decline</Dropdown.Item>
                                      <Dropdown.Item onClick={() => ItemDescription(item)}>Description</Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                </td>
                              </tr>
                              : <></>
                            }
                            </>))
                        }
                      </>
                    }
                  </>
                }

              </tbody>

            </Table>
          </div>
          <div class={cls}><img src="../../assests/details.gif" width="150px" height="150px" /></div>
          {/* ===============Descrption MODAL================== */}
          <Modal show={show} onHide={handleClose} >
            <Modal.Header closeButton className="hd">
              <Modal.Title ><b>DESCRIPTION</b></Modal.Title>


            </Modal.Header>
            <Modal.Body><div className="slide-container" id='slide' >
              <Slide >
                <div className="each-slide" >

                  <span><center><img src={m + "/" + itemsss.square} width="300px" height="300px"></img></center></span>
                </div>

                <div className="each-slide">

                  <span><center><img src={m + "/" + itemsss.full_width} width="300px" height="300px"></img></center></span>
                </div>

                <div className="each-slide">

                  <span><center><img src={m + "/" + itemsss.hero} width="300px" height="300px"></img></center></span>
                </div>

              </Slide>
              <br></br>
              <div id='slide1'>
                <Row>
                  <Col md="4"><b>DESCRIPTION:</b> </Col> <Col> {itemsss.itemDesc}</Col>
                </Row>
                <Row>
                  <Col md="4"><b>ITEM'S NAME:</b> </Col> <Col> {itemsss.itemName}</Col>
                </Row>
                <Row>
                  <Col md="4"><b>DATE:</b> </Col> <Col> {itemsss.date}</Col>
                </Row>

              </div>

            </div></Modal.Body>
          </Modal>
          {/* ==================================================== */}
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
  )
}
export default AdminInbox;