import React from 'react';
import './State-React.css';

class Room extends React.Component{
    state = {
        isLit: true,
        temperature: 22
    }

    flipLight = () =>{
        this.setState({
            isLit: !this.state.isLit
        });
    };

    increaseTemp = () =>{
        this.setState({
            temperature: this.state.temperature + 1
        });
    }

    decreaseTemp = () =>{
        this.setState({
            temperature: this.state.temperature - 1
        });
    }

    render(){
        const brightness = this.state.isLit ? "lit" : "dark";
        return (
            <div className={`room ${brightness}`}>
                The room is {this.state.isLit ? 'lit' : 'dark'}
                <br />
                <button onClick={this.flipLight}>{this.state.isLit ? 'Switch Off' : 'Switch On'}</button>               
                <br/><br/>
                The temperature is {this.state.temperature} celsius.
                <br/>
                <button onClick={this.increaseTemp}>+</button>
                <button onClick={this.decreaseTemp}>-</button>                
            </div>
        );
    }    
}

export default Room;