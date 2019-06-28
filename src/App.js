import React from 'react';
import './App.css'; 
import fbMessanger from './images/Facebook_Messenger.png'; 

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fbMessengerUrl: "https://m.me/340475816632093" }
  }

  onclick = () => {
    window.open(this.state.fbMessengerUrl, "", "width=600,height=800");
  }

  render() {
    return (       
      <div className="App" >
        <div className="fb-label-div">
          <h1 className="fb-label">
            facebook messanger
          </h1>
        </div>
        <div className="Container">
          <a href="#" onClick={this.onclick}>
            <img src={fbMessanger} className="Image" />
          </a>
          <p className="Message">Message Us</p>
        </div>
      </div>
    );
  }
}


