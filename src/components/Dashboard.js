import { Link } from 'react-router-dom'
import { useState } from 'react';
import {useHistory} from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel';
import SimpleImageSlider from "react-simple-image-slider";
import {Imagepass} from './../Apicontroller'
import { useEffect } from 'react';
function Dashboard(prop)
{
    const[imgdta,updateimgdata]=useState([]);
    var x;
    const images = [
        { url: "assests/pic1.jpg" },
        { url: "assests/pic2.jpg" },
        { url: "assests/pic3.jpg" }
      
        
      ];
    const history=new useHistory();
    function getData1()
    {
        
     Imagepass().then((response)=>{
            console.log("response");
         console.log(response);
        //  console.log("response");
        //  console.log(response.data[0].getCategoryID);
             updateimgdata(response);
             prop.callBackData(response);
           history.push("/donate/education");
           
        });
}


       
//     Imagepass().then((response)=>{
//         console.log("response");
//      console.log(response);
//     //  console.log("response");
//     //  console.log(response.data[0].getCategoryID);
//          updateimgdata(response);
//          prop.callBackData(response);
     
  
// })
    return(
  <div className="dash">
      <br></br>
      {/* CROUSEL */}
      <center>
      <div className="imss">
      <SimpleImageSlider
        width={1490}
        height={504}
        images={images}
        slideDuration={0.1}
        showNavs={true}
        showBullets={true}
        navSize={30}
        
      />
    </div> 
    </center>  
      {/* PHOto */}
      <br></br><br></br><br></br>
      <div className="awwe">
     <div className="see">
    <div><h3 className="font" onClick={getData1}>Education
     </h3></div>
  
    <div>  
    </div>
    
     </div>
     <br></br><br>
     </br>
     <div className="images">
     <div class="box">
             
             <img src="assests/pic1.jpg" className="img imghv" alt=""/>
            <div className="overlay">
               <div>
               
                    Item Name: Book<br></br>
                    Item Desc: Good Book<br></br>
                </div>
            </div>
             </div>
             <div class="box">
             
             <img src="assests/pic2.jpg" className="img imghv" alt=""/>
             <div className="overlay">
               <div>
               
                    Item Name: Book<br></br>
                    Item Desc: Good Book<br></br>
                </div>
            </div>
             </div>  <div class="box">
             
             <img src="assests/pic3.jpg" className="img imghv" alt=""/>
             <div className="overlay">
               <div>
               
                    Item Name: Book<br></br>
                    Item Desc: Good Book<br></br>
                </div>
            </div>
             </div>  <div class="box">
             
             <img src="assests/pic4.jpg" className="img imghv" alt=""/>
             <div className="overlay">
               <div>
               
                    Item Name: Book<br></br>
                    Item Desc: Good Book<br></br>
                </div>
            </div>
             </div>
     </div>
     </div>
     <br></br>
     
     
  </div>
    )
}
export default Dashboard;