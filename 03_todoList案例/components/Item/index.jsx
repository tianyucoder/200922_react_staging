import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

	state = {mouseIsEnter:false}

	//鼠标移入移出的回调
	handleMouse = (mouseIsEnter)=>{
		return ()=>{
			this.setState({mouseIsEnter})
		}
	}

	//删除按钮的回调
	handleDelete = (index)=>{
		return ()=>{
			if(window.confirm('确定删除吗')){
				this.props.deleteTodo(index)
			}
		}
	}

	//勾选or取消勾选的回调
	handleCheck = (id)=>{
		return (event)=>{
			this.props.updateTodo(id,event.target.checked)
		}
	}

	render() {
			const {id,name,done} = this.props
			const {mouseIsEnter} = this.state
			return (
				<li 
					onMouseEnter={this.handleMouse(true)} 
					onMouseLeave={this.handleMouse(false)}
					className={mouseIsEnter ? 'active' : ''}
				>
					<label>
						<input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
						<span>{name}</span>
					</label>
					<button 
						className="btn btn-danger" 
						style={{display: mouseIsEnter ? 'block' : 'none'}}
						onClick={this.handleDelete(id)}
					>删除</button>
				</li>
			)
	}
}
