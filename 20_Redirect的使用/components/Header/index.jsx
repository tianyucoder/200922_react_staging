import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

class Header extends Component {
	componentDidMount(){
		console.log('Header组件收到的props是：',this.props)
	}

	back = ()=>{
		this.props.history.goBack()
	}

	render() {
		return (
			<div className="row">
				<div className="col-xs-offset-2 col-xs-8">
					<div className="page-header">
						<h2>React Router Demo</h2>
						<button onClick={this.back}>后退</button>
						<button>前进</button>
					</div>
				</div>
			</div>
		)
	}
}


export default withRouter(Header)
