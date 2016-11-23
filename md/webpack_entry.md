# webpack入门
**注：$ 表示代码在cmd中执行，运行是不加$**   
  * **案例一  webpack入门初窥**  
  目录结构  app  
 ---- index.hml    
 ---- entry.js
 ---- bundle.js（自动生成）

>1.  利用npm安装webpack    
  		`$ npm install webpack -g`  
>2.  新建文件entry.js  
>
		document.write('Hello World!');		
  
>3.  新建index.html  
>		
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<title>hello</title>
		</head>
		<body>
			<script src="bundle.js"></script>
		</body>
		</html>
>4.  使用webpack自动构建  
      `$ webpack ./entry.js bundle.js`
成功后会自动在当前目录下生成bundle.js文件
>5.  打开index.html 可见 `Hello world`

  **webpack案例一结束**

* **案例二 webpack入门**
>1.新建 content.js  
>
	module.exports = "It works from content.js.";

>2.修改案例一中 entry.js 修改后entry.js如下
>
	 document.write(require("./content.js"));

>3.同案例一第4步 
	`$ webpack ./entry.js bundle.js`  
>4.打开index.html 显示如下
>	
	It works from content.js.

* **案例三 webpack css加载**  
>1. 安装css解析器   `npm install css-loader style-loader`
 
>2. 新建style.css文件如下：  
>
		 body {
	   		 background: yellow;
		}

>3. 更新entry.js
> 
		  require("!style!css!./style.css");
		  document.write(require("./content.js"));

>4. 重新构建bundle.js `$ webpack ./entry.js bundle.js`  
>5. 打开index.html
*小技巧*  
entry.js中  
require("!style!css!./style.css");加载过于复杂
可以用 require("./style.css");替代但是在构建bundle.js的时候要这样写：  
	`$ webpack ./entry.js bundle.js --module-bind 'css=style!css'`     

* **案例四 webpack.config.js 配置文件设置**    

>1.新建 webpack.config.js  

			module.exports = {
		    entry: "./entry.js",  //入口文件
		    output: {  //生成的文件
		        path: __dirname,  //获取当前路径
		        filename: "bundle.js"   //自动go构建文件的名称
		    },
		    module: { //模块解释器 如 后缀不同 解释器不同
		        loaders: [
		            { test: /\.css$/, loader: "style!css" }
		        ]
		    }
		};

>2.有了新的配置文件，可以用webpack 直接运行  
 `$ webpack`
效果与案例三相同	 


<i>Tip: 控制台输出颜色控制（未测试过）  </i>  
 开启:  `$ webpack --progress --colors`  
关闭: `$ webpack --progress --colors --watch`

* **利用webpack 构建8080服务器**    
>1. 执行 `$ npm install webpack-dev-server -g`
>2. 执行 `$ webpack-dev-server --progress --colors`
>3. 浏览器打开 `localhost:8080`


   
**谢谢浏览**