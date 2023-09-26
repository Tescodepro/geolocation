import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';
import PrivateRoute from './components/PrivateRoute';
import Splash from './pages/Splash';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import EmailVerification from './pages/EmailVerification';
import EmailVerified from './pages/EmailVerified';
import ForgotPassword from './pages/ForgotPassword';
import EditProfile from './pages/EditProfile';
import Settings from './pages/Settings';
import HomePage from './pages/HomePage';
import Contacts from './pages/Contacts';
import AddContact from './pages/AddContact';

function App() {
  const [userInfo, setUserInfo] = useState(undefined);
  const [emergency, setEmergency ] = useState([])
  
  return (
    <Router>
      <main className="background">
        <Routes>
          <Route path='/' element={<Splash />} />      
          <Route path='/sign-up' element={<SignUp />} />      
          <Route path='/sign-in' element={<SignIn userInfo={userInfo} setUserInfo={setUserInfo} />} />      
          <Route path='/email-verification' element={<EmailVerification />} />      
          <Route path='/email-verified' element={<EmailVerified />} />      
          <Route path='/forgot-password' element={<ForgotPassword />} />      
          <Route path='/edit-profile' element={<EditProfile userInfo={userInfo} setUserInfo={setUserInfo} />} />      
          <Route path='/settings' element={<Settings userInfo={userInfo} setUserInfo={setUserInfo} />} />      
          <Route path='/home-page' element={<HomePage userInfo={userInfo} emergency={emergency}/>} />      
          <Route path='/contacts' element={<PrivateRoute userInfo={userInfo} />}>
            <Route path='/contacts' element={<Contacts userInfo={userInfo} emergency={emergency} setEmergency={setEmergency}/>} />
          </Route>    
          <Route path='/add-contact' element={<AddContact userInfo={userInfo} setUserInfo={setUserInfo} />} />      
        </Routes>  
      </main>
    </Router>
  );
}

export default App;
