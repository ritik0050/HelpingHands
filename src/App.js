import logo from './logo.svg';
import './App.css';
import { Redirect, Route, Switch } from 'react-router';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Education from './components/Education';
import DashboardCard from './components/DashboardCard';
import Inbox from './components/Inbox';
import ImageUpload from './components/ImageUpload';
import { useState } from 'react';
import AdminHeader from './components/AdminHeader';
import AdminSidebar from './components/AdminSidebar';
import Row from 'react-bootstrap/Row'
import Col from "react-bootstrap/Col"
import AdminInbox from './components/AdminInbox'



function App() {
  const[response,updatez]=useState([]);
  
    function getData(data)
    {
updatez(data);

    }
  return (
    <div>
  <Route path="/user">
  <Header></Header>
  </Route>
 <Route path="/" exact>
   <Redirect to="/user/dashboard"></Redirect>
 </Route>
  <Route path="/user/donate/education">
<Education response={response}></Education>
  </Route>

  <Route path="/user/dashboard">
<Dashboard callBackData={getData}></Dashboard>
</Route>
<Route path="/user/dashboardcard" exact>
<DashboardCard></DashboardCard>
</Route>
<Route path="/user/dashboardcard/inbox" exact>
<Inbox></Inbox>
</Route>
<Route path="/user/dashboardcard/imageupload" exact>
<ImageUpload></ImageUpload>
</Route>
<Route path="/admin">
  <AdminHeader></AdminHeader>
</Route>
<Row>
  <Col md={2}>
<Route path="/admin/sidebar">
  <AdminSidebar></AdminSidebar>
</Route>
</Col>
<Col md={10}>
<Route path="/admin/sidebar/inbox">
  <AdminInbox></AdminInbox>
</Route>
</Col>
</Row>




  </div>
  );
}

export default App;
