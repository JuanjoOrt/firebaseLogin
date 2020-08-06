import React from 'react';
import Login from './components/Login'
import Home from './components/Home'
import './assets/estilos.css';
import { Route } from "wouter";
import firebase from 'firebase';
import Firebase, { FirebaseContext } from 'firebase';


function App() {
  return (
    <div>
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
    </div>
  );
}

export default App;
