import React from 'react';
import './../global.css';
import { useEffect } from "react";
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar';
import { useHistory } from 'react-router-dom'
import { VerifyTokenn } from './../Apicontroller'
function AdminHeader() {
    const history = new useHistory();
    useEffect(() => {

        let uname4 = localStorage.getItem("loginResponse");
        let lgnres7 = JSON.parse(uname4);
        VerifyTokenn(lgnres7.userID, lgnres7.token).then((response) => {
            console.log("response");
            console.log(response);
            if (response.statusCode === "200") {
                if (response.data === 0)
                    history.push("/user/dashboard");
            }
            else {
                history.push("/user/dashboard");
            }
        });
    }, [])
    return (
        <div>
            <div>
                <Navbar fixed="top" />

                <Navbar collapseOnSelect className="td" expand="lg" bg="dark" variant="dark">

                    <Navbar.Text><span className="fonts">Helping</span><span className="fonts jkl">Hands</span></Navbar.Text>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="justify-content-center">
                        <Navbar.Text><span className="admn-hdr">Admin</span></Navbar.Text>
                    </Navbar.Collapse>


                </Navbar>
                <div className="weeq"></div>







            </div>




        </div>
    )
}
export default AdminHeader;