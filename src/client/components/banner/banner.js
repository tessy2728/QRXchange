import React, { Component } from 'react';
import '../../css/App.css';

class Banner extends Component {
  render() {
    return (
      <div className="flexContainer flexCenter itemCenter fullHeight bannerImage">
        <div className="flexContainer flexCenter itemCenter fullHeight">
          <a href="index.html" className="homeButton">
            Return Home
          </a>
        </div>
      </div>
    );
  }
}
export default Banner;
