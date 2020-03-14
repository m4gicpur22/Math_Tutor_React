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
 import Carousell from './Components/Landing/Carousel';
//First key is to set up the Landing page which will contain the NavBar
//this is our central homepage
class App extends Component {

  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
      <div className="App" >
          <NavBar/>
          {/* <Carousell/>  */}
      </div>
      </Provider>
    );
  }

}

export default App;