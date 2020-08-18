import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route} from 'react-router-dom';
import Form from './Form';
import TestLog from './testlogin';
import TestBulma from './testbulma';
import Calenda from './calenda';

  const User = () => {
    return (
      <div className="User">
        <Route exact path="/user" component={Calenda} />
        <Route path="/user" component={User} />
      </div>
    );
}


export default User;
