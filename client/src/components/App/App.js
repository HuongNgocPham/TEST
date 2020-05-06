import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
// import RouterURL from '../RouterURL/RouterURL';
// import Login from '../Login/Login';
import Signup from '../Signup/Signup';

function App() {
  return (
  <Router>
     <div>
       {/* <Login></Login> */}
      <Signup></Signup>
     </div>
  </Router>
 
  );
}

export default App;
