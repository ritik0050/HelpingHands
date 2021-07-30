import { GetUserItem } from "../Apicontroller";
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { link } from './../serverurl'
import Row from 'react-bootstrap/Row'
import Col from "react-bootstrap/Col"
import { RemoveItem } from "../Apicontroller";
import Modal from 'react-bootstrap/Modal'
import { VerifyTokenn } from './../Apicontroller'
import { useHistory } from "react-router";
function UserItem() {
    let m = link();
    const [data, updatedata] = useState([]);

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
        GetUserItem(loginres.userID, loginres.token).then((response) => {
            console.log(response);
            updatedata(response.data);

        })
    }, [])
    function approvalStatus(as, es) {

        if (as == 0 && es == 0) {

            return (<>Status : <span class="pending">Pending</span></>)

        }
        else
            if (as == 0 && es == 1) {

                return (<>Status :  <span class="rejected">Rejected</span></>)

            }
            else
                if (as == 1 && es == 0) {

                    return (<>Status : <span class="approved">Approved</span></>)

                }
                else
                    if (as == 1 && es == 1) {

                        return (<>Status : <span class="donated">Donated</span></>)

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
    function Removeitemm(itemID, itemName) {

        RemoveItem(itemID, loginres.userID, loginres.token).then((response) => {
            console.log(response);
            if (response.statusCode == "200") {
                updatemsgs1(itemName + " removed.");
                updateshowmsg1(true);
            }
            else {
                updatemsgs1("try again");
                updateshowmsg1(true);
            }

            rerun();
        })
        function rerun() {
            GetUserItem(loginres.userID, loginres.token).then((response) => {
                console.log(response);
                updatedata(response.data);

            })
        }
    }
    return (

        <div class="colr-uit" >
            <h2 className="heading"><font face="Times New Roman">My Items</font></h2>
            <br></br><br></br>
            <Row>
                {

                    data.map((item) =>
                    (
                        <Col md={3}>
                            <div class="marb">

                                <Card class="crd" style={{ width: '18rem', height: '450px' }}>
                                    <Card.Img style={{ width: '18rem', height: '250px' }} variant="top" src={m + "/" + item.square} />
                                    <Card.Body>
                                        <center>
                                            <Card.Title class="itemname">{item.itemName}</Card.Title>
                                            <Card.Title class="itemdesc"><span>{item.itemDesc}</span></Card.Title>
                                            <Card.Title class="status">{approvalStatus(item.aprrovedStatus, item.expireStatus)}</Card.Title>
                                            <Button variant="outline-warning" onClick={() => Removeitemm(item.itemID, item.itemName)} style={{ width: '9rem' }}>Remove</Button>
                                        </center>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                    ))
                }
            </Row>
            {/* Modal */}
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

    )
}
export default UserItem;