import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Pages/Header/Header';

import NotFound from './Pages/NotFound/NotFound';
import Services from './Pages/Services/Services';
import Pakeges from './Pages/Pakeges/Pakeges';
import AboutUs from './Pages/AboutUs/AboutUs';




function App() {
  return (
    <div className="App container">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/aboutus">
            <AboutUs></AboutUs>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>

      </Router>



    </div>
  );
}

export default App;
