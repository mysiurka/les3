import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';


class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <SayFullName name="Vanya" surname="Sukach" link="telegram.org" />
        <SayFullName name="Alyona" surname="Sukach" link="telegram.org" />
        <SayFullName name="Josh" surname="Oekunle" link="telegram.org" />
    </div>
    );
  }
}

function SayFullName(props) {
  return (
    <div>
      <h1> Мое имя {props.name}, фамилия {props.surname}</h1>
      <a href={props.link}>ссылка на мой профиль</a>  
    </div>
    )
} 

export default App;