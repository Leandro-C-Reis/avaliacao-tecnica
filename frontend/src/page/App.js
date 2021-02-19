import React, { useState, useCallback, useEffect } from 'react';
import "materialize-css";
import { Row } from 'react-materialize';
import Timer from '../components/timer/Timer';
import Worked from '../components/worked/Worked';
import Header from '../components/header/Header';
import Api from '../service/Api';

const App = () => {
    const [hide, setHide] = useState(true);
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [inf, setInf] = useState({});
    const [data, setData] = useState({});

    const handleSetTime = useCallback(async (time, name) => {
        if (name === 'start')
        {
            setStartTime(time);
        }
        else if (name === 'end')
        {
            setEndTime(time);
        }
    }, []);

    async function handleCalculateWorkedHours()
    {
        const request = await Api.post('/worked_hours', {
            start: startTime,
            end: endTime
        });
        
        setData(request.data);
        setHide(false);
    }

    // Observa o estado de duas variaveis e executa uma operação de requisição
    useEffect(() => {
        if (startTime && endTime)
        {
            handleCalculateWorkedHours();
        }   
    }, [startTime, endTime]);

    // Observa o estado da variavel hide, evita loop infinito por mudança de estado
    useEffect(() => {
        if (hide === false)
        {
            setInf({ ...data, start: startTime, end: endTime});
        }
    }, [hide]);

    return (
        <>
        <Header />
        <div className="container row valign-wrapper" id="app">
            <Row className="container">
                <Timer title="HORÁRIO INICIAL:" time={handleSetTime} name="start"/>
                <Timer title="HORÁRIO FINAL:" time={handleSetTime} name="end"/>
                <Worked hide={hide} data={inf}/>
            </Row>
        </div>
        </>
    )
}

export default App;