import
{
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MainPage from './page/MainPage';
import LoginPage from './page/LoginPage';
import RegisterPage from './page/RegisterPage';
import Header from './component/organisms/Header';
import Footer from './component/organisms/Footer';


function App()
{
  return (
    <Router >
      <div style={{ height: '100vh',display:'flex',flexDirection:'column',justifyContent:'space-between' }}>
        <Header />
        <div >
          <Switch>
            <Route exact path="/">
              <MainPage />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/register">
              <RegisterPage />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
