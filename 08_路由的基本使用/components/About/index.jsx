import React, { Component } from 'react'

export default class About extends Component {

	componentWillUnmount(){
		console.log('About即将卸载')
	}

	componentDidMount(){
		console.log('About挂载完毕')
	}

	render() {
		return <h3>我是About的内容</h3>
	}
}
