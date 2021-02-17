import React from 'react';
import 'materialize-css';
import { TimePicker, Card } from 'react-materialize';

const Timer = (props) => {
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
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        onSelect: null,
        showClearBtn: false,
        twelveHour: false,
        vibrate: true
    };

    return (
        <div className="container">
            <Card className="light-blue lighten-2 white-text hoverable">
                <h2>
                    {props.title}
                </h2>
                <TimePicker className="white-text"
                    options={options}
                />
            </Card>
        </div>
    );
};

export default Timer;