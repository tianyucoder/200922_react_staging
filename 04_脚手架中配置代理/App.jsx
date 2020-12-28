import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
	state = {arr:[1,3,5,7,9]}

	getStudentsInfo = ()=>{
		axios.get('http://localhost:3000/api1/students').then(
			response => {console.log('成功了',response.data)},
			error => {console.log('失败了',error)}
		)
	}
	getCarsInfo = ()=>{
		axios.get('http://localhost:3000/api2/cars').then(
			response => {console.log('成功了',response.data)},
			error => {console.log('失败了',error)}
		)
	}

	render() {
		return (
			<div>
				<button onClick={this.getStudentsInfo}>点我获取学生信息</button>
				<button onClick={this.getCarsInfo}>点我获取车的信息</button>
				{
					this.state.arr.map((item)=>{
						return <div>{item}</div>
					})
				}
			</div>
		)
	}
}
