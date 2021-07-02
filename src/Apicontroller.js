import React, { useState } from "react";
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

