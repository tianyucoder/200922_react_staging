import React, { Component } from 'react'
import Add from './components/Add'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {
	//初始化状态，因为Add要用todos(添加),而且List也要用(读)
	state = {
		todos:[
			{id:'001',name:'抽烟',done:true},
			{id:'002',name:'喝酒',done:false},
			{id:'003',name:'烫头',done:true}
		]
	}
	render() {
		return (
			<div className="todo-container">
				<div className="todo-wrap">
					<Add/>
					<List todos={this.state.todos}/>
					<Footer/>
				</div>
			</div>
		)
	}
}
