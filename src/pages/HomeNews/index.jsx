import React, { Component } from 'react'

export default class HomeNews extends Component {
	/* componentDidMount(){
		this.timer = setTimeout(()=>{
			//编写一些代码，让路由自动跳转到/home/message
			this.props.history.replace('/home/message')
		},3000)
	} */

	componentWillUnmount(){
		clearTimeout(this.timer)
	}
	render() {
		return (
			<ul>
				<li>news001</li>
				<li>news002</li>
				<li>news003</li>
			</ul>
		)
	}
}
