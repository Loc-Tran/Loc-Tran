import React from 'react';
import './css/style.css';
import { Button } from './button.js';

const title = "Loc Tran - Software Developer";
const cvSharedLink = "https://www.dropbox.com/s/k6xvgkrpvnaigf4/Resume - Loc Tran - Personal Website.pdf?dl=0";
const email = "1991loctran@gmail.com";

class App extends React.Component {
  constructor(props) {
    super(props);
    document.title = title;
  }

  render() {
    return (
      <body id="top">
     		<header id="header">
     		    <h1><a href="#">Loc Tran</a></h1>
				    <nav className="nav">
					    <ul>
						    <li><a href="index.html">Home</a></li>
						    <li><a href={cvSharedLink} target="popup">CV</a></li>
						    <li><a href={"mailto:" + email}>Contact Me</a></li>
					    </ul>
				    </nav>
				</header>
      </body>
    );
  }
}

export default App;
