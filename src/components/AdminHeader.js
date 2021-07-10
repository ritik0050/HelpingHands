import React from 'react';
import './../global.css';
import { Sidebardata } from './Sidebardata'
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';

function AdminHeader() {
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