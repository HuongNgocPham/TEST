import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Login from '../Login/Login';
import Signup from '../Signup/Signup';

class RouterURL extends Component {
    render() {
        return (
                <div>
                      <Switch>
                      <Route path="/login" component ={Login}/>
                      <Route path="/signup" component ={Signup}/>
                      </Switch>
                    
                </div>
                
        );
    }
}

export default RouterURL;