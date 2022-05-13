import Users from "./cards";
import "./styles.css";
import "./images/github.png";
import React, { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { users_data: [], loading: false };
    this.updateState = this.updateState.bind(this);
  }
  updateState() {
    this.setState({ loading: true });

    setTimeout(
      async function () {
        const response = await fetch("https://reqres.in/api/users?page=1");//The given Api
        const jsonresponse = await response.json();
        console.log(jsonresponse);
        this.setState({ users_data: jsonresponse["data"], loading: false });
      }.bind(this),
      2000
    );
  }
  render() {
    return (
      <>
        <nav className="navbar">
          <div className="navitems">
            
            <h2>LGM VIP-Web</h2>
            <button className="fetchbtn" onClick={this.updateState}>
              Show Users
            </button>
           
          </div>
          {/* <footer role="contentinfo" class="footer">
          <div class="row">
     
      <ul class="footer__social-links">
        <li class="footer__social-link-item">
          <a href="https://twitter.com/MaheshBandewar4" title="Link to Twitter Profile">
            <img src="./images/twitter.svg" class="footer__social-image" alt="Twitter"/>
          </a>
        </li>
        <li class="footer__social-link-item">
          <a href="https://github.com/Maheshpb411" title="Link to Github Profile">
          <img id="currentPhoto" src="./images/github.svg" onerror="this.onerror=null; this.src='Default.jpg'" alt="" width="100" height="120"/>

          </a>
        </li>
       
        <li class="footer__social-link-item">
          <a href="https://www.linkedin.com/in/mahesh-bandewar-34053a201/">
            <img src="linkedin.svg" title="Link to Linkedin Profile" class="footer__social-image" alt="Linkedin"/>
          </a>
        </li>

       
      </ul>

     
      <p>
        &copy; 2021 -Designed & Developed by Mahesh 
      </p>
     
    </div>
  </footer> */}
         </nav>
         
        <div className="userdatacontainer">
          <Users loading={this.state.loading} users={this.state.users_data} />
        </div>
      </>
    );
  }
}
export default App;
