import React from 'react';
import { Card } from 'react-materialize';
import 'materialize-css';
import '../../css/worked.css';

const Worked = (props) => {

    return (
        <>
        <Card className={`row grey lighten-2 ${props.hide ? 'hide' : ''}`}>
            <Card className="green lighten-1 hoverable">
                Inicio: <span className="bold">00:00</span>
            </Card >
            <Card className="green lighten-1 hoverable">
                Término: <span className="bold">00:00</span>
            </Card>
            <Card className="green lighten-1 hoverable">
                Total trabalhado: <span className="bold">00:00</span>
            </Card>
            <Card className="col s6 m5 l6 yellow lighten-1 hoverable">
                Total DIA: <span className="bold">00:00</span>
            </Card>
            <Card className="col s6 m5 l6 teal darken-2 white-text">
                Total NOITE: <span className="bold">00:00</span>
            </Card>
        </Card>
        </>
    );
};

export default Worked;