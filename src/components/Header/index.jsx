import React, { Component } from 'react'

export default class Header extends Component {
	componentDidMount(){
		//console.log('Header组件收到的props是：',this.props)
	}
	render() {
		return (
			<div className="row">
				<div className="col-xs-offset-2 col-xs-8">
					<div className="page-header"><h2>React Router Demo</h2></div>
				</div>
			</div>
		)
	}
}
