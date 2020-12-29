import React, { Component } from 'react'
import {NavLink,Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'

export default class App extends Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8">
						<div className="page-header"><h2>React Router Demo</h2></div>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-2 col-xs-offset-2">
						<div className="list-group">

							{/* 原生html中使用a标签实现【页面】的【跳转】 */}
							{/* <a className="list-group-item" href="./about.html">About</a>
							<a className="list-group-item" href="./home.html">Home</a> */}

							{/* react中使用Link标签实现【组件】的【切换】------编写路由导航 */}
							<NavLink className="list-group-item" activeClassName="navigation" to="/about">About</NavLink>
							<NavLink className="list-group-item" activeClassName="navigation" to="/home">Home</NavLink> 

						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								{/* 展示区要根据路径去决定展示哪个组件----注册路由 */}
								<Route path="/about" component={About}/>
								<Route path="/home" component={Home}/>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
