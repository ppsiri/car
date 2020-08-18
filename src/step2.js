import React, { Component } from 'react';
import './App.css';
import './menu.css';
import './step.css';
import NevAdmin from './nevbar_admin.js';
import MenuAdmin from './menu_admin.js';

const Step2 = () => {
    return (
      <div className="contain">
        <NevAdmin />
        <MenuAdmin />
        <div className="form">
        <div>
                <div className="panding">
                    <h5 align="left">
                        ตรวจสอบ/จัดสรรรถ
                    </h5>
                </div>
                <div className="panding">
                    <div class="container">
                        <ul class="progressbar ">
                        <a href="/admin/check"><li class="active">ตรวจสอบ</li></a>
                            <li >จัดสรร</li>
                        </ul>
                    </div>
                </div>
                <div className="panding">
                <table align="center" width="50%">
                    <tr>
                        <th width="30%">หมายเลข</th>
                        <td>1</td>
                    </tr>
                    <tr>
                        <th width="30%">ชื่อ</th>
                        <td>วีรเชษฐ์ สารสำคัญ</td>
                    </tr>
                    <tr>
                        <th width="30%">สถานที่</th>
                        <td>มทร.อีสาน</td>
                    </tr>
                    <tr>
                        <th width="30%">จำนวน</th>
                        <td>20</td>
                    </tr>
                    <tr>
                        <th width="30%">เวลาไป</th>
                        <td>05/03/2563 09.30</td>
                    </tr>
                    <tr>
                        <th width="30%">เวลากลับ</th>
                        <td>08/03/2563 19.30</td>
                    </tr>
                    <tr>
                        <th width="30%">จัดสรรรถ</th>
                        <td>
                            <select class="custom-select">
                                <option value="0">Select car:</option>
                                <option value="1">40–0259</option>
                                <option value="2">40–0260</option>
                                <option value="3">40–0500</option>
                                <option value="4">40–0506</option>
                                <option value="5">กว 8917</option>
                                <option value="6">ขม 1148</option>
                                <option value="7">นค 5128</option>
                                <option value="8">นค 5600</option>
                                <option value="9">นง 202</option>
                                <option value="10">นง 2660</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <th width="30%">จัดสรรคนขับ</th>
                        <td>
                            <select class="custom-select">
                                <option value="0">Select driver:</option>
                                <option value="1">นาย ใจดี สุดๆ</option>
                                <option value="2">นาย เก่ง มากๆ</option>
                                <option value="3">นาย ขยัน ขันแข็ง</option>
                                <option value="4">นาย ขี้เกียจ อืดอาด</option>
                                <option value="5">นาย ใจเดียว รักจริง</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <button className="button etc">
                                 ข้อมูลเพิ่มเติม
                            </button>
                        </th>
                    </tr>
                </table>
                <div className="panding">
                    <button className="button del">
                        <a href="/admin/check">ย้อนกลับ</a>
                    </button>
                    <button className="button nodel">
                        <a href="/admin/infoallocate">ยืนยัน</a>
                    </button>
                </div>
                </div>
            </div>
        </div>
      </div>
    );
}

export default Step2;