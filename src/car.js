import React, { Component } from 'react';
import './App.css';
import './menu.css';
import NevAdmin from './nevbar_admin.js';
import MenuAdmin from './menu_admin.js';

const Car = () => {
    return (
      <div className="contain">
        <NevAdmin />
        <MenuAdmin />
        <div className="form">
        <div>
                <div className="panding">
                    <h5 align="left">
                        ข้อมูลรถ
                    </h5>
                </div>
                <div className="panding">
                    <table align="center" width="95%">
                        <tr className="trh">
                            <th width="5%">คันที่</th>
                            <th>ทะเบียน</th>
                            <th>วันที่จดทะเบียน</th>
                            <th>ประเภทรถ</th>
                            <th>ยี่ห้อรถ</th>
                            <th>สี</th>
                            <th>น้ำหนัก(kg)</th>
                            <th>จำนวนที่นั่ง</th>
                            <th>รูป</th>
                            <th></th>
                        </tr>
                        <tr>
                            <th>1</th>
                            <td>40–0259</td>
                            <td>09/08/2526</td>
                            <td>รถโดยสารส่วนบุคคล</td>
                            <td>HINO</td>
                            <td>ขาว ส้ม</td>
                            <td>12,200</td>
                            <td>44</td>
                            <td></td>
                            <td><button className="button edit">แก้ไข</button></td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td>40–0260</td>
                            <td>20/08/2541</td>
                            <td>รถโดยสารส่วนบุคคล</td>
                            <td>ISUZU</td>
                            <td>ขาว แดง</td>
                            <td>7,800 </td>
                            <td>44</td>
                            <td></td>
                            <td><button className="button edit">แก้ไข</button></td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td>40–0500 </td>
                            <td>30/06/2554</td>
                            <td>รถโดยสารส่วนบุคคล</td>
                            <td>VOLVO</td>
                            <td>ขาว ส้ม เหลือง แดง</td>
                            <td>12,500</td>
                            <td>45</td>
                            <td></td>
                            <td><button className="button edit">แก้ไข</button></td>
                        </tr>
                        <tr>
                            <th>4</th>
                            <td>40–0506</td>
                            <td>09/08/2554</td>
                            <td>รถโดยสารส่วนบุคคล</td>
                            <td>MERCEDES BENZ</td>
                            <td>ส้ม เหลือง ขาว</td>
                            <td>8,500</td>
                            <td>30</td>
                            <td></td>
                            <td><button className="button edit">แก้ไข</button></td>
                        </tr>
                        <tr>
                            <th>5</th>
                            <td>กว 8917</td>
                            <td>25/10/2554</td>
                            <td>รถยนต์นั่งส่วนบุคคล</td>
                            <td>TOYOTA</td>
                            <td>เทา</td>
                            <td>1,500</td>
                            <td>5</td>
                            <td></td>
                            <td><button className="button edit">แก้ไข</button></td>
                        </tr>
                        <tr>
                            <th>6</th>
                            <td>ขม 1148</td>
                            <td>21/12/2559</td>
                            <td>รถยนต์นั่งส่วนบุคคล</td>
                            <td>HYUNDAI</td>
                            <td>ดำ</td>
                            <td>2,200</td>
                            <td>7</td>
                            <td></td>
                            <td><button className="button edit">แก้ไข</button></td>
                        </tr>
                        <tr>
                            <th>7</th>
                            <td>นค 5128</td>
                            <td>13/02/2550</td>
                            <td>รถยนต์นั่งส่วนบุคคล</td>
                            <td>VOLKSWAGEN</td>
                            <td>ดำ</td>
                            <td>2,100</td>
                            <td>7</td>
                            <td></td>
                            <td><button className="button edit">แก้ไข</button></td>
                        </tr>
                        <tr>
                            <th>8</th>
                            <td>นค 5600</td>
                            <td>27/09/2550</td>
                            <td>รถยนต์นั่งส่วนบุคคล</td>
                            <td>TOYOTA</td>
                            <td>เทา</td>
                            <td>2,100</td>
                            <td>12</td>
                            <td></td>
                            <td><button className="button edit">แก้ไข</button></td>
                        </tr>
                        <tr>
                            <th>9</th>
                            <td>นค 5601</td>
                            <td>27/09/2550</td>
                            <td>รถยนต์นั่งส่วนบุคคล</td>
                            <td>TOYOTA</td>
                            <td>เทา</td>
                            <td>2,100</td>
                            <td>12</td>
                            <td></td>
                            <td><button className="button edit">แก้ไข</button></td>
                        </tr>
                        <tr>
                            <th>10</th>
                            <td>นง 202</td>
                            <td>20/05/2556</td>
                            <td>รถยนต์นั่งส่วนบุคคล</td>
                            <td>TOYOTA</td>
                            <td>เทา</td>
                            <td>2,100</td>
                            <td>12</td>
                            <td></td>
                            <td><button className="button edit">แก้ไข</button></td>
                        </tr>
                        <tr>
                            <th>11</th>
                            <td>นง 2660</td>
                            <td>09/12/2559</td>
                            <td>รถยนต์นั่งส่วนบุคคล</td>
                            <td>TOYOTA</td>
                            <td>เทา</td>
                            <td>2,150</td>
                            <td>12</td>
                            <td></td>
                            <td><button className="button edit">แก้ไข</button></td>
                        </tr>
                        <tr>
                            <th>12</th>
                            <td>นง 2687</td>
                            <td>25/04/2560</td>
                            <td>รถยนต์นั่งส่วนบุคคล</td>
                            <td>TOYOTA</td>
                            <td>เทา</td>
                            <td>2,150</td>
                            <td>12</td>
                            <td></td>
                            <td><button className="button edit">แก้ไข</button></td>
                        </tr>
                        <tr>
                            <th>13</th>
                            <td>40-0713</td>
                            <td>12/11/2561</td>
                            <td>รถโดยสารส่วนบุคคล</td>
                            <td>HINO</td>
                            <td>ขาว</td>
                            <td>4,700</td>
                            <td>24</td>
                            <td></td>
                            <td><button className="button edit">แก้ไข</button></td>
                        </tr>
                        <tr>
                            <th>14</th>
                            <td>40-0724</td>
                            <td>25/03/2552</td>
                            <td>รถโดยสารส่วนบุคคล</td>
                            <td>HINO</td>
                            <td>ส้ม ขาว เหลือง</td>
                            <td>10,000</td>
                            <td>40</td>
                            <td></td>
                            <td><button className="button edit">แก้ไข</button></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
      </div>
    );
}

export default Car;