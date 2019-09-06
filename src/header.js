import React from 'react';

export class Header extends React.Component { 
  render() {
    return (
   		<header id={this.props.HeaderId} class={this.props.HeaderClass}>
   		    {this.props.HeaderTextElement}
          {this.props.HeaderOptionalElement}
			</header>
		);
  }
}
