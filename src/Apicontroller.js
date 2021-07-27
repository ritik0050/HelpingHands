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
export function PhoneLogin(phone)
{
     let z={
        "phone":phone,
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

export function ImagePass(a,b,c,d,e,f,g,userID,token,category) {
    let formData = new FormData();
    console.log("hiii");
    formData.append('fileFullWidth', a);
    formData.append('fileThumbnail', b);
    formData.append('filePortrait', c);
    formData.append('fileSquare', d);
    formData.append('fileHero', e);
    formData.append('userID', userID);
    formData.append('token',token);
    formData.append('category', category);
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
 
export function GetUserItem(userID,token)
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
 return fetch(abc+"/fetchUserItems",req).then((data)=>
     
      data.json()
       
     )
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
export function RemoveItem(itemID,userID,token)
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
 return fetch(abc+"/removeUserItem",req).then((data)=>
     
      data.json()
       
     )
}
export function UpdatePassInfo(userID,token,newPass,oldPass)
{
    let q={
        "newPassword": newPass,
        "oldPassword": oldPass,
        "token": token,
        "userID":userID
      }
    let req={
     method:"POST",
     body:JSON.stringify(q),
     headers:{"Content-Type":"application/json",
 "Bypass-Tunnel-Reminder":"abc"
 }

 }
 return fetch(abc+"/updatePassword",req).then((data)=>
     
      data.json()
       
     )
}
export function TotalUsers(userID,token)
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
 return fetch(abc+"/fetchTotalUsers",req).then((data)=>
     
      data.json()
       
     )
}

export function LockUser(userID,adminID,token)
{
    let q={
        "adminID":userID,
        "token":token,
        "userID":adminID,
    }
    let req={
     method:"POST",
     body:JSON.stringify(q),
     headers:{"Content-Type":"application/json",
 "Bypass-Tunnel-Reminder":"abc"
 }

 }
 return fetch(abc+"/lockUser",req).then((data)=>
     
      data.json()
       
     )
}

export function UnlockUser(userID,adminID,token)
{
    let q={
        "adminID":userID,
        "token":token,
        "userID":adminID,
    }
    let req={
     method:"POST",
     body:JSON.stringify(q),
     headers:{"Content-Type":"application/json",
 "Bypass-Tunnel-Reminder":"abc"
 }

 }
 return fetch(abc+"/unlockUser",req).then((data)=>
     
      data.json()
       
     )
}
export function CreateAdmin(userID,token)
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
 return fetch(abc+"/fetchUsers",req).then((data)=>
     
      data.json()
       
     )
}
export function AddAdmin(userID,adminID,token)
{
    let q={
        "adminID":userID,
        "token":token,
        "userID":adminID,
    }
    let req={
     method:"POST",
     body:JSON.stringify(q),
     headers:{"Content-Type":"application/json",
 "Bypass-Tunnel-Reminder":"abc"
 }

 }
 return fetch(abc+"/createAdmin",req).then((data)=>
     
      data.json()
       
     )
}

export function RemoveAdmin(userID,adminID,token)
{
    let q={
        "adminID":userID,
        "token":token,
        "userID":adminID
    }
    let req={
     method:"POST",
     body:JSON.stringify(q),
     headers:{"Content-Type":"application/json",
 "Bypass-Tunnel-Reminder":"abc"
 }

 }
 return fetch(abc+"/removeAdmin",req).then((data)=>
     
      data.json()
       
     )
}
export function LogOutt(userID)
{
    let q={
        "userID":userID
      
    }
    let req={
     method:"POST",
     body:JSON.stringify(q),
     headers:{"Content-Type":"application/json",
 "Bypass-Tunnel-Reminder":"abc"
 }

 }
 return fetch(abc+"/logoutUser",req).then((data)=>
     
      data.json()
       
     )
}
export function VerifyTokenn(userID,token)
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
 return fetch(abc+"/verifyToken",req).then((data)=>
     
      data.json()
       
     )
}
export function PendingReq(userID,token)
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
 return fetch(abc+"/totalPendingRequests",req).then((data)=>
     
      data.json()
       
     )
}
export function TotalRegisters(userID,token)
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
 return fetch(abc+"/totalRegisters",req).then((data)=>
     
      data.json()
       
     )
}
export function TotalDonors(userID,token)
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
 return fetch(abc+"/totalDonors",req).then((data)=>
     
      data.json()
       
     )
}
export function TotalDonorsToday(userID,token)
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
 return fetch(abc+"/totalDonorsOnADay",req).then((data)=>
     
      data.json()
       
     )
}
export function TotalApproved(userID,token)
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
 return fetch(abc+"/totalApprovedRequests",req).then((data)=>
     
      data.json()
       
     )
}
export function TotalRejected(userID,token)
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
 return fetch(abc+"/totalRejectedRequests",req).then((data)=>
     
      data.json()
       
     )
}
export function TotalLocked(userID,token)
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
 return fetch(abc+"/totalLockedUsers",req).then((data)=>
     
      data.json()
       
     )
}
export function TotalActive(userID,token)
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
 return fetch(abc+"/totalActiveUsers",req).then((data)=>
     
      data.json()
       
     )
}
export function FetchItemData(itemID)
{
    let q={
        "itemID":itemID
    }
    let req={
     method:"POST",
     body:JSON.stringify(q),
     headers:{"Content-Type":"application/json",
 "Bypass-Tunnel-Reminder":"abc"
 }

 }
 return fetch(abc+"/fetchItemData",req).then((data)=>
     
      data.json()
       
     )
}
export function DonationsPerPerson(userID,token,donerID)
{
    let q={
        "userID":userID,
        "token":token,
        "donorID":donerID
    }
    let req={
     method:"POST",
     body:JSON.stringify(q),
     headers:{"Content-Type":"application/json",
 "Bypass-Tunnel-Reminder":"abc"
 }

 }
 return fetch(abc+"/totalUserDonations",req).then((data)=>
     
      data.json()
       
     )
}
export function RequestItemm(itemID,userID,token)
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
 return fetch(abc+"/requestItem",req).then((data)=>
     
      data.json()
       
     )
}
export function CheckRequested(itemID,userID,token)
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
 return fetch(abc+"/checkRequest",req).then((data)=>
     
      data.json()
       
     )
}