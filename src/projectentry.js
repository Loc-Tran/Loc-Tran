import React from 'react';

export class ProjectEntry extends React.Component { 
  render() {
    return (
	    <div class="6u">
		    <section class="special">
			    <a href="#" class="image fit"><img src={this.props.ImageSource} alt="" /></a>
			    <h3>{this.props.ProjectName}</h3>
			    <p>{this.props.ProjectDetailsText}</p>
			    <ul class="actions">
				    <li><a href={this.props.ProjectLink} class="button alt">More Details</a></li>
			    </ul>
		    </section>
	    </div>
    );
  }
}
