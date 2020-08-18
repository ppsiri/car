import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route} from 'react-router-dom';
import Form from './Form';
import TestLog from './testlogin';
import TestBulma from './testbulma';
import User from './User';
import Calenda from './calenda';
import Booking from './info_booking';
import InfoAllocate from './info_allocate';
import CalendaAdmin from './calendaadmin';
import Car from './car';
import Step1 from './step1';
import Step2 from './step2';


const Home = () => <h1>Home</h1>
let form = "/user/form";

  const App = () => {
    return (
      <div className="App">
        <Route exact path="/" component={TestLog} />
        <Route exact path={form}  component={Form} />
        <Route exact path="/user/calenda" component={Calenda} />
        <Route exact path="/user" component={Calenda} />
        <Route exact path="/user/booking" component={Booking} />
        <Route exact path="/admin" component={CalendaAdmin} />
        <Route exact path="/admin/infoallocate" component={InfoAllocate} />
        <Route exact path="/admin/car" component={Car} />
        <Route exact path="/admin/check" component={Step1} />
        <Route exact path="/admin/allocate" component={Step2} />
      </div>
    );
}


export default App;
