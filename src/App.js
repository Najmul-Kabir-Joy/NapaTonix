import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import Doctors from './Components/Doctors/Doctors/Doctors';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import Services from './Components/Services/Services/Services';
import SignUp from './Components/SignUp/SignUp';
import Topbar from './Components/Topbar/Topbar';


function App() {
  return (
    <div className="App">
      {/* <button onClick={googleSignIn}>google sign in</button>
      <button onClick={logOut}>logout</button>
      <p>{displayName}</p>
      <p>{error}</p>
      <form onSubmit={handleRegistration}>
        <input onBlur={getEmail} type="email" id='email' />
        <input onBlur={getPass} type="password" id='pass' />
        <input onBlur={getName} type="text" placeholder='name' id='name' />
        <button type="submit" onClick={clearInputs}>Submit<i className="fas fa-space-shuttle"></i></button>
      </form> */}
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
          <Route path='/doctors'>
            <Doctors></Doctors>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/signup'>
            <SignUp></SignUp>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      {/* <DoctorDetails></DoctorDetails> */}
    </div>
  );
}

export default App;
