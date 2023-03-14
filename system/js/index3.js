/*设置以下分页下面的按钮*/
var pagen=document.getElementsByClassName("pagen");
var pagex=document.getElementsByClassName("pagex")[0];
var pages=document.getElementsByClassName("pages")[0];
var tda=document.getElementsByClassName("pagr");
var tiContain=document.getElementsByClassName("tiContain")[0];

zong();
function zong(){
//这里来确定下面有几个按钮
//获取菜单总数
//z为获取的总菜单数除以10的向下取整
//啥破玩意啊，z传不出来，只能ajax里面套ajax了，真的麻烦
$.ajax({
    type:"get",
    url:"http://118.195.129.130:3000/food/allpage",
    async:true,
    data:{
       
    },
    success:function(data){
        let z=Math.floor(data.pages/10);
        for(let h=1;h<=z;h++){
            var pagea=document.createElement("div");
            pagea.className="pagen";
            pagea.innerHTML=h;
            tiContain.appendChild(pagea);
        }
        var a=1;
        for(let i=0;i<z;i++){
            pagen[i].onclick=function(){
                a=i+1;
                dianx();
                dians();
                dian(a);
            }
        }
        dianx();
        function dianx(){
                pagex.onclick=function(){
                    
                    a++;
                    if(a>=z){
                        a=z;
                    }
                    dian(a);
                    
            }
        }
        dians();
        function dians(){
                pages.onclick=function(){
        
                    a--;
                    if(a<=1){
                        a=1;
                    }
                    dian(a);
                    
        
            }
        }
        dian(a);
        /*分页下面的按钮真的不好设置*/
        /*向表格中输入数据  讲接口的数据输入到表格中*/
        function dian(i){
                    $.ajax({
                        type:"post",
                        url:"http://118.195.129.130:3000/food/getInfoByPage",
                        async:true,
                        data:{
                            per_page:10,
                            page:i,
                        },
                        success:function(data){
                        // console.log(data);
                            
                            
                                tda[0].innerHTML=data.data[0].name;
                                tda[1].innerHTML=data.data[0].price;
                                tda[2].innerHTML=data.data[0].desc;
                                tda[3].innerHTML=data.data[0].typename;
                                tda[4].innerHTML=data.data[0].typeid;
                                tda[5].innerHTML=data.data[0]._id;
                    
                                tda[6].innerHTML=data.data[1].name;
                                tda[7].innerHTML=data.data[1].price;
                                tda[8].innerHTML=data.data[1].desc;
                                tda[9].innerHTML=data.data[1].typename;
                                tda[10].innerHTML=data.data[1].typeid;
                                tda[11].innerHTML=data.data[1]._id;
                    
                                tda[12].innerHTML=data.data[2].name;
                                tda[13].innerHTML=data.data[2].price;
                                tda[14].innerHTML=data.data[2].desc;
                                tda[15].innerHTML=data.data[2].typename;
                                tda[16].innerHTML=data.data[2].typeid;
                                tda[17].innerHTML=data.data[2]._id;
                    
                                tda[18].innerHTML=data.data[3].name;
                                tda[19].innerHTML=data.data[3].price;
                                tda[20].innerHTML=data.data[3].desc;
                                tda[21].innerHTML=data.data[3].typename;
                                tda[22].innerHTML=data.data[3].typeid;
                                tda[23].innerHTML=data.data[3]._id;
                    
                                tda[24].innerHTML=data.data[4].name;
                                tda[25].innerHTML=data.data[4].price;
                                tda[26].innerHTML=data.data[4].desc;
                                tda[27].innerHTML=data.data[4].typename;
                                tda[28].innerHTML=data.data[4].typeid;
                                tda[29].innerHTML=data.data[4]._id;
                    
                                tda[30].innerHTML=data.data[5].name;
                                tda[31].innerHTML=data.data[5].price;
                                tda[32].innerHTML=data.data[5].desc;
                                tda[33].innerHTML=data.data[5].typename;
                                tda[34].innerHTML=data.data[5].typeid;
                                tda[35].innerHTML=data.data[5]._id;
                    
                                tda[36].innerHTML=data.data[6].name;
                                tda[37].innerHTML=data.data[6].price;
                                tda[38].innerHTML=data.data[6].desc;
                                tda[39].innerHTML=data.data[6].typename;
                                tda[40].innerHTML=data.data[6].typeid;
                                tda[41].innerHTML=data.data[6]._id;
                    
                                tda[42].innerHTML=data.data[7].name;
                                tda[43].innerHTML=data.data[7].price;
                                tda[44].innerHTML=data.data[7].desc;
                                tda[45].innerHTML=data.data[7].typename;
                                tda[46].innerHTML=data.data[7].typeid;
                                tda[47].innerHTML=data.data[7]._id;
                    
                                tda[48].innerHTML=data.data[8].name;
                                tda[49].innerHTML=data.data[8].price;
                                tda[50].innerHTML=data.data[8].desc;
                                tda[51].innerHTML=data.data[8].typename;
                                tda[52].innerHTML=data.data[8].typeid;
                                tda[53].innerHTML=data.data[8]._id;
                    
                                tda[54].innerHTML=data.data[9].name;
                                tda[55].innerHTML=data.data[9].price;
                                tda[56].innerHTML=data.data[9].desc;
                                tda[57].innerHTML=data.data[9].typename;
                                tda[58].innerHTML=data.data[9].typeid;
                                tda[59].innerHTML=data.data[9]._id;
                                for(let c=0;c<z;c++){
                                    pagen[c].style.backgroundColor="white";
                                }
                                pagen[i-1].style.backgroundColor="#bb5535";
                        },
                        error:function(err){
                            console.log(err);
                        }
                    });
                }
            },
        error:function(err){
            console.log(err);
        }
    })
}

