import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
	render() {
		const {todos} = this.props
		const doneCount = todos.reduce((preValue,current)=>preValue + (current.done ? 1 : 0) ,0)
		return (
			<div className="todo-footer">
				<label>
					<input type="checkbox"/>
				</label>
				<span>
					<span>已完成{doneCount}</span> / 全部{todos.length}
				</span>
				<button className="btn btn-danger">清除已完成任务</button>
			</div>
		)
	}
}
