import React, { Component } from 'react'
import Item from '../Item'
import './index.css'

export default class List extends Component {
	render() {
		const {todos,deleteTodo,updateTodo} = this.props
		return (
			<ul className="todo-main">
				{
					todos.map((todoObj,index)=>{
						return (
							<Item
								key={todoObj.id} 
								index={index} {...todoObj} 
								deleteTodo={deleteTodo}
								updateTodo={updateTodo}
							/>
						)
						
					})
				}
			</ul>
		)
	}
}
