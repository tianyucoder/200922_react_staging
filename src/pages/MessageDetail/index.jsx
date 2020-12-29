import React, { Component } from 'react'

export default class MessageDetail extends Component {
	render() {
		const {id,title,content} = this.props.match.params
		return (
			<ul>
					<li>ID：{id}</li>
					<li>TITLE：{title}</li>
					<li>CONTENT：{content}</li>
				</ul>
		)
	}
}
