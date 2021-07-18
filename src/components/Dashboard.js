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
import { link } from './../serverurl';
import Loader from 'react-loaders'

function Dashboard() {
    let z = link();

    let loader = <Loader type="ball-clip-rotate-pulse" />
    const [imgdta, updateimgdata] = useState([]);
    const [abc, upabc] = useState(true);
    var x;

    const history = new useHistory();
    function getData1() {
            history.push("/user/donate/education");
    }
    function getData2() {
        history.push("/user/donate/furniture");
}
function getData3() {
    history.push("/user/donate/clothes");
}
    useEffect(() => {
        upabc(true);
        Imagepass().then((response) => {
            console.log("response");
            console.log(response);
            let imgJson = JSON.stringify(response);
            localStorage.setItem("imgsrc", imgJson);
            updateimgdata(response.data);
            if(response.statusCode==200){
            upabc(false);
            }
        });
    }, [])
    function imagedata1(m, n) {
        let i = m;
        let j = n;
        return (
            <>
                <div class="box">

                    <img src={z + "/" + imgdta[i].getCategoryID[j].square} className="img imghv" alt="" />
                    <div>
                        <span className="fntss"> Item Name: {imgdta[i].getCategoryID[j].itemName}</span> <br></br>
                        <span className="fntss"> Item Desc: {imgdta[i].getCategoryID[j].itemDesc}</span><br></br>
                    </div>
                </div>
            </>
        )
    }
    function imagedata(j) {
        let i = j;
        return (
            <>
                <Row>
                    <Col md={3}>
                        {imagedata1(i, 0)}
                    </Col>
                    <Col md={3}>
                        {imagedata1(i, 1)}
                    </Col>
                    <Col md={3}>
                        {imagedata1(i, 2)}
                    </Col>
                    <Col md={3}>
                        {imagedata1(i, 3)}
                    </Col>

                </Row>
            </>
        )
    }
    return (
        <div>
            {abc ?<div className="dash2"> <center><img src="../assests/loader.gif" className="loader" width="150px" height="150px"></img></center></div> : (

                <div className="dash">

                    {/* CROUSEL */}
                    <center>
                        <div >
                            <Carousel className="imss">
                                <Carousel.Item>
                                    <img
                                        className="d-block imghw w-100"
                                        src="../assests/cr_1.jpg"
                                        alt="First slide"
                                    />

                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block imghw w-100"
                                        src="../assests/cr_2.jpg"
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block imghw w-100"
                                        src="../assests/cr_1.jpg"
                                        alt="Third slide"
                                    />
                                </Carousel.Item>

                            </Carousel>
                        </div>
                    </center>
                    {/* PHOto */}

                    <div className="colr">
                        <Row>
                            <Col md={2}><div><h3 className="font" onClick={getData1}>{imgdta[0].categoryName}
                            </h3></div></Col>
                        </Row>
                        <br></br>
                        {imagedata(0)}
                    </div>

                    <div className="colf">
                        <Row>
                            <Col md={2}><div><h3 className="font" onClick={getData2}>{imgdta[1].categoryName}
                            </h3></div></Col>
                        </Row>
                        <br></br>
                        {imagedata(1)}
                    </div>
                    <div className="colr">
                        <Row>
                            <Col md={2}><div><h3 className="font" onClick={getData3}>{imgdta[2].categoryName}
                            </h3></div></Col>
                        </Row>
                        <br></br>
                        {imagedata(2)}
                    </div>

                </div>
            )
            }

        </div>
    )
}
export default Dashboard;