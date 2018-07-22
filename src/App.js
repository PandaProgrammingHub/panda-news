import React, { Component } from 'react';
import Navbar from './components/navbar';
import Middlebar from './components/middle';
import Rightbar from './components/right'; 
import Footer from './components/footer';


class App extends Component {
  render() {
    return (
      <div className = "APP">
      <Navbar
      />
    <div className="w3-container w3-content" style={{"maxWidth":"1400px","marginTop":"80px"}}>  
        <div className="w3-row">
        <Middlebar 
         classes    = {this.props.classes}
        />
        <Rightbar
            classes = {this.props.classes}
         />
        </div>
    </div>
    <br />
      <Footer />
    </div>


    );
  }
}

export default App;
