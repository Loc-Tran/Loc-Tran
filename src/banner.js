import React from 'react';

export class Banner extends React.Component {
  render() {
    return (
			<section id={this.props.SectionId}>
				<div class={this.props.TextCSSId}>
					<h2>{this.props.h2Text}</h2>
					<p>{this.props.pText}</p>
				</div>
			</section>
		);
  }
}
