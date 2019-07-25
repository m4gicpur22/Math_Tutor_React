import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavBar  from './Components/Landing/NavBar';
import { Provider } from 'react-redux';
import store from './Store';
import { loadUser } from './Actions/AuthAction';
import { 
  Container,
 } from "reactstrap";
 import Carousel from './Components/Landing/Carousel';
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
          <Carousel/>
      </div>
      </Provider>
    );
  }

}

export default App;