import React from 'react';
import './css/style.css';

// templated html
import { Banner } from './banner.js';
import { Header } from './header.js';
import { ProjectEntry } from './projectentry.js';

// image import
import pic01 from './images/pic02.jpg';


const CVSharedLink = "https://www.dropbox.com/s/k6xvgkrpvnaigf4/Resume - Loc Tran - Personal Website.pdf?dl=0";
const email = "1991loctran@gmail.com";
const linkedinLink = "https://www.linkedin.com/in/loc-tran-715018b8/"

class App extends React.Component {
  constructor(props) {
    super(props);
    document.title = "Loc Tran - Software Developer";
    
		this.NavBar = (<nav className="header">
			    <ul>
				    <li><a href={CVSharedLink} target="popup">CV</a></li>
				    <li><a href={linkedinLink} target="popup">Linkedin</a></li>
				    <li><a href={"mailto:" + email}>Contact Me</a></li>
			    </ul>
		    </nav>
    );
  }

  render() {
    return (
      <body id="top">
      
        <Header HeaderId="header" HeaderClass="skel-layers-fixed" HeaderTextElement=<h1>Loc Tran</h1> HeaderOptionalElement={this.NavBar} />
				<Banner SectionId="banner" TextCSSId="inner" h2Text="Online Portfolio"/>
				<section id="one" class="wrapper style1">
				  <Header HeaderId="one" HeaderClass="major" HeaderTextElement=<h2>About Me</h2> HeaderOptionalElement=<p>I'm a UNSW Computer Science postgraduate student and have been working professionally for 2 years. My specialities lie within full stack and video game development. I am also interested in artificial intelligence.</p> />
			  </section>
				<section id="two" class="wrapper style2">
				  <Header HeaderClass="major" HeaderTextElement=<h2>Projects</h2>  HeaderOptionalElement=<p>Here are the projects I've personally worked on.</p> />
				  <div class="container">
					  <div class="row">
					    <ProjectEntry ImageSource={pic01} ProjectName="Guy standing here" ProjectLink="http://www.google.com" ProjectDetailsText="Eget mi ac magna cep lobortis faucibus accumsan enim lacinia adipiscing metus urna adipiscing cep commodo id." />
					    					    <ProjectEntry ImageSource={pic01} ProjectName="Guy standing here" ProjectLink="http://www.google.com" ProjectDetailsText="Eget mi ac magna cep lobortis faucibus accumsan enim lacinia adipiscing metus urna adipiscing cep commodo id." />
					  </div>
				  </div>
			  </section>
			  
			<footer id="footer">
					<ul class="copyright">					  
						<li>&copy; Loc Tran. All rights reserved.</li>
						<li>Design: <a href="http://templated.co">TEMPLATED</a> (Modified as needed)</li>
						<li>Images: Loc Tran</li>
					</ul>
			</footer>
      </body>
      
    );
  }
}

export default App;
