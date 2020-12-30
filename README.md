## 笔记

### 1.用脚手架编写Weather组件
			(1).建立如下文件结构：
						├── public ==> 用于存放静态资源
								├── favicon.ico ==> 网站页签图标
								├── index.html ==> 应用界面
						├── src
							  ├── index.js ==> 入口文件，要引入：React，ReactDOM，App
							  ├── App.jsx ==>整个应用的外壳组件
							  └── components ==>专门用于存放程序员写的组件
									  ├── Weather.jsx ==>天气组件(自己要写的功能组件)
			(2).注意点：
						 1). import React,{Component} from 'react' 不是解构赋值！
						 2). html中容器的id，必须和index.js中写的容器相对应。
						 3). App是外壳组件，里面通常引入其他组件使用。

### 2.TodoList案例
			(1).组件化编码流程:
					1. 拆分组件: 根据功能点划分组件。
					2. 实现静态组件: 使用组件实现静态页面效果。
					3. 实现动态组件
							3.1 动态显示初始化数据
									3.1.1 数据类型
									3.1.2 数据名称
									3.1.2 保存在哪个组件?
												某个组件用，放在自身；
												某些组件用，放在共同父组件中 ==> 状态提升
							3.2 交互(从绑定事件监听开始)
			(2).状态在哪里，操作状态的方法就在哪里
			(3).关于父子之间通信：
						1.【父组件】给【子组件】传递数据：通过props传递
						2.【子组件】给【父组件】传递数据：通过props传递，要求父提前给子传递一个函数
			(4).兄弟组件之间通信：借助共同的父亲
			(5).关于checked和defaultChecked：
							1.什么时候用checked？
										不仅仅展示勾选的状态，后期还需要响应勾选的动作
										注意：用了checked，就必须用onChange
							2.什么时候用defaultChecked？
										仅仅展示勾选的状态
										注意：defaultChecked只管第一次渲染
							3.value和defaultValue也是同理的

												

### 3.脚手架配置代理
			1.第一种：直接在package.json中配置"proxy": "http://localhost:5000"
			2.第二种：建立配置文件，详见：老师分享的配置文档

### 4.github搜索案例相关知识点
		1.设计状态时要考虑全面，例如带有网络请求的组件，要考虑请求失败怎么办。
		2.消息订阅与发布机制
					1.先订阅，再发布（理解：有一种对讲机的感觉）
					2.适用于任意组件间通信
					3.要在组件的componentWillUnmount中取消订阅		

### 5.NavLink的使用
				1.NavLink可以实现路由链接的高亮，通过activeClassName指定样式名

### 6.Switch的使用
				1.通常情况下，path和component是一一对应的关系。
				2.Switch可以提高路由匹配效率(单一匹配)。

### 7.路由组件和一般组件的区别
			1.使用方式不同：
					一般组件：程序员自己写组件标签触发渲染，例如： <Demo/>
					路由组件：靠路由器匹配路径触发渲染，例如：<Route path="/about" component={Demo}/>
			2.存放位置不同
					一般组件：components
					路由组件：pages
			3.收到的props不同
					一般组件：程序员写标签时，传了什么，就收到什么
					路由组件：收到一个固定的对象，结构如下：
								history:
											action: "PUSH" ========> //当前路由的跳转模式
											go: ƒ go(n)
											goBack: ƒ goBack()
											goForward: ƒ goForward()
											push: ƒ push(path, state)========> //路由的push跳转
											replace: ƒ replace(path, state)========> //路由的replace跳转

									location:
											hash: ""
											key: "47zt8t"
											pathname: "/about"
											search: "" ========> //接收search参数
											state: null ========> //接收state参数

									match:
											isExact: true
											params: {} ========> //收集params参数
											path: "/about"
											url: "/about"

### 8.刷新页面样式丢失问题
				1.什么时候样式会丢失：当路径有多级结构时，刷新页面会造成样式的丢失
				2.如何解决：
						(1).index.html中引入自身服务器的资源时，不要写./ 要写/
						(2).index.html中引入自身服务器的资源时，不要写./ 要写%PUBLIC_URL%
						(3).HashRouter替代BrowserRouter

### 9.路由的严格匹配与模糊匹配
				1.默认使用的是模糊匹配
				2.开启严格匹配：<Route exact={true} path="/about" component={About}/>
				3.严格匹配不要随便开启，需要再开，开启会导致无法继续匹配二级路由

### 10.向路由组件传递参数
				1.params参数
							路由链接(携带参数)：<Link to='/demo/test/tom/18'}>详情</Link>
							注册路由(声明接收)：<Route path="/demo/test/:name/:age" component={Test}/>
							接收参数：this.props.match.params
				2.search参数
							路由链接(携带参数)：<Link to='/demo/test?name=tom&age=18'}>详情</Link>
							注册路由(声明接收)：<Route path="/demo/test" component={Test}/>
							接收参数：this.props.location.search
							备注：需要借助querystring进行解析
				3.state参数
							路由链接(携带参数)：<Link to={{pathname:'/demo/test',state:{name:'tom',age:18}}}}>详情</Link>
							注册路由(声明接收)：<Route path="/demo/test" component={Test}/>
							接收参数：this.props.location.state