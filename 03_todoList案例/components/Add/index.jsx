import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './index.css'

export default class Add extends Component {
	//添加一个todo的回调
	handleKeyUp = (event)=>{
		//获取用户输入
		let {value} = event.target
		//判断按键是否为回车
		if(event.keyCode !== 13) return
		//数据的校验
		if(value.trim() === '') return alert('输入内容不能为空')
		//准备好一个todoObj
		const todoObj = {id:uuidv4(),name:value,done:false}
		//将todoObj传给App
		this.props.addTodo(todoObj)
		event.target.value = ''
	}

	render() {
		return (
			<div className="todo-header">
				<input type="text" onKeyUp={this.handleKeyUp} placeholder="请输入你的任务名称，按回车键确认"/>
			</div>
		)
	}
}
