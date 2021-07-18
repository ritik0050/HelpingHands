import { useEffect, useState } from 'react';
import './../global.css'
import {link} from './../serverurl';
import Row from 'react-bootstrap/Row'
import Col from "react-bootstrap/Col"
import { PanToolSharp } from '@material-ui/icons';
function Furniture() {
    console.log("dbhds");
    let edu=localStorage.getItem("imgsrc");
    let edudata=JSON.parse(edu);
    let m=link();
   console.log(m);
    return (
        <div>
            <br></br>
            <h2 className="heading"><font face="Times New Roman">{edudata.data[1].categoryName}</font></h2>
          
           
           <div className="colr-edu">
          <Row>
            {
             

             edudata.data[1].getCategoryID.map((pro) => (
                     
                        <Col md={3}>
                        <div class="box">
                  
                  <img src={m+"/" + pro.square} className="img imghv imghvrr" alt="" />
                  <div className="btm-mrgn">
                      <span className="fntssclr"> Item Name: {pro.itemName}</span> <br></br>
                      <span className="fntssclr"> Item Desc: {pro.itemDesc}</span><br></br>
                  </div>
                  </div>
                
                        </Col>
                      
                    ))
                   
                }
</Row>
       </div>
        </div>
      
    )
}
export default Furniture;