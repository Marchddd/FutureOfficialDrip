var namea=document.getElementsByClassName("namea");
var tian=document.getElementsByClassName("tian");
$.ajax({
    type:"post",
    url:"http://118.195.129.130:3000/users/getInfoByPage_users",
    async:true,
    data:{
        page:1,
        per_page:10
    },
    success:function(data){
        //console.log(data);
        for(let i=0;i<10;i++){
            namea[i].innerHTML=data.data[i].us
        }
    },
    error:function(err){
        console.log(err);
    }
})
for(let i=0;i<10;i++){
    namea[i].onclick=function(){
        
        $.ajax({
            type:"post",
            url:"http://118.195.129.130:3000/users/getInfoByPage_users",
            async:true,
            data:{
                page:1,
                per_page:10
            },
            success:function(data){
                if(data.data[i].sex==1){
                    data.data[i].sex="男";
                }else{
                    data.data[i].sex="女";
                }
                tian[0].innerHTML=data.data[i].age;
                tian[1].innerHTML=data.data[i].integral;
                tian[2].innerHTML=data.data[i].sex;
                tian[3].innerHTML=data.data[i].us;
                tian[4].innerHTML=data.data[i].ps;
                tian[5].innerHTML=data.data[i]._v;
                tian[6].innerHTML=data.data[i]._id;
            },
            error:function(err){
                console.log(err);
            }
        })
    }
}