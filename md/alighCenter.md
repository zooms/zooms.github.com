# 垂直居中 
**基本html结构**

    <div class="out-box align-center">
        <div class="box">相对定位和绝对定位</div>
    </div>  

**基本css样式**  

    .out-box{
        background: #27AE60;
        height: 200px;    
        border: 1px solid #555;    
        margin-bottom: 20px;
    }
    .box{
        width: 300px;
        height: 100px;
        background: #555;
    }

  
## 1. 定位布局 
**利用`relative`和`absolute`进行布局**  
 ###style 
  
  
     .align-center{
        position: relative;
    }
    .align-center .box{
        position: absolute;
        margin-left: -150px;
        margin-top: -50px;
        left: 50%;
        top: 50%;            
    } 

**优点：适合用于长宽固定的情况**   
**缺点：长和宽一旦需要改变需要重置`marginleft`和`margin-top`** 

##2. css3属性transform和定位进行布局  
###style

     .align-center{    
        position: relative;
    }    
    .align-center .box{
        position: relative;
        transform: translate(-50%,-50%);
        left: 50%;
        top: 50%;
    }
**优点：对盒子长宽没有要求,属于百分比布局**   
**缺点：`transform`属于css3属性，低版本ie不支持**  

## 3.table table-cell布局  
### style


    .align-center{    
        display: table;
        width: 100%;
    }    
    .align-center .box{
        display: table-cell;
        text-align: center;
        vertical-align: middle; 
    }
**优点：纯table各浏览器不会有兼容问题；内容可自适应；**   
**缺点：不易于扩展，即将淘汰的技术**  

## 4.flex布局  
### style
        .align-center4{    
            display: flex;
            display: -webkit-flex;
            align-items: center;
            justify-content: center;
        }    
        .align-center4 .box{}
**优点：简单，快速。为了更简单的布局而产生的一种布局技术**   
**缺点：兼容ie9+,需要加前缀**   


**<a href="http://zooms.github.io"> 更多前端精彩</a>**