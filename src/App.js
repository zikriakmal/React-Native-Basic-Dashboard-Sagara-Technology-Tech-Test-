import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MainPage from './page/MainPage';
import LoginPage from './page/LoginPage';
import RegisterPage from './page/RegisterPage';
import Header from './component/organisms/Header';


function App() {
  return (
    <Router>
    <Header />
      <div>
        <Switch>
          <Route exact path="/">
            <MainPage/> 
          </Route>
          <Route exact path="/login">
           <LoginPage/> 
          </Route>
          <Route exact path="/register">
            <RegisterPage/> 
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
