import './../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../global.css'
import { Link } from 'react-router-dom'
function Dashboard()
{
    return(
        <div>
<nav class="navbar navbar-expand-lg navbar-light zw">
  <div class="container-fluid">
   <span class="fonts">Helping Hands</span>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
   
      </ul>
      <form class="d-flex">
      <Link to="/login">
      <button class="btn btn-outline-success" >Login</button>
      </Link>
      &nbsp;
      <Link to="/register">
        <button class="btn btn-outline-success">Register</button>
        </Link>
      </form>
    </div>
  </div>
</nav>

        </div>
    )
}
export default Dashboard;