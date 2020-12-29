import React, { Component } from 'react'
// import axios from 'axios'

export default class App extends Component {

	getStuInfo = async()=>{

		//使用axios发送请求
		/* axios.get('/students').then(
			response => {console.log('请求成功了',response.data)},
			error => {console.log('请求失败了',error)}
		) */

		/* try {
			const result = await axios.get('/students')
			console.log(result.data)
		} catch (error) {
			console.log('失败了，因为：',error.message)
		} */

		//使用fetch发送请求(then的链式调用写法)
		/* fetch('http://localhost:3000/students').then(
			response => {
				console.log('联系服务器成功了',response)
				return response.json()
			},
		)
		.then(
			response => {console.log('请求成功了',response)},
		)
		.catch(
			(error)=>{console.log('失败了',error)}
		) */

		//使用fetch发送请求(async、await写法)
		try {
			const response = await fetch('http://localhost:3000/students')
			const result = await response.json()
			console.log(result)
		} catch (error) {
			console.log('失败了，因为：',error.message)
		}

	}



	render() {
		return (
			<div>
				<button onClick={this.getStuInfo}>点我获取学生数据</button>
			</div>
		)
	}
}
