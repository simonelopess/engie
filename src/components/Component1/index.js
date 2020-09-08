import React from 'react';
import './index.css';

class Component1 extends React.Component{

    constructor(props){
        super(props)
        this.state={
            item: ""
        }
    }

    alterarItem = e =>{
        this.setState({item: e.target.value})
        
    }

    render(){
        return (
            <>
                <header>
                    <div className="select-block">
                        <select name="select-list" value={this.state.item} onChange={this.alterarItem} >
                            <option value="item1">{this.props.text}</option>
                            <option value="item2">Item2</option>
                            <option value="item3">Item3</option>
                        </select>    
                        <div className="local">
                            <span>Área: </span><span className="local">{this.props.local}</span>
                        </div>           
                    </div>
                    <div>
                        <p className="status">{this.props.status}</p>
                    </div>            
                </header>
                <div className="info">
                    <div className="serial">
                        <p className="serial-tag">Serial</p>
                        <p className="serial-number">{this.props.serialNumber}</p>
                    </div>
                    <div className="date-install">
                        <p className="date-install-tag">Data de Instalação</p>
                        <p className="date-install-number">{this.props.dateInstall}</p>
                    </div>
                    <div className="date-concert">
                        <p className="date-lastConcert-tag">Última Manutenção</p>
                        <p className="date-lastConcert-number">{this.props.dateLastConcert}</p>
                    </div>
                </div>
                <div className="operatingTime">
                    <p>Tempo Atual de Funcionamento</p>
                    <div className="current-operatingTime">{this.props.currentDay}d {this.props.currentTime}h {this.props.currentMinutes}m {this.props.currentSeconds}s </div>
                </div>
                <div className="operatingTime">
                    <p>Funcionamento Total Até Última Manutenção</p>
                    <div className="total-operatingTime">{this.props.operatingTime}h </div>
                </div>
            </>
        )
    }
}


export default Component1;