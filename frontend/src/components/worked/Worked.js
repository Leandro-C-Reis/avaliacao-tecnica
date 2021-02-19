import React from 'react';
import { Card } from 'react-materialize';
import 'materialize-css';
import '../../css/worked.css';

const Worked = (props) => {

    return (
        <>
        <Card className={`row teal lighten-2 animation ${props.hide ? 'hide' : ''}`}>
            <Card className="hoverable  grey lighten-2">
                Inicio: <span className="bold">00:00</span>
            </Card >
            <Card className="hoverable grey lighten-2">
                Término: <span className="bold">00:00</span>
            </Card>
            <Card className="hoverable grey lighten-2">
                Total trabalhado: <span className="bold">00:00</span>
            </Card>
            <Card className="col s6 m5 l6 1 hoverable grey lighten-2">
                Total diurno: <span className="bold">00:00</span>
            </Card>
            <Card className="col s6 m5 l6 hoverable grey lighten-2">
                Total noturno: <span className="bold">00:00</span>
            </Card>
        </Card>
        </>
    );
};

export default Worked;