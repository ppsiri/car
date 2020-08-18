import React, { Component } from 'react';
import './App.css';
import './menu.css';
import './step.css';
import NevAdmin from './nevbar_admin.js';
import MenuAdmin from './menu_admin.js';

const Step1 = () => {
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
                        <ul class="progressbar">
                            <li >ตรวจสอบ</li>
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
                        <th width="30%">
                            <button className="button etc">
                                 ข้อมูลเพิ่มเติม
                            </button>
                        </th>
                    </tr>
                </table>
                <div className="panding">
                    <button className="button del">
                        ไม่ผ่านการตรวจ
                    </button>
                    <button className="button nodel">
                        <a href="/admin/allocate">ผ่านการตรวจ</a>
                    </button>
                </div>
                </div>
            </div>
        </div>
      </div>
    );
}

export default Step1;