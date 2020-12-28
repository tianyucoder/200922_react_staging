import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {

	getStudentsInfo = ()=>{
		axios({
			url:'http://localhost:3000/students',
			method:'GET'
		}).then(
			response => {console.log('成功了',response.data)},
			error => {console.log('失败了',error)}
		)
	}

	render() {
		return (
			<div>
				<button onClick={this.getStudentsInfo}>点我获取学生信息</button>
			</div>
		)
	}
}