var tan=document.getElementsByClassName("tan");
var ture=document.getElementsByClassName("ture")[0];
/*删除的小❌*/
var chahao=document.getElementsByClassName("chahao")[0];
var xiugai=document.getElementsByClassName("xiugai")[0];
chahao.onclick=function(){
    xiugai.style.display="none";
}
//点击修改使弹窗弹出
var modification=document.getElementsByClassName("Modification");
for(let i=0;i<10;i++){
    modification[i].onclick=function(){
        xiugai.style.display="block";
        ture.onclick=function(){
    
            $.ajax({
                type:"get",
                url:"http://118.195.129.130:3000/food/allpage",
                async:true,
                data:{
        
                },
                success:function(data){
                    
                    var zz=Math.floor(data.pages/10);
                    xiugai.style.display="none";
                        $.ajax({
                        type:"post",
                        url:"http://118.195.129.130:3000/food/update",
                        async:true,
                        data:{
                            name:tan[0].value,
                            price:tan[1].value,
                            desc:tan[2].value,
                            typename:tan[3].value,
                            typeid:tan[4].value,
                            _id:tda[-1+(i+1)*6].innerHTML
                        },
                        success:function(data){
                            alert(data.msg);
                            tan[0].value="";
                            tan[1].value="";
                            tan[2].value="";
                            tan[3].value="";
                            tan[4].value="";
                            for(let b=0;b<zz;b++){
                                tiContain.removeChild(pagen[0]);
                            }
                            zong();
                        },
                        error:function(err){
                            console.log(err);
                        }
                    })
                },
                error:function(err){
                    console.log(err);
                }
            })
        }
    }
}

//删除
var ida;
var deletea=document.getElementsByClassName("delete");
for(let i=0;i<10;i++){
    deletea[i].onclick=function(){
        $.ajax({
            type:"get",
            url:"http://118.195.129.130:3000/food/allpage",
            async:true,
            data:{
                
            },
            success:function(data){
                var zz=Math.floor(data.pages/10);
                console.log(tda[-1+(i+1)*6].innerHTML);
                ida=tda[-1+(i+1)*6].innerHTML;
                $.ajax({
                    type:"post",
                    url:"http://118.195.129.130:3000/food/del",
                    async:true,
                    data:{
                        _id:ida,
                    },
                    success:function(data){
                        
                        alert(data.msg);
                        for(let b=0;b<zz;b++){
                            tiContain.removeChild(pagen[0]);
                        }
                        zong();
                    },
                    error:function(err){
                        console.log(err);
                    }
                })
            },
            error:function(err){
                console.log(err);
            }
        })
    }
}

//增加

