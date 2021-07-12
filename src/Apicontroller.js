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
export function ImagePass(a,b,c,d,e,f,g,userID,token) {
    let formData = new FormData();
    console.log("hiii");
    formData.append('fileFullWidth', a);
    formData.append('fileThumbnail', b);
    formData.append('filePortrait', c);
    formData.append('fileSquare', d);
    formData.append('fileHero', e);
    formData.append('userID', userID);
    formData.append('token',token);
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
  export function AdminInboxx(userID,token)
{
    let q={
       
        "userID":userID,
        "token":token
    }
    let req={
     method:"POST",
     body:JSON.stringify(q),
     headers:{"Content-Type":"application/json",
 "Bypass-Tunnel-Reminder":"abc"
 }

 }
 return fetch(abc+"/fetchItem",req).then((data)=>
     
      data.json()
       
     )
}
export function AdminAccept(itemID,userID,token)
{
    let q={
       "itemID":itemID,
        "userID":userID,
        "token":token
    }
    let req={
     method:"POST",
     body:JSON.stringify(q),
     headers:{"Content-Type":"application/json",
 "Bypass-Tunnel-Reminder":"abc"
 }

 }
 return fetch(abc+"/approveItem",req).then((data)=>
     
      data.json()
       
     )
}
export function AdminDecline(itemID,userID,token)
{
    let q={
       "itemID":itemID,
        "userID":userID,
        "token":token
    }
    let req={
     method:"POST",
     body:JSON.stringify(q),
     headers:{"Content-Type":"application/json",
 "Bypass-Tunnel-Reminder":"abc"
 }

 }
 return fetch(abc+"/rejectItem",req).then((data)=>
     
      data.json()
       
     )
}
export function UpdateInfo(userID,token,email,name,phone)
{
    let q={
        "userID":userID,
        "token":token,
       "name":name,
        "email":email,
        "phone":phone
    }
    let req={
     method:"POST",
     body:JSON.stringify(q),
     headers:{"Content-Type":"application/json",
 "Bypass-Tunnel-Reminder":"abc"
 }

 }
 return fetch(abc+"/updateInformation",req).then((data)=>
     
      data.json()
       
     )
}