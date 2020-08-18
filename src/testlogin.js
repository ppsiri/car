
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './Login-form';
import List from './List';
 
    const TestLog = () => {
    return (
      <div className = "App">
        <div style ={{color:'#F4FFFF',backgroundColor:'#008C8C',fontSize:28,textAlign: 'center'}}>
          ระบบจองยานพาหนะสำหรับมหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน  วิทยาเขตนครราชสีมา
        </div>
          <p style ={
            {
              color:'#282828',
              fontSize: 20,
              textAlign: 'center'
            }
          }>
            wellcome to Vehicle reservation system for Rajamangala University of Technology Isan Nakhon Ratchasima Campus
          </p> 
        <div className = "container">
          <List />  
          <LoginForm />
        </div>
      </div>
  );
}


export default TestLog;
