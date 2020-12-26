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

	addTodo = (todoObj)=>{
		//获取原数据
		const {todos} = this.state
		//更新状态
		this.setState({todos:[todoObj,...todos]})
	}

	deleteTodo = (id)=>{
		const {todos} = this.state
		const newTodos = todos.filter((todoObj)=>{
			return todoObj.id !== id
		})
		this.setState({todos:newTodos})
		
		/* todos.splice(index,1)
		this.setState({todos:todos}) */
	}

	render() {
		return (
			<div className="todo-container">
				<div className="todo-wrap">
					<Add addTodo={this.addTodo}/>
					<List todos={this.state.todos} deleteTodo={this.deleteTodo}/>
					<Footer/>
				</div>
			</div>
		)
	}
}
