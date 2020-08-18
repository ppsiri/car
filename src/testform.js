import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DateTimePicker from 'react-datetime-picker';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { BrowserRouter, Route } from 'react-router-dom';
//import { DateTimePicker } from '@progress/kendo-react-dateinputs';

const Form = () => {
  return(
    <section class="hero is-info is-large">
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
            <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo"/>
          </a>
          <span class="navbar-burger burger" data-target="navbarMenuHeroB">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroB" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item is-active">
              Home
            </a>
            <a class="navbar-item">
              Examples
            </a>
            <a class="navbar-item">
              Documentation
            </a>
            <span class="navbar-item">
              <a class="button is-info is-inverted">
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span>
                <span>Download</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </nav>
  </div>

  <div class="hero-body">

  <div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label" align="center">แบบฟอร์มการจองรถ<br/><br/></label>
  </div>
  <div class="field-body">
    
    <div class="field">
    <div class="field has-addons">
        <p class="control">
          <a class="button is-static is-rounded">
          ชื่อ
          <i class="fas fa-user"></i>
          </a>
        </p>
        <p class="control is-expanded">
          <input class="input is-rounded" type="text" placeholder="Name" />
        </p>
      </div>
      <br/>
      <div class="field has-addons">
        <p class="control">
          <a class="button is-static is-rounded">
          ตำแหน่ง
          </a>
        </p>
        <p class="control is-expanded">
          <input class="input is-rounded" type="text" placeholder="ตำแหน่ง" />
        </p>
      </div>
    </div>
  </div>
</div>



<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">ขออนุญาตใช้รถราชการเพื่อ</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <input class="input is-rounded" type="text" placeholder="ขออนุญาตใช้รถราชการเพื่อ"/>
      </div>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">สถานที่</label>
  </div>
  <div class="field-body">
    <div class="field is-narrow">
      <div class="control">
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        />
      </div>
    </div>
  </div>
</div>
<br/><br/>


<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">จำนวนผู้ร่วมเดินทาง</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <input class="input is-rounded" type="tel" placeholder="จำนวนผู้ร่วมเดินทาง"/>
      </div>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">ผู้ร่วมเดิมทาง
    </label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <textarea class="textarea" placeholder="ผู้ร่วมเดิมทาง"></textarea>
      </div>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">เวลาในการเดินทางไป</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
       <DateTimePicker
          onChange={this.handleChange}
          value={this.state.date1}
       />
      </div>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">เวลาในการเดินทางกลับ</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <DateTimePicker
          onChange={this.handleChange}
          value={this.state.date2}
       />
      </div>
    </div>
  </div>
</div>



<div class="field is-horizontal">
  <div class="field-label">

  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <button class="button is-primary">
          Send 
        </button>
      </div>
    </div>
  </div>
</div>
  </div>
</section>
  );
}

export default Form;