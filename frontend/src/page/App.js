import React, { useState, useCallback, useEffect, Image } from 'react';
import "materialize-css";
import { Row } from 'react-materialize';
import Timer from '../components/timer/Timer';
import Worked from '../components/worked/Worked';
import Header from '../components/header/Header';

const App = () => {
    const [hide, setHide] = useState(true);
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);

    const handleSetTime = useCallback(async (time, name) => {
        if (name == 'start')
        {
            setStartTime(time);
        }
        else if (name == 'end')
        {
            setEndTime(time);
        }
    }, []);

    useEffect(() => {
        if (startTime && endTime)
        {
            setHide(false);
        }
    }, [startTime, endTime]);

    return (
        <>
        <Header />
        <div className="container row valign-wrapper" id="app">
            <Row className="container">
                <Timer title="HORÁRIO INICIAL:" time={handleSetTime} name="start"/>
                <Timer title="HORÁRIO FINAL:" time={handleSetTime} name="end"/>
                <Worked hide={hide}/>
            </Row>
        </div>
        </>
    )
}

export default App;