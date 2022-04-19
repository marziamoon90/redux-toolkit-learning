import './App.css';
import { useSelector } from 'react-redux';
import Auth from './components/Auth';
import BasePage from './components/BasePage';
import Home from '../src/components/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Users from './components/Users/Users';
import Header from './components/Header/Header';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';

function App() {

  // const auth = useSelector(state => state.auth)
  // console.log("auth", auth)

  return (
    // <div className="App">
    //   {/* {auth.isAuth ? <BasePage /> : <Auth />} */}
    //   <Home/>

    // </div>

    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/home"><Home /></Route>
          <Route exact path="/users"><Users /></Route>
          <Route exact path="/about"><About /></Route>
          <Route exact path="/contact"><Contacts /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
