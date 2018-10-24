import React from 'react';
import logo from "./logo.svg";
import './App.css';

function Hi(props){
    return <div>Hello {props.name}!</div>
}

function MediaCard(props){
    return <div><h2 className="App-header">{props.options.title}<p>{props.options.body}</p><img className="App-logo" src={props.options.imageUrl.logo} alt="logo"></img></h2>{console.log(props)}</div>
}

function Gate(props){
    return <div>The Gate is {props.isOpen === true ? "open" : "closed"}</div>
}

function BasicApp(){
    return (
        <div className="App">
            <Hi name="Anvi" />
            <MediaCard options={{title:'Learning React', body:"learing react framework", imageUrl:{logo}}} />
            <Gate isOpen={true} />
        </div>
    );
}

export default BasicApp;