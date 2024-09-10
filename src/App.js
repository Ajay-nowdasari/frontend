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
      <Router>
          <Routes>
            <Route path="/" element={ <AdminLoginPage/>} />
            <Route path="/data" element={<UserForm/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
