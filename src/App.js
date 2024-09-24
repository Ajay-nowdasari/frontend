// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import HelloWorld from './components/HelloWorld';
// import UserForm from './components/UserForm';
import RegisterForm from './components/Register';
import LoginForm from './components/Login';
import Dashboard from './components/Dashboard';
import AdminLoginPage from './components/adminloginform';
import UserForm from './components/Student';

import AdminRegistrationForm from './Product_Task/AdminRegistration';
import Admin from './Product_Task/Admindashboard';
import UserLoginPage from './Product_Task/Loginpage';
import User from './Product_Task/Userdashboard';
import UserRegistrationForm from './Product_Task/UserRegistraion';
import VerifyOTP from './Product_Task/VerifyOTP';

import RegisterUser from './Approval/registerUser.jsx';
import User_Login from './Approval/UserLogin.jsx';
import Admin_Login from './Approval/AdminLogin.jsx';
import Admindashboard from './Approval/Dashboard_Admin.jsx';
import Userdashboard from './Approval/Dashboard_User.jsx';
import Usersapp from './Approval/UsersApproval.jsx';

import LoveLetter from './love_letter/LoveLetter.js';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
function App() {
  return (
    <div>
      {/* <HelloWorld/> */}
      {/* <UserForm/> */}
      {/* <RegisterForm/> */}
      {/* {<LoginForm/>} */}
      {/* <Router>
        <Routes>
            <Route path='/' element={<RegisterForm/>}/>
            <Route path='/LoginForm' element={<LoginForm/>}/>
            <Route path='/Dashboard' element={<Dashboard/>}/>
        </Routes>
      </Router> */}
      {/* <Router>
          <Routes>
            <Route path="/" element={ <AdminLoginPage/>} />
            <Route path="/data" element={<UserForm/>}/>
          </Routes>
        </Router> */}
      {/* <Router>
        <Routes>
          <Route path='/' element={<AdminRegistrationForm/>}/>
          <Route path="/user" element={<UserRegistrationForm />} />
          <Route path="/login" element={<UserLoginPage />} />
          <Route path="/verify" element={<VerifyOTP />} />
          <Route path="/user_dashboard" element={<User />} />
          <Route path="/admin_dashboard" element={<Admin />} />
        </Routes>
      </Router> */}
      <LoveLetter />
      {/* <Router>
        <Routes>
          <Route path='/' element={<RegisterUser/>}/>
          <Route path="/user-login" element={<User_Login />} />
          <Route path="/admin-login" element={<Admin_Login />} />
          <Route path='/user-dashboard' element={<Userdashboard/>}/>
          <Route path='/admin-dashboard' element={<Admindashboard/>}/>
          <Route path='/user-approval' element={<Usersapp/>}/>
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
