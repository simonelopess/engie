import React from 'react';
import Component1 from '../../components/Component1';
import Component2 from '../../components/Component2';

import './styles.css';


function Landing() {
    return (
    
        <div className="container">
            <div className="row1">
                <div className="first-card">
                    <Component1
                        text="YK Teste"
                        local="Balcão Principal"
                        status="Operação Crítica"
                        serialNumber="345-755-MMF"
                        dateInstall="02/11/2006"
                        dateLastConcert="06/07/2019"
                        currentDay="16"
                        currentTime="14"
                        currentMinutes="12"
                        currentSeconds="32"
                        operatingTime="1306"
                    />
                </div>
                <div className="second-card">
                  <Component2/>
                </div>
            </div>
        </div>
    )
}

export default Landing;