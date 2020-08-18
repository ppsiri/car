import React from 'react';
import {button} from 'react-native';
import { Actions } from 'react-netive-mobx';

const Login = () => {
   /* onButtonPress(){
        Actions.form1()
    }*/
    return (

            <div className = "col-6 mt-5 mx-auto card">

                <div className ="card-body">

                    <form>
                        <div className ="form-group">
                            <label htmlFor ="username">User Name</label>
                            <input 
                            type ="text"
                            className = "form-control"
                                id ="username" Name ="username" />
                                </div>

                                <div className ="form-group">
                                <label htmlFor ="password">Password</label>
                                <input 
                            type ="password"
                            className = "form-control"
                                id ="password" Name ="password" />
                                </div>

                                <div className ="text-center">
                                    <button 
                                    onPress={()=>{this.onButtonPress()}}
                                    type = "submid"
                                    className = "btn btn-primary my-1"
                                   a href="/formm">Login </button>
                               </div>
                               <h1><a href="/formm">Login</a></h1>
                      </ form>
                </div>
            </div>
            
        );
    }
export default Login;