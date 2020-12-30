import React, { Component } from 'react'
import {NavLink,Switch,Route} from 'react-router-dom'
import HomeMessage from '../HomeMessage'
import HomeNews from '../HomeNews'

export default class Home extends Component {
	back = ()=>{
		this.props.history.goBack()
	}
	forward = ()=>{
		this.props.history.goForward()
	}
	go = ()=>{
		this.props.history.go(-2)
	}
	render() {
		return (
			<div>
				<h2>Home组件内容</h2>
				<div>
					{/* 导航区 */}
					<ul className="nav nav-tabs">
						<li>
							<NavLink activeClassName="navigation" className="list-group-item" to="/home/news">News</NavLink>
						</li>
						<li>
							<NavLink activeClassName="navigation" className="list-group-item" to="/home/message">Message</NavLink>
						</li>
					</ul>
					<Switch>
						<Route path="/home/news" component={HomeNews}/>
						<Route path="/home/message" component={HomeMessage}/>
					</Switch>
					<button onClick={this.back}>后退</button>
					<button onClick={this.forward}>前进</button>
					<button onClick={this.go}>测试一下go</button>
				</div>
			</div>
		)
	}
}
