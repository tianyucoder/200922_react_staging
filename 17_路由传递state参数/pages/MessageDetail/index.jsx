import React, { Component } from 'react'
import qs from 'querystring'

export default class MessageDetail extends Component {
	render() {
		console.log(this.props)
		const {id,title,content} = this.props.location.state
		return (
			<ul>
					<li>ID：{id}</li>
					<li>TITLE：{title}</li>
					<li>CONTENT：{content}</li>
				</ul>
		)
	}
}
