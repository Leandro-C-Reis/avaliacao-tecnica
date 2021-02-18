import React, { useState, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { TimePicker, Card, Row, Col } from 'react-materialize';

const Timer = (props) => {
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [color, setColor] = useState('black-text');

    let Hour = hour;
    let Minute = minute;

    function UpdateTimeHandler()
    {
        setHour(Hour);
        setMinute(Minute);
        setColor('purple-text lighten-2');
        
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
            <Card className="yellow lighten-1 black-text hoverable">
                <h5 
                    style={{
                        fontWeight: '500',
                        letterSpacing: '1px'
                    }}
                >
                    {props.title}
                </h5>
                <TimePicker 
                    className="black-text center-align "
                    options={options} 
                    onChange={(h, m) => {
                        Hour = h;
                        Minute = m;
                    }}
                />  
                <h4 className={`center-align ${color}`}>
                    {`${hour < 9 ? '0' + hour : hour}:${
                        minute < 9 ? '0' + minute : minute
                    }`}
                </h4>
            </Card>
        </Row> 
    );
};

export default Timer;