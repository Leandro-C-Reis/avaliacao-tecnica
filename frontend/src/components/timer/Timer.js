import React, { useState, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { TimePicker, Card, Row, Col } from 'react-materialize';

const Timer = (props) => {
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [color, setColor] = useState('#212121');

    let Hour = hour;
    let Minute = minute;

    function UpdateTimeHandler()
    {
        setHour(Hour);
        setMinute(Minute);
        setColor('white');
        
        if (props.name)
        {
            props.time({ hour, min: minute }, props.name);
        }
    }

    const options = {
        autoClose: false,
        container: null,
        defaultTime: 'now',
        duration: 350,
        fromNow: 0,
        i18n: {
            cancel: 'Cancel',
            clear: 'Clear',
            done: 'Ok'
        },
        onCloseEnd: UpdateTimeHandler,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        onSelect: null,
        showClearBtn: false,
        twelveHour: false,
        vibrate: false
    };

    return (
        <Row>
            <Card className="hoverable teal lighten-3">
                <h5
                    style={{
                        fontFamily: 'Teko',
                        fontWeight: '500',
                        letterSpacing: '1px',
                        color: '#212121'
                    }}
                >
                    {props.title}
                </h5>
                <TimePicker 
                    className="center-align"
                    options={options} 
                    onChange={(h, m) => {
                        Hour = h;
                        Minute = m;
                    }}
                />  
                <h4 className="center-align"
                    style={{
                        color: color
                    }}    
                >
                    {`${hour < 9 ? '0' + hour : hour}:${
                        minute < 9 ? '0' + minute : minute
                    }`}
                </h4>
            </Card>
        </Row> 
    );
};

export default Timer;