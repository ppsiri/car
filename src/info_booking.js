import React, { Component } from 'react';
import './App.css';
import './menu.css';
import NevUser from './nevbar_user.js';
import MenuUser from './menu_user.js';

const Booking = () => {
    return (
      <div className="contain">
        <NevUser />
        <MenuUser />
        <div className="form">
            <div>
                <div className="panding">
                    <h5 align="left">
                        ข้อมูลการจอง
                    </h5>
                    <button  className="btorange" >
                        <a href="/user/form">
                        จองรถ
                        </a>
                    </button>
                </div>
                <div className="panding">
                    <table align="center" width="95%">
                        <tr>
                            <th width="10%">หมายเลข</th>
                            <th>วันที่จอง</th>
                            <th>ชื่อ</th>
                            <th>สถานที่</th>
                            <th>จำนวน</th>
                            <th>เวลาไป</th>
                            <th>เวลากลับ</th>
                            <th width="15%">สถานะ</th>
                            <th width="15%"></th>
                        </tr>
                        <tr>
                            <th>1</th>
                            <td>03/03/2563</td>
                            <td>ศิริวิริยา</td>
                            <td>มทร.อีสาน</td>
                            <td>20</td>
                            <td>05/03/2563 09.30</td>
                            <td>08/03/2563 19.30</td>
                            <td className="war">รอตรวจสอบ</td>
                            <td>
                                <button className="button edit">แก้ไข</button>
                                <button className="button del">ยกเลิก</button>
                            </td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td>03/03/2563</td>
                            <td>ศิริวิริยา</td>
                            <td>มทร.อีสาน</td>
                            <td>35</td>
                            <td>05/03/2563 09.30</td>
                            <td>08/03/2563 19.30</td>
                            <td className="warbook">รออนุมัติ</td>
                            <td>
                                {/* <button className="button edit">แก้ไข</button> */}
                                <button className="button del">ยกเลิก</button>
                            </td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td>03/03/2563</td>
                            <td>ศิริวิริยา</td>
                            <td>มทร.อีสาน</td>
                            <td>40</td>
                            <td>05/03/2563 09.30</td>
                            <td>08/03/2563 19.30</td>
                            <td className="combook">ผ่านการอนุมัติ</td>
                            <td >
                            </td>
                        </tr>
                        <tr>
                            <th>4</th>
                            <td>03/03/2563</td>
                            <td>ศิริวิริยา</td>
                            <td>มทร.อีสาน</td>
                            <td>45</td>
                            <td>05/03/2563 09.30</td>
                            <td>08/03/2563 19.30</td>
                            <td className="falsbook">ไม่ผ่านการอนุมัติ</td>
                            <td>
                                {/* <button className="button edit">แก้ไข</button> */}
                                {/* <button className="button del">ยกเลิก</button> */}
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
      </div>

    );
}


export default Booking;