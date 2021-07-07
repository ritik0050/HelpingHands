import logo from './logo.svg';
import './App.css';
import { Redirect, Route, Switch } from 'react-router';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Education from './components/Education';
import { useState } from 'react';



function App() {
  const[response,updatez]=useState([]);
  
    function getData(data)
    {
updatez(data);

    }
  return (
    <div>
  
  <Header></Header>
 <Route path="/">
   <Redirect to="/dashboard"></Redirect>
 </Route>
  <Route path="/donate/education">
<Education response={response}></Education>
  </Route>

  <Route path="/dashboard">
<Dashboard callBackData={getData}></Dashboard>
</Route>
 




  </div>
  );
}

export default App;
