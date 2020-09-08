import React, {Component} from 'react';
import api from '../../services/api';

import './index.css';


export default class Component2 extends Component{
    
    
    state = {
        variable: {},
        status: {},
    }
    
    async componentDidMount(){
        const [variable, status] = await Promise.all([
            api.get(`/variable_raw`),
            api.get(`/variable_status`)
        ])
        
        this.setState({
            variable: variable.data,
            status: status.data
        })       
        this.interval = setInterval(()=>{
            this.setState();
        }, 8000)
    }
   
   render(){
       const {variable,status} = this.state;
       
       
        return (
            <>
                <h2>Tempo Real do Dispositivo</h2>
                <div className="temperaturas-row">
                    <div>
                        <p>{variable.current_measured} A</p>
                        <p>Corrente <br/>de Medida</p>
                    </div>
                    <div>
                        <p>{variable.current_nominal} A </p>
                        <p>Corrente <br/> Nominal</p>
                    </div>
                    <div>
                        <p>{variable.temp_environment} ºC</p>
                        <p>Temperatura<br/>Ambiente</p>
                    </div>                   
                </div>
                <div className="temperaturas-row">
                    <div>
                        <p>{variable.temp_insufflation} ºC</p>
                        <p>Temperatura <br/>de Insuflamento</p>
                    </div>
                    <div>
                        <p>{variable.temp_ll} ºC</p>
                        <p>Temperatura <br/> LL</p>
                    </div>
                    <div>
                        <p>{variable.voltage} V</p>
                        <p>Tensão<br/><br/></p>
                    </div>
                </div>
                <span className="quebra"></span>
               
                <div className="status-temp">
                    <div className="item-status">
                        <p style={{color: (status.compressor_status === 'Ligado' || status.compressor_status === 'Normal') ? '#39ff14' : 'red'}}>{status.compressor_status}</p>
                        <p>Status <br/> da Operação</p>
                    </div>
                    <div className="item-status">
                        <p style={{color: (status.current_measfut_status === 'Ligado' || status.current_measfut_status === 'Normal') ? '#39ff14' : 'red'}}>{status.current_measfut_status}</p>
                        <p>Status <br/> do comprenssor</p>
                    </div>
                    <div className="item-status">
                        <p style={{color: (status.current_measnom_status === 'Ligado' || status.current_measnom_status === 'Normal') ? '#39ff14' : 'red'}}>{status.current_measnom_status}</p>
                        <p>Corrente  <br/> Medida vs Nominal </p>
                    </div>
                    <div className="item-status">
                        <p style={{color: (status.operation_status === 'Ligado' ||status.operation_status === 'Normal') ? '#39ff14' : 'red'}}>{status.operation_status}</p>
                        <p>Corrente <br/>Medida vs Futura </p>
                    </div>       
                </div>
                
            </>
            
        )
    
    }

}



