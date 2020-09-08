import React, { Component } from 'react';
import "./assets/styles/index.css"
import Landing from './pages/Landing'


class App extends Component{
    render(){
        return (
            <div className="App">
               <Landing />
            </div>
        )
    }
}

export default App;