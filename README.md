## 笔记

### 1.用脚手架编写Weather组件
			(1).建立如下文件结构：
						--src
								index.js ==> 入口文件，要引入：React，ReactDOM，App
								App.jsx ==>整个应用的外壳组件
								--components ==>专门用于存放程序员写的组件
										Weather.jsx ==>天气组件(自己要写的功能组件)
						--public ==>用于存放静态资源
								favicon.ico ==> 网站页签图标
								index.html ==> 应用界面
			(2).注意点：
						 1). import React,{Component} from 'react' 不是解构赋值！
						 2). html中容器的id，必须和index.js中写的容器相对应。
						 3). App是外壳组件，里面通常引入其他组件使用。
								