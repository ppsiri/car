import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './menu.css';
import './App.js';

class MenuAdmin extends Component {
  render() {
    return (
        <div className="menu">
          <ul>
            <li><a href="/admin">ปฏิทินการจองรถ</a></li>
            <li><a href="/admin/infoallocate">ข้อมูลการจองรถ</a></li>
            <li><a href="/admin/car">ข้อมูลรถ</a></li>
            <li><a href="/">ประวัติการจองรถ</a></li>
          </ul>
        </div>
    )
  }
}

export default MenuAdmin ;