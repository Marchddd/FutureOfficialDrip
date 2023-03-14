                var mouse=document.getElementsByClassName("mouse")[0];
				 var icont=document.getElementsByClassName("icont")[0];
				 var iconb=document.getElementsByClassName("iconb")[0];
				 //绑定鼠标移动事件
				 document.onmousemove=function(event){
				 	//解决兼容性问题
				 	event=event||window.event;
				 	//获取滚动条滚动的距离
				 	var st=document.documentElement.scrollTop;
				 	var left=event.clientX;
				 	var top=event.clientY+st;
				 	//设置div的偏移量
                     if(left>=document.body.clientWidth-10){
                        left=document.body.clientWidth-10;
                     }
                     
                     if(top>=document.body.clientHeight-60){
                        top=document.body.clientHeight-60;
                     }
				 	mouse.style.left=(left-16)+"px";
				 	mouse.style.top=(top-16)+"px";
				 };
				 document.onmousedown=function(){
					 mouse.style.height="30px";
					 mouse.style.width="30px";
					 icont.style.opacity=1;
					 icont.style.top="-20px";
					 iconb.style.opacity=1;
					 iconb.style.bottom="-5px";
				 }
				 document.onmouseup=function(){
					 mouse.style.height="25px";
					 mouse.style.width="25px";
					 icont.style.opacity=0;
					 icont.style.top="-30px";
					 iconb.style.opacity=0;
					 iconb.style.bottom="-25px";
				 }
/*等鼠标放上登录页面是跟随取消*/
var center=document.getElementsByClassName("center")[0];
var mouse=document.getElementsByClassName("mouse")[0];
var denglu=document.getElementsByClassName("dennglu");
var signbtn=document.getElementsByClassName("signbtn")[0];
center.onmousemove=function(){
    mouse.style.display="none";
}
center.onmouseout=function(){
    mouse.style.display="block";
}
/*登录*/

/*往用户名和密码的输入框里添加用户名和密码*/
denglu[0].value="抓住鼹鼠不撒手";
denglu[1].value="qq84808045";

signbtn.onclick=function(){
    $.ajax({
        type:"post",
        url:"http://118.195.129.130:3000/user/login",
        async:true,
        data:{
            us:denglu[0].value,
            ps:denglu[1].value
        },
        success:function(data){
            console.log(data);
            if(data.err==-1){
                alert("用户名或密码错误");
            }
            if(data.err==0){
                //跳转网页
               window.location.href = "html/index 2.html?id="+denglu[0].value;
            }
        },
        error:function(err){

        }
    })
}
//获取注册连接
var chuang=document.getElementsByClassName("chuang")[0];
chuang.onclick=function(){
    window.open ('html/注册.html', '', 'height=800, width=500, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no')
}
/*
<SCRIPT LANGUAGE="javascript"> js脚本开始；
　　window.open 弹出新窗口的命令；
　　'page.html' 弹出窗口的文件名；
　　'newwindow' 弹出窗口的名字（不是文件名），非必须，可用空''代替；
　　height=100 窗口高度；
　　width=400 窗口宽度；
　　top=0 窗口距离屏幕上方的象素值；
　　left=0 窗口距离屏幕左侧的象素值；
　　toolbar=no 是否显示工具栏，yes为显示；
　　menubar，scrollbars 表示菜单栏和滚动栏。
　　resizable=no 是否允许改变窗口大小，yes为允许；
　　location=no 是否显示地址栏，yes为允许；
　　status=no 是否显示状态栏内的信息（通常是文件已经打开），yes为允许；
　　</SCRIPT> js脚本结束
*/