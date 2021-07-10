import Navbar from 'react-bootstrap/Navbar';
import {Sidebardata} from './Sidebardata'
import './../global.css'

function AdminSidebar()
{
return(
    <div className="Sidebar">
    <ul className="list">
       {Sidebardata.map((val,key)=>{
           return(
               <li key={key} className="rowss"
               
               id={window.location.pathname == val.link ? "active" : ""}
               
               onClick={()=>{window.location.pathname = val.link}}>
                   
                   <div className="icon"> {val.icon} </div>
                   
                   <div className="title"> {val.title} </div>
                </li>
           );
       })}
       </ul>
        </div>
)
}
export default AdminSidebar;