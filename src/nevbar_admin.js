import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './menu.css';

class NevAdmin extends Component {
  render() {
    return (
        <div className="nev">
        <div className="my-app">
            <nav class="navbar bgorange" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a href="/user" className="hnev">
                        <h5 className="h5nev">ระบบการจองยานพาหนะ
                        </h5>
                    </a>

                    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                    </a>
                </div>

                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-end">
                        <div class="navbar-item">
                            <div class="buttons">
                            <a class="button btorange">
                                <strong style ={{color:'white'}}>
                                    <i class="fas fa-user-alt"></i> 
                                    Admin
                                </strong>
                            </a>
                            <a class="button is-light" href="/">
                                Log out
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
      </div>
      </div>
    )
  }
}

export default NevAdmin ;