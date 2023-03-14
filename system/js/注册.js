/*这里是注册的js*/
//这里获取注册页面的元素
var inp=document.getElementsByClassName("inp");
var sing=document.getElementById("sing");
var btn2=document.getElementsByClassName("btn2")[0];
sing.onclick=function(){
    
            $.ajax({
                type:"post",
                url:"http://118.195.129.130:3000/user/reg",
                async:true,
                data:{
                    us:inp[0].value,
                    ps:inp[1].value,
                    mail:inp[2].value,
                    code:inp[3].value
                },
                success:function(data){
                    alert(data.msg);
                },
                error:function(err){
                    console.log(err);
                }
            })
        }
        
    

btn2.onclick=function(){
    // var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    // if(reg.test(inp[2].value)){
        $.ajax({
            type:"post",
            url:"http://118.195.129.130:3000/user/getMailCode",
            async:true,
            data:{
                mail:inp[2].value,
            },
            success:function(data){
                console.log(data);
            },
            error:function(err){
                console.log(err);
            }
        })
    // }else{
    //     inp[2].value="邮箱格式错误";
    // }
}


