import './.././../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import React, { useEffect, useState } from "react";
import './../global.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FiUpload } from "react-icons/fi";
import { FaUserEdit } from "react-icons/fa";
import { BsInboxFill } from "react-icons/bs";
import { BsBagFill } from "react-icons/bs";
import {useHistory} from 'react-router-dom'
function DashboardCard(){
    const username = localStorage.getItem("loginResponse");
    const loginres = JSON.parse(username);
    console.log("username:  " + username);
    const history=new useHistory();
    function openInbox(){
        history.push("/user/dashboardcard/inbox")
    }
    function uploadImage()
    {
        history.push("/user/dashboardcard/imageupload");
    }
    function openupdateInfo()
    {
        history.push("/user/dashboardcard/updateinfo");
    }
    return(
        <div>
            <br></br><br></br><br></br>
            <h2 className="heading"><font face="Times New Roman">WELCOME {loginres.name}</font></h2>
            <br></br>
            <hr className="heading-hr"></hr>
            <br></br><br></br>
            <Container>
                <Row md={4}>
                    <Col><Card className="text-center card-hvr" >
                        <Card.Body>
                            <Card.Title className="mb-3">Inbox</Card.Title>
                                <BsInboxFill className="mb-4" size="6em" color="#ffc107"/>
                                <Card.Subtitle className="mb-5 text-muted">Check all your requests</Card.Subtitle>
                                <Card.Link onClick={openInbox}><span className="hvr-csr-p">Go to Inbox</span></Card.Link>
                        </Card.Body>
                    </Card></Col>
                    <Col><Card className="text-center card-hvr" >
                        <Card.Body>
                            <Card.Title className="mb-2">My Items</Card.Title>
                                <BsBagFill className="mb-3" size="6em" color="#ffc107"/>
                                <Card.Subtitle className="mb-5 text-muted">Check the status of all your items</Card.Subtitle>
                                <Card.Link href="#">See my items</Card.Link>
                        </Card.Body>
                    </Card></Col>
                    <Col><Card className="text-center card-hvr" >
                        <Card.Body>
                            <Card.Title className="mb-3">Upload</Card.Title>
                                <FiUpload className="mb-4" size="6em" color="#ffc107"/>
                                <Card.Subtitle className="mb-5 text-muted">Donate new item</Card.Subtitle>
                                <Card.Link onClick={uploadImage}>Upload</Card.Link>
                        </Card.Body>
                    </Card></Col>
                    <Col><Card className="text-center card-hvr" >
                        <Card.Body>
                            <Card.Title >Update My Information</Card.Title>
                                <FaUserEdit className="mb-3" size="6em" color="#ffc107"/>
                                <Card.Subtitle className="mb-5 text-muted">Update your information</Card.Subtitle>
                                <Card.Link onClick={openupdateInfo}>Update</Card.Link>
                        </Card.Body>
                    </Card></Col>
                </Row>
            </Container>
        </div>
    );
}
export default DashboardCard;