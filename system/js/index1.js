var time=document.getElementsByClassName("time")[0];
var week=document.getElementsByClassName("week")[0];
var tips=document.getElementsByClassName("tips")[0];
var skyH3=document.getElementsByClassName("skyH3");
var searchSky=document.getElementsByClassName("searchSky")[0];
//接口真的难找，还是自己太菜，不太会用接口
//哈哈，但是我还是找到了
//获取input中的值传给ajax
var sky=document.getElementsByClassName("sky")[0];
var wind=document.getElementsByClassName("wind");
var cloud=document.getElementsByClassName("cloud");
var height=document.getElementsByClassName("height");
var low=document.getElementsByClassName("low");
searchSky.onclick=function(){
    skyday();
}
/*设置收索框里原本的值为新乡*/
sky.value="新乡";
skyday();
function skyday(){
    $.ajax({
        type:"GET",
        url:"http://wthrcdn.etouch.cn/weather_mini",
        data:{
            city:sky.value
        },

        success:function(msg){
            
            var r=JSON.parse(msg);
            //console.log(r);
            //添加小tips
            tips.innerHTML=r.data.ganmao;
            //添加日期
            skyH3[0].innerHTML=r.data.yesterday.date;
            skyH3[1].innerHTML=r.data.forecast[0].date;
            skyH3[2].innerHTML=r.data.forecast[1].date;
            skyH3[3].innerHTML=r.data.forecast[2].date;
            skyH3[4].innerHTML=r.data.forecast[3].date;
            skyH3[5].innerHTML=r.data.forecast[4].date;
            //风
            wind[0].innerHTML=r.data.yesterday.fx;
            wind[1].innerHTML=r.data.forecast[0].fengxiang;
            wind[2].innerHTML=r.data.forecast[0].fengxiang;
            wind[3].innerHTML=r.data.forecast[0].fengxiang;
            wind[4].innerHTML=r.data.forecast[0].fengxiang;
            wind[5].innerHTML=r.data.forecast[0].fengxiang;
            //云
            cloud[0].innerHTML=r.data.yesterday.type;
            cloud[1].innerHTML=r.data.forecast[0].type;
            cloud[2].innerHTML=r.data.forecast[0].type;
            cloud[3].innerHTML=r.data.forecast[0].type;
            cloud[4].innerHTML=r.data.forecast[0].type;
            cloud[5].innerHTML=r.data.forecast[0].type;
            //最高温度
            height[0].innerHTML=r.data.yesterday.high;
            height[1].innerHTML=r.data.forecast[0].high;
            height[2].innerHTML=r.data.forecast[0].high;
            height[3].innerHTML=r.data.forecast[0].high;
            height[4].innerHTML=r.data.forecast[0].high;
            height[5].innerHTML=r.data.forecast[0].high;
            //最低温度
            low[0].innerHTML=r.data.yesterday.low;
            low[1].innerHTML=r.data.forecast[0].low;
            low[2].innerHTML=r.data.forecast[0].low;
            low[3].innerHTML=r.data.forecast[0].low;
            low[4].innerHTML=r.data.forecast[0].low;
            low[5].innerHTML=r.data.forecast[0].low;
        },
        error:function(err){
            console.log(err);
        }
    });
}



   