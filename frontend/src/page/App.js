import React from 'react';
import "materialize-css";
import Timer from '../components/timer/Timer';
import Worked from '../components/worked/Worked';
import { CardPanel, Col, Row } from 'react-materialize';

const App = () => {
    return (
        <div className="container row valign-wrapper" id="app">
            <Row className="container">
                <Timer title="HORÁRIO INICIAL:"/>
                <Timer title="HORÁRIO FINAL:"/>
                <Worked hide={false}/>
            </Row>
            
        </div>
    )
}

export default App;