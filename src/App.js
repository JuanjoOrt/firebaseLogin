import React from 'react';
import Login from './components/Login/index'
import Home from './components/Home/index'
import { Provider } from 'react-redux'
import './assets/estilos.css';
import { Route } from "wouter";
import createStorage from './store/createStore';
import firebase from 'firebase';
import Firebase, { FirebaseContext } from 'firebase';

const store = createStorage();

function App() {
  return (
    <div>
      <Provider store={store}>
        <Route path="/" component={Home} />
        <Route path="/login" component={Login} />
      </Provider>
    </div>
  );
}

export default App;
