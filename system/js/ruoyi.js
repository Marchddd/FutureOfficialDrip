var nar=document.getElementsByClassName("nar")[0];


/*二级菜单*/
var narLi=document.getElementsByClassName("narLi");
var narK1=document.getElementById("narK1");
var narK2=document.getElementById("narK2");
var narK3=document.getElementById("narK3");
var narK4=document.getElementById("narK4");
var narK5=document.getElementById("narK5");
/*narLi[1].onclick=function(){
    toggleClass(narK2,"gong2");
}*/
muen(narLi[1],narK2,"gong2","gong1","gong3","gong4","gong5",narK1,narK3,narK4,narK5);
muen(narLi[2],narK3,"gong3","gong1","gong2","gong4","gong5",narK1,narK2,narK4,narK5);
muen(narLi[3],narK4,"gong4","gong1","gong2","gong3","gong5",narK1,narK2,narK3,narK5);
/*cla1点击的元素,cla2需要添加class的元素,h表示添加的class*/
function muen(cla1,cla2,h,a,b,c,d,e,f,g,v){
    cla1.onclick=function(){
        
        removeClass(e,a);
        removeClass(f,b);
        removeClass(g,c);
        removeClass(v,d);
            
        toggleClass(cla2,h);
    }
}
/*头部点击左侧导航条left改变*/
var homePageI=document.getElementsByClassName("homePageI")[0];
var left=document.getElementsByClassName("left")[0];
var logo=document.getElementsByClassName("logo")[0];
var black=document.getElementsByClassName("black")[0];
homePageI.onclick=function(){
	left.style.left="0";
	logo.style.left="0";
	black.style.display="block";
}
black.onclick=function(){
		left.style.left="-200px";
		logo.style.left="-200px";
		black.style.display="none";
		
}
/*搜索框*/
var magnifier=document.getElementsByClassName("magnifier")[0];
var searchu=document.getElementsByClassName("searchu")[0];

document.onclick=function(){
	searchu.style.width="0";
	searchu.style.borderBottom="0"
}
magnifier.addEventListener('click',function(e){
	e.stopPropagation();
	searchu.style.width="200px";
	searchu.style.borderBottom="1px solid black";
},false);
searchu.addEventListener('click',function(e){
	e.stopPropagation();
	searchu.style.width="200px";
	searchu.style.borderBottom="1px solid black";
},false);
/*退出*/
var tuichu=document.getElementsByClassName("tuichu")[0];
tuichu.onclick=function(){
    $.ajax({
        type:"post",
        url:"http://118.195.129.130:3000/user/out",
        async:true,
        data:{

        },
        success:function(data){
            console.log(data);
            if(data.err==-1){
                alert("用户名或密码错误");
            }
            if(data.err==0){
                //跳转网页
				//console.log(data);
				alert(data.msg);
               window.location.href = "../index.html";

            }
        },
        error:function(err){

        }
    })
}
/*获取时间*/
var time=document.getElementsByClassName("time")[0];
var week=document.getElementsByClassName("week")[0];
setInterval(function(){
    $.ajax({
        type:"GET",
        url:"http://poetry.apiopen.top/getTime",
        async:true,
        data:{
            
        },
        success:function(data){
            time.innerHTML=data.result.dateTime;
            week.innerHTML=data.result.weekday;
        },
        error:function(err){
            console.log(err);
        }
    })
},1000);
