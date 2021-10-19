import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import AuthProvider from './Components/Context/AuthProvider';
import DoctorDetails from './Components/Doctors/DoctorDetails/DoctorDetails';
import Doctors from './Components/Doctors/Doctors/Doctors';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ServiceDetails from './Components/Services/ServiceDetails/ServiceDetails';
import Services from './Components/Services/Services/Services';
import SignUp from './Components/SignUp/SignUp';
import Topbar from './Components/Topbar/Topbar';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Topbar></Topbar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/aboutus">
              <AboutUs></AboutUs>
            </Route>
            <Route path='/services'>
              <Services></Services>
            </Route>
            <PrivateRoute path='/service/:serviceId'>
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path='/doctors'>
              <Doctors></Doctors>
            </Route>
            <PrivateRoute path='/doctor/:doctorId'>
              <DoctorDetails></DoctorDetails>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/signup'>
              <SignUp></SignUp>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
