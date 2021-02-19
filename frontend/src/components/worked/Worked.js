import React, { useState, useEffect } from 'react';
import { Card } from 'react-materialize';
import 'materialize-css';
import '../../css/worked.css';

const Worked = (props) => {
    const [dayTime, setDayTime] = useState('00:00');
    const [nightTime, setNightTime] = useState('00:00');
    const [startTime, setStartTime] = useState('00:00');
    const [endTime, setEndTime] = useState('00:00');

    function StringParse(hour, minute)
    {
        const hourString = `${hour <= 9 ? '0' + hour : hour}`;
        const minString = `${minute <= 9 ? '0' + minute : minute}`;

        return `${hourString}:${minString}`;
    }

    useEffect(() => {
        if (props.data.day && props.data.night)
        {
            const sTime = StringParse(props.data.start.hour, props.data.start.min);
            const eTime = StringParse(props.data.end.hour, props.data.end.min);
            const dTime = StringParse(props.data.day.hour, props.data.day.min);
            const nTime = StringParse(props.data.night.hour, props.data.night.min);

            setStartTime(sTime);
            setEndTime(eTime);
            setDayTime(dTime);
            setNightTime(nTime);
        }
    }, [props]);

    return (
        <>
        <Card className={`row teal lighten-2 animation ${props.hide ? 'hide' : ''}`}>
            <Card className="hoverable  grey lighten-2">
                Inicio: <span className="bold">{startTime}</span>
            </Card >
            <Card className="hoverable grey lighten-2">
                Término: <span className="bold">{endTime}</span>
            </Card>
            <Card className="hoverable grey lighten-2">
                Total trabalhado: <span className="bold">00:00</span>
            </Card>
            <Card className="col s6 m5 l6 1 hoverable grey lighten-2">
                Total diurno: <span className="bold">{dayTime}</span>
            </Card>
            <Card className="col s6 m5 l6 hoverable grey lighten-2">
                Total noturno: <span className="bold">{nightTime}</span>
            </Card>
        </Card>
        </>
    );
};

export default Worked;