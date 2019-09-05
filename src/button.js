import React from 'react';

export class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.props.handleClick.bind(this);
  }
  
  render() {
    return <button onClick={this.handleClick}>{this.props.name}</button>
  }
}

Button.defaultProps = {
  name: 'No Name',
  handleClick: ()=> {}
};
