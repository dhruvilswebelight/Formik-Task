import "./App.css";

import React, {component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Routes, useParams, useRouteMatch, BrowserRouter } from 'react-router-dom';
import LoginPage from "./LoginPage";
import RegistrationPage from "./RegistrationPage";


const App = () => {
  return (
    <div className="App">
         <Route exact path = "/Registration-Page">
           <RegistrationPage />
            </Route>
          <Route path = "/Login-Page">
            <LoginPage/>
            </Route>     
    </div>
  );
}
export default App

                      //  Formik field array example

// import React from "react";
// import FriendList from "./FieldArray";
// import "./App.css"

// const App = () => {
//   return (
//     <div className="App">
//       <FriendList/>
//     </div>
//   )
// }
// export default App