import logo from './logo.svg';
import './App.css';
import { Redirect, Route, Switch } from 'react-router';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import LoginMail from './components/LoginMail';
import Register from './components/Register';


function App() {
  return (
    <div>
  
  <Dashboard></Dashboard>

  <Route path="/login" exact>
  <Login></Login>
</Route>
<Route path="/loginmail" exact>
  <LoginMail></LoginMail>
</Route>
<Route path="/register">
<Register></Register>
</Route>

  </div>
  );
}

export default App;
