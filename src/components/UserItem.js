import { GetUserItem } from "../Apicontroller";
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {link} from './../serverurl'
import Row from 'react-bootstrap/Row'
import Col from "react-bootstrap/Col"
import { grey } from "@material-ui/core/colors";
import { RemoveItem } from "../Apicontroller";
function UserItem()
{
    let m=link();
    const[data,updatedata]=useState([]);
    const username = localStorage.getItem("loginResponse");
    const loginres = JSON.parse(username);
    useEffect(()=>
    {
        GetUserItem(loginres.userID, loginres.token).then((response) => {
            console.log(response);
            updatedata(response.data);
            
   })
    },[])
    function approvalStatus(as,es)
    {
        console.log(as+"bhaisaab"+es);
        if(as==0 && es==0)
        {
            
            return (<>Status : <span class="pending">Pending</span></>)
           
        }
        else 
        if(as==0 && es==1)
        {
            
            return (<>Status :  <span class="rejected">Rejected</span></>)
           
        }
        else 
        if(as==1 && es==0)
        {
            
            return (<>Status : <span class="approved">Approved</span></>)
           
        }
        else 
        if(as==1 && es==1)
        {
            
            return (<>Status : <span class="donated">Donated</span></>)
           
        }
    }
    function Removeitemm(itemID)
    {
        RemoveItem(itemID,loginres.userID,loginres.token).then((response) => {
            console.log(response);
            if(response.statusCode==200)
            {
                alert(itemID+" Removed");
            }
            else 
            {
                alert("try again");
            }
   })
    }
    return(
        <div class="colr-uit">
            <h2 className="heading"><font face="Times New Roman">My Items</font></h2>
            <br></br><br></br>
             <Row>
            {
               
            data.map((item)=>
            (
                <Col md={3}>
                <div class="marb">
                    
                <Card  class="crd" style={{ width: '18rem' , height : '450px'}}>
                <Card.Img style={{ width: '18rem' , height : '250px'}} variant="top" src={m+"/" + item.square} />
                <Card.Body>
                <center>
                  <Card.Title class="itemname">{item.itemName}</Card.Title>
                  <Card.Title class="itemdesc"><span>{item.itemDesc}</span></Card.Title>
                 <Card.Title class="status">{approvalStatus(item.aprrovedStatus,item.expireStatus)}</Card.Title>
                  
        

                  <Button variant="outline-warning" onClick={() => Removeitemm(item.itemID)} style={{ width: '9rem'}}>Remove</Button>
                  </center>
                </Card.Body>
              </Card>
              </div>
              </Col>
            ))
     }
     </Row>
        </div>
    )
}
export default UserItem;