import React, { Component } from 'react'
import qs from 'querystring'

export default class MessageDetail extends Component {
	render() {
		const {search} = this.props.location
		const data = qs.parse(search.slice(1))
		const {id,title,content} = data
		return (
			<ul>
					<li>ID：{id}</li>
					<li>TITLE：{title}</li>
					<li>CONTENT：{content}</li>
				</ul>
		)
	}
}
