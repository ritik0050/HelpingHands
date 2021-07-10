import React, { useState } from "react";
import axios from 'axios';

import {link} from './serverurl';
let abc=link();

export function LoginPass(email,pass)
{
    
     let z={
        "email":email,
        "password":pass
    }
   
    let req={
        method:"POST",
        body:JSON.stringify(z),
        headers:{"Content-Type":"application/json",
    "Bypass-Tunnel-Reminder":"abc"
    }
      }
return fetch(abc+"/login",req).then((data)=>
        
data.json()
      
    )
   
  
}
export function SignUp(email,name,pass,phn)
{
     let z={
        "email":email,
        "name":name,
        "password":pass,
        "phone":phn
    }
   
    let req={
        method:"POST",
        body:JSON.stringify(z),
        headers:{"Content-Type":"application/json",
    "Bypass-Tunnel-Reminder":"abc"
    }
      }
return fetch(abc+"/register",req).then((data)=>
        
data.json()
      

    )
   
  
}
export function VerifyOtp(email,otp)
{
     let z={
        "email":email,
        "otp":otp
    }
   
    let req={
        method:"POST",
        body:JSON.stringify(z),
        headers:{"Content-Type":"application/json",
    "Bypass-Tunnel-Reminder":"abc"
    }
      }
return fetch(abc+"/verifyMailOtp",req).then((data)=>
        
data.json()
      
    )
   
  
}
export function MailLogin(email)
{
     let z={
        "email":email,
    }
   
    let req={
        method:"POST",
        body:JSON.stringify(z),
        headers:{"Content-Type":"application/json",
    "Bypass-Tunnel-Reminder":"abc"
    }
      }
return fetch(abc+"/loginMail",req).then((data)=>
        
data.json()
      
    )
   
  
    
}

export function Imagepass()
{
    let z={
       
        "categoryName":"All",
        "categoryID":1
    }
    let req={
     method:"POST",
     body:JSON.stringify(z),
     headers:{"Content-Type":"application/json",
 "Bypass-Tunnel-Reminder":"abc"
 }

 }
 return fetch(abc+"/category",req).then((data)=>
     
      data.json()
       
     )
}
export function ImagePass(a,b,c,d,e,f,g) {
    let formData = new FormData();
    console.log("hiii");
    formData.append('fileFullWidth', a);
    formData.append('fileThumbnail', b);
    formData.append('filePortrait', c);
    formData.append('fileSquare', d);
    formData.append('fileHero', e);
    formData.append('userID', 1);
    formData.append('token', "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJwcml5YW5zaGlnYWhsYXdhdDExQGdtYWlsLmNvbSIsImlhdCI6MTYyNTQwNjY3MywiZXhwIjoxNjI1NDA3NjczfQ.QRD4Tjw1_7wgIAxEdnM3bgyNbqwd_oaxNFzAVYZMuH8");
    formData.append('category', 1);
    formData.append('item_desc', f);
    formData.append('item_name', g);
console.log(f);
console.log(formData)
    const config = {
           headers: {
        'Content-Type': 'multipart/form-data',
        "Bypass-Tunnel-Reminder":"abc",
        "Access-Control-Allow-Origin": "*",
        "Accept": "application/json",
        }
    }
  return axios.post(abc+"/uploadImage", formData,config)
  .then(response => {
    return response;
    console.log(response);
  })
  
  }