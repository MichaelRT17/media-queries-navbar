import React, { Component } from 'react';
import './reset.css';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      navmenu: false
    }
  }
  render() {
    return (
      <div>
        <header className='header'>
          <h1 className="title">Start Bootstrap</h1>
          <div className='differentdisplay'>
            <h3>SERVICES</h3>
            <h3>PORTFOLIO</h3>
            <h3>ABOUT</h3>
            <h3>TEAM</h3>
            <h3>CONTACT</h3>
          </div>
          <button className='menubutton' onClick={() => this.setState({ navmenu: !this.state.navmenu })}>
            MENU<img height='20px' width='20px' src='http://chittagongit.com//images/white-menu-icon/white-menu-icon-12.jpg' alt='' /></button>
        </header>
        <nav className={this.state.navmenu ? "navbar" : "hiddenavbar"}>
          <h3 className={this.state.navmenu ? "dropmenu" : "dropmenuhidden"}>SERVICES</h3>
          <h3 className={this.state.navmenu ? "dropmenu" : "dropmenuhidden"}>PORTFOLIO</h3>
          <h3 className={this.state.navmenu ? "dropmenu" : "dropmenuhidden"}>ABOUT</h3>
          <h3 className={this.state.navmenu ? "dropmenu" : "dropmenuhidden"}>TEAM</h3>
          <h3 className={this.state.navmenu ? "dropmenu" : "dropmenuhidden"}>CONTACT</h3>
        </nav>
        <main className='container'>
          <h1 id='welcome'>Welcome To Our Studio!</h1>
          <h1 id='meetyou'>IT'S NICE TO MEET YOU</h1>
          {/* <button id='morebutton'>TELL ME MORE</button> */}
          <img className='mainimg'
            src='https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/SsLYSh45lizrfzvep/videoblocks-top-view-woman-using-tablet-device-with-green-screen-at-office-table-background-with-white-and-blue-objects-items-hands-scrolling-swiping-pages-chroma-key_h-bxdylnez_thumbnail-full01.png' alt='' />
        </main>
      </div>
    );
  }
}

export default App;
