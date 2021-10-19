import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Pages/Header/Header';

import NotFound from './Pages/NotFound/NotFound';
import Services from './Pages/Services/Services';

import AboutUs from './Pages/AboutUs/AboutUs';
import AuthProvider from './Context/AuthProvider';
import Login from './Pages/Login/Login';

import PrivateRoute from './Pages/Login/PrivateRoute'
import Booking from './Pages/Booking/Booking';


function App() {
  return (
    <div className="App container">

      <AuthProvider>
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
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>

        </Router>

      </AuthProvider>

    </div>
  );
}

export default App;
