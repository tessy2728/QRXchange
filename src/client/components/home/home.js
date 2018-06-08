import React, { Component } from "react";
import '../../css/App.css';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = { username: null };
  }
  componentDidMount() {
    fetch("/api/getUsername")
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }
  render() {
    return (
      <div className="flexContainer flexItem">
        <main className="flexItem whiteBackground main">
          {this.state.username ? (
            <h1>Hello {this.state.username}</h1>
          ) : (
            <h1>Loading.. please wait!</h1>
          )}
          <a href="index.html" className="homeButton">
            Return Home
          </a>
        </main>
        <aside className="sidebar sidebarLeft">
          <h2>Left Sidebar</h2>
          <p>Put your content here</p>
        </aside>
        <aside className="sidebar sidebarRight">
          <h2>Right Sidebar</h2>
          <p>Put your content here</p>
        </aside>
      </div>
    );
  }
}
export default Footer;
