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

	//添加todo
	addTodo = (todoObj)=>{
		//获取原数据
		const {todos} = this.state
		//更新状态
		this.setState({todos:[todoObj,...todos]})
	}

	//删除todo
	deleteTodo = (id)=>{
		const {todos} = this.state

		//使用filter通过id删除
		const newTodos = todos.filter((todoObj)=>{
			return todoObj.id !== id
		})
		this.setState({todos:newTodos})
		
		//使用splice通过index删除
		/* todos.splice(index,1)
		this.setState({todos:todos}) */
	}

	//更新todo
	updateTodo = (id,done)=>{
		const {todos} = this.state
		const newTodos = todos.map((todoObj)=>{
			if(todoObj.id === id) todoObj.done = done
			return todoObj
		})
		this.setState({todos:newTodos})
	}

	//勾选or取消勾选
	checkAll = (done)=>{
		const {todos} = this.state
		const newTodos = todos.map( todoObj =>({...todoObj,done}))
		console.log(newTodos)
		this.setState({todos:newTodos})
	}

	//清除已完成
	clearAllDone = ()=>{
		const {todos} = this.state
		const newTodos = todos.filter((todoObj)=>{
			return !todoObj.done
		})
		this.setState({todos:newTodos})
	}

	render() {
		const {todos} = this.state
		return (
			<div className="todo-container">
				<div className="todo-wrap">
					<Add addTodo={this.addTodo}/>
					<List todos={todos} deleteTodo={this.deleteTodo} updateTodo={this.updateTodo}/>
					<Footer todos={todos} checkAll={this.checkAll} clearAllDone={this.clearAllDone}/>
				</div>
			</div>
		)
	}
}
