import './../global.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import SimpleImageSlider from "react-simple-image-slider";
import { Imagepass } from './../Apicontroller'
import { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from "react-bootstrap/Col"
function Dashboard(prop) {
    const [imgdta, updateimgdata] = useState([]);
    var x;

    const history = new useHistory();
    function getData1() {

        Imagepass().then((response) => {
            console.log("response");
            console.log(response);
            //  console.log("response");
            //  console.log(response.data[0].getCategoryID);
            updateimgdata(response);
            prop.callBackData(response);
            history.push("/user/donate/education");

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
    return (
        <div className="dash">

            {/* CROUSEL */}
            <center>
                <div >
                    <Carousel className="imss">
                        <Carousel.Item>
                            <img
                                className="d-block imghw w-100"
                                src="assests/pic1.jpg"
                                alt="First slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block imghw w-100"
                                src="assests/pic1.jpg"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block imghw w-100"
                                src="assests/pic3.jpg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block imghw w-100"
                                src="assests/pic4.jpg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </center>
            {/* PHOto */}
            
            <div  className="colr">
  <Row>
    <Col md={2}><div><h3 className="font" onClick={getData1}>Education
                        </h3></div></Col>
  </Row>
  <br></br>
  <Row>
  
      <Col md={3}>
      <div class="box">

<img src="assests/pic1.jpg" className="img imghv" alt="" />
<div>
    <span className="fntss"> Item Name: Book</span> <br></br>
    <span className="fntss"> Item Desc: Good Book</span><br></br>
</div>
</div>
      </Col>
      <Col md={3}>
      <div class="box">

<img src="assests/pic2.jpg" className="img imghv" alt="" />
<div>
    <span className="fntss"> Item Name: Book</span> <br></br>
    <span className="fntss"> Item Desc: Good Book</span><br></br>
</div>
</div>
      </Col>
      <Col md={3}>
      <div class="box">

<img src="assests/pic3.jpg" className="img imghv" alt="" />
<div>
    <span className="fntss"> Item Name: Book</span> <br></br>
    <span className="fntss"> Item Desc: Good Book</span><br></br>
</div>
</div>
      </Col>
      <Col md={3}>
      <div class="box">

<img src="assests/pic4.jpg" className="img imghv" alt="" />
<div>
    <span className="fntss"> Item Name: Book</span> <br></br>
    <span className="fntss"> Item Desc: Good Book</span><br></br>
</div>
</div>
      </Col>
    
  </Row>
</div>
            <br></br>
            {/* <div className="fd">
                <div className="see">
                    <div><h3 className="font" onClick={getData1}>Foods
                    </h3></div>
                </div>
                <br></br><br>
                </br>
                <div className="images">
                    <div class="box">

                        <img src="assests/pic1.jpg" className="img imghv" alt="" />
                        <div className="overlay">
                            <div>

                                Item Name: Book<br></br>
                                Item Desc: Good Book<br></br>
                            </div>
                        </div>
                    </div>
                    <div class="box">

                        <img src="assests/pic2.jpg" className="img imghv" alt="" />
                        <div className="overlay">
                            <div>

                                Item Name: Book<br></br>
                                Item Desc: Good Book<br></br>
                            </div>
                        </div>
                    </div>  <div class="box">

                        <img src="assests/pic3.jpg" className="img imghv" alt="" />
                        <div className="overlay">
                            <div>

                                Item Name: Book<br></br>
                                Item Desc: Good Book<br></br>
                            </div>
                        </div>
                    </div>  <div class="box">

                        <img src="assests/pic4.jpg" className="img imghv" alt="" />
                        <div className="overlay">
                            <div>

                                Item Name: Book<br></br>
                                Item Desc: Good Book<br></br>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <Link to="/admin/sidebar">
<button>Admin</button>
</Link>
        </div>
    )
}
export default Dashboard;