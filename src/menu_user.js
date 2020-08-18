import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './menu.css';
import './App.js';

class MenuUser extends Component {
  render() {
    return (
        <div className="menu">
        <ul>
  <li><a href="/user">ปฏิทินการจองรถ</a></li>
  <li><a href="/user/booking">ข้อมูลการจองรถ</a></li>
  <li><a href="/">ประวัติการจองรถ</a></li>

</ul>
        </div>
    )
  }
}

export default MenuUser ;