import React, { Component } from 'react';
import './App.css';
import './menu.css';
import TestBulma from './testbulma';
import NevUser from './nevbar_user.js';
import MenuUser from './menu_user.js';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';


class Form extends Component {
  state = {
    time: '10:00',
    startDate: new Date(),

  };
  onChange = time => this.setState({ time })
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };


  render() {
    return (
      <div className="contain">
        <NevUser />
        <MenuUser />
        <div className="form">
          <div>
          <div className="panding">
          <div>
            <br />
            <h3 align="center">
              แบบฟอร์มการจองรถ
            </h3>
          </div>
          <div class="hero-body">
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label" align="center">ชื่อ</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="field has-addons">
                    <input class="input is-rounded" type="text" placeholder="ชื่อ" />
                  </div>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label" align="center">ตำแหน่ง</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="field has-addons">
                    <input class="input is-rounded" type="text" placeholder="ตำแหน่ง" />
                  </div>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label" align="center">ขออนุญาตใช้รถเพื่อ</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="field has-addons">
                    <textarea class="textarea" placeholder="จุดประสงค์การขอใช้รถ"></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label" align="center">สถานที่</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="field has-addons">
                    <input class="input is-rounded" type="text" placeholder="สถานที่" />
                  </div>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label" align="center">จำนวนผู้เดินทาง</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="field has-addons">
                    <input class="input is-rounded" type="number" placeholder="จำนวนคน" />
                  </div>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label" align="center">จำนวนอาจารย์-เจ้าหน้าที่</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="field has-addons">
                    <input class="input is-rounded" type="number" placeholder="จำนวนคน" />
                  </div>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label" align="center">อาจารย์-เจ้าหน้าที่</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="field has-addons">
                    <textarea class="textarea" placeholder="รายชื่ออาจารย์-เจ้าหน้าที่"></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label" align="center">จำนวนนักศึกษา</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="field has-addons">
                    <input class="input is-rounded" type="number" placeholder="จำนวนคน" />
                  </div>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label" align="center">นักศึกษา</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="field has-addons">
                    <textarea class="textarea" placeholder="รายชื่อนักศึกษา"></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label" align="center">วันเวลาในการเดินทางไป</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="field has-addons">
                    <DatePicker
                      selected={this.state.startDate}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div class="field has-addons">
                    <TimePicker />
                  </div>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label" align="center">วันเวลาในการเดินทางกลับ</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="field has-addons">
                    <DatePicker
                      selected={this.state.startDate}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div class="field has-addons">
                    <TimePicker />
                  </div>
                </div>
              </div>
            </div>

            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label" align="center">เอกสารเพิ่มเติม</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="field has-addons">
                    <div class="file is-info">
                      <label class="file-label">
                        <input class="file-input" type="file" name="resume" />
                        <span class="file-cta">
                          <span class="file-icon">
                            <i class="fas fa-upload"></i>
                          </span>
                          <span class="file-label">
                            Choose a file…
                          </span>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            

            <div class="col-auto my-1">
              <button type="submit" class="btn btsubmit">
                <a href="/user/booking">
                ยืนยัน
                </a>
              </button>
            </div>
          </div>
        </div>
        </div>
        </div>
      </div>

    );
  }
}


export default Form;