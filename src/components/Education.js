import { useEffect, useState } from 'react';
import './../global.css'
function Education(prop) {
    console.log("dbhds");
    console.log(prop.response);


    return (
        <div>
            <ul>
            {
                    prop.response.data[0].getCategoryID.map((pro) => (
                        <li><img src={"http://splendid-wombat-44.loca.lt//" + pro.square} /></li>
                    ))
                }

            </ul>
        </div>
        // <div className="aqwa">
        // <div class="container">
        //   <div class="main_header row">
        //     <h1 class="main_header__title">Education</h1>
        //   </div>



        //   <div class="row pt-4">

        //     <div class="col-xl-3 col-lg-4 col-sm-6">
        //       <div class="box">

        //           <img src="http://wonderful-puma-14.loca.lt/Photos\2021-07-06\1\2\full-width.jpg" className="img" alt=""/>
        //           <div class="box__title">
        //             <h6>Nature</h6>
        //             <p>6 photos</p>
        //           </div>

        //       </div>
        //     </div>

        //     <div class="col-xl-3 col-lg-4 col-sm-6">
        //       <div class="box">

        //           <img src="https://picsum.photos/id/1077/200/300" alt="" className="img"/>
        //           <div class="box__title">
        //             <h6>Sport</h6>
        //             <p>3 photos</p>
        //           </div>

        //       </div>
        //     </div>

        //     <div class="col-xl-3 col-lg-4 col-sm-6">
        //       <div class="box">

        //           <img src="https://picsum.photos/id/1031/200/300" alt=""className="img"/>
        //           <div class="box__title">
        //             <h6>Architecture</h6>
        //             <p>2 photos</p>
        //           </div>

        //       </div>
        //     </div>

        //     <div class="col-xl-3 col-lg-4 col-sm-6">
        //       <div class="box">

        //           <img src="https://picsum.photos/id/3/200/300" alt=""className="img"/>
        //           <div class="box__title">
        //             <h6>Technology</h6>
        //             <p>7 photos</p>
        //           </div>

        //       </div>
        //     </div>

        //     <div class="col-xl-3 col-lg-4 col-sm-6">
        //       <div class="box">

        //           <img src="https://picsum.photos/id/1027/200/300" alt=""className="img"/>
        //           <div class="box__title">
        //             <h6>People</h6>
        //             <p>1 photos</p>
        //           </div>

        //       </div>
        //     </div>

        //     <div class="col-xl-3 col-lg-4 col-sm-6">
        //       <div class="box">

        //           <img src="https://picsum.photos/id/1080/200/300" alt=""className="img"/>
        //           <div class="box__title">
        //             <h6>Meal</h6>
        //             <p>8 photos</p>
        //           </div>

        //       </div>
        //     </div>

        //     <div class="col-xl-3 col-lg-4 col-sm-6">
        //       <div class="box">

        //           <img src="https://picsum.photos/id/111/200/300" alt=""className="img"/>
        //           <div class="box__title">
        //             <h6>Cars</h6>
        //             <p>12 photos</p>
        //           </div>

        //       </div>
        //     </div>



        //   </div>

        // </div></div>
    )
}
export default Education;