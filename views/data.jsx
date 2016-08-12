import React from 'react';

export default class Names extends React.Component {
	render() {
		const names = this.props.names.map(name => 
			<li key={name}>{name}</li>
		);
		return <ul>{names}</ul>;
	}
}