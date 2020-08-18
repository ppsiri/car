import React, { Component } from 'react';
import './App.css';
import './menu.css';
import NevUser from './nevbar_user.js';
import MenuUser from './menu_user.js';
import { Inject,ScheduleComponent,Day,Week,WorkWeek,Month,Agenda } from '@syncfusion/ej2-react-schedule';

const Calenda = () => {
    return (
      <div className="contain">
        <NevUser />
        <MenuUser />
        <div className="form">
            <div>
                <div className="panding">
                    <h5 align="left">
                        ปฏิทินการจองรถ
                    </h5>
                </div>
                <div className="panding">
                    <ScheduleComponent currentView='Month'>
                        <Inject services={[Day , Week, WorkWeek, Month, Agenda]} />
                    </ScheduleComponent>
                </div>
            </div>
        </div>
      </div>

    );
}


export default Calenda;