var btnadd=document.getElementsByClassName("btnadd")[0];
var add=document.getElementsByClassName("add");
btnadd.onclick=function(){
    $.ajax({
        type:"get",
        url:"http://118.195.129.130:3000/food/allpage",
        async:true,
        data:{

        },
        success:function(data){
            var zz=Math.floor(data.pages/10);
            $.ajax({
                type:"post",
                url:"http://118.195.129.130:3000/food/add",
                async:true,
                data:{
                    name:add[0].value,
                    price:add[1].value,
                    desc:add[2].value,
                    typename:add[3].value,
                    typeid:add[4].value,
                },
                success:function(data){
                    alert(data.msg);
                    add[0].value="";
                    add[1].value="";
                    add[2].value="";
                    add[3].value="";
                    add[4].value="";
                    for(let b=0;b<zz;b++){
                        tiContain.removeChild(pagen[0]);
                    }
                    zong();
                },
                error:function(err){
                    console.log(err);
                }
            })
        },
        error:function(err){
            console.log(err);
        }
    })
}
//查询
var kwa=document.getElementsByClassName("kwa")[0];
var btnkw=document.getElementsByClassName("btnkw")[0];
var containa=document.getElementsByClassName("containa")[0];
function chuaba(){
    $.ajax({
        type:"post",
        url:"http://118.195.129.130:3000/food/getInfoByKw",
        async:true,
        data:{
            kw:kwa.value
        },
        success:function(data){
            
                if(data.data.length==0){
                    chuab();
                }else{
                    console.log(data.data.length);
                    for(let i=0;i<data.data.length;i++){
                        var chaxunb=document.createElement("div");
                        chaxunb.className="chaxunb";
                        containa.appendChild(chaxunb);
                        var chaxunb=document.getElementsByClassName("chaxunb");
                        
                        for(let a=0;a<6;a++){
                            var chaDiv=document.createElement("div");
                            chaDiv.className="chaDiv";
                            chaxunb[i].appendChild(chaDiv);
                        }
                        var chaDiv=document.getElementsByClassName("chaDiv");
                        
                        var c=chaDiv.length;
                        console.log(c);
                        for(var b=0;b<c/6;b++){
                            chaDiv[6*b].innerHTML=data.data[b].name;
                            chaDiv[6*b+1].innerHTML=data.data[b].price;
                            chaDiv[6*b+2].innerHTML=data.data[b].desc;
                            chaDiv[6*b+3].innerHTML=data.data[b].typeid;
                            chaDiv[6*b+4].innerHTML=data.data[b].typename;
                            chaDiv[6*b+5].innerHTML=data.data[b]._id;
                        }
                        btnkw.onclick=function(){  
                            for(var b=0;b<data.data.length;b++){
                                containa.removeChild(chaxunb[0]);
                            }
                            chuaba();
                            
                        }
                    }
                }
        },
        error:function(err){
            console.log(err);
        }
    })
}
//这里是查询，上面也是查询，两个查询是为了在查询时删除上一次查询的内容
chuab();
function chuab(){
    btnkw.onclick=function(){
    
        $.ajax({
            type:"post",
            url:"http://118.195.129.130:3000/food/getInfoByKw",
            async:true,
            data:{
                kw:kwa.value
            },
            success:function(data){
                console.log(data);
                    if(data.data.length==0){
                        chuaba();
                    }else{
                        console.log(data.data.length);
                        for(let i=0;i<data.data.length;i++){
                            var chaxunb=document.createElement("div");
                            chaxunb.className="chaxunb";
                            containa.appendChild(chaxunb);
                            var chaxunb=document.getElementsByClassName("chaxunb");
                            
                            for(let a=0;a<6;a++){
                                var chaDiv=document.createElement("div");
                                chaDiv.className="chaDiv";
                                chaxunb[i].appendChild(chaDiv);
                            }
                            var chaDiv=document.getElementsByClassName("chaDiv");
                            
                            var c=chaDiv.length;
                            for(var b=0;b<c/6;b++){
                                chaDiv[6*b].innerHTML=data.data[b].name;
                                chaDiv[6*b+1].innerHTML=data.data[b].price;
                                chaDiv[6*b+2].innerHTML=data.data[b].desc;
                                chaDiv[6*b+3].innerHTML=data.data[b].typeid;
                                chaDiv[6*b+4].innerHTML=data.data[b].typename;
                                chaDiv[6*b+5].innerHTML=data.data[b]._id;
                            }

                            btnkw.onclick=function(){  
                                for(var b=0;b<data.data.length;b++){
                                    containa.removeChild(chaxunb[0]);
                                }
                                chuaba();
                                
                            }
                        }
                    }
            },
            error:function(err){
                console.log(err);
            }
        })
    }
}
$.ajax({
    type:"get",
    url:"http://118.195.129.130:3000/order/allpage_oder",
    async:true,
    data:{
        
    },
    success:function(){
        console.log(data);
    },
    error:function(){

    }
});
				
