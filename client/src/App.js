import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavBar  from './Components/Landing/NavBar';
import { Provider } from 'react-redux';
import store from '../store';
import { createStore, applyMiddleware } from 'redux';
import { loadUser } from './Actions/AuthAction';
import { 
  Container,
 } from "reactstrap";
//First key is to set up the Landing page which will contain the NavBar 
class App extends Component {

  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
      <div className="App" >
          <NavBar/>
      </div>
      </Provider>
    )
  }

}

export default App;