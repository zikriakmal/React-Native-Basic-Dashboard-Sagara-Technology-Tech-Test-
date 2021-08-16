import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MainPage from './page/MainPage';
import LoginPage from './page/LoginPage';
import RegisterPage from './page/RegisterPage';


function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">About</Link>
          </li>
          <li>
            <Link to="/register">Dashboard</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <MainPage/> 
          </Route>
          <Route path="/about">
           <LoginPage/> 
          </Route>
          <Route path="/dashboard">
            <RegisterPage/> 
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
