import React, { Component } from 'react';
import './App.css';
import './menu.css';
import NevAdmin from './nevbar_admin.js';
import MenuAdmin from './menu_admin.js';
import { Inject,ScheduleComponent,Day,Week,WorkWeek,Month,Agenda } from '@syncfusion/ej2-react-schedule';

const CalendaAdmin = () => {
    return (
      <div className="contain">
        <NevAdmin />
        <MenuAdmin />
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


export default CalendaAdmin;