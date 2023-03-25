var tbody = document.querySelector('tbody');

//在add这一部分的内容
var add = document.querySelector('.add');
var oBtnEnsure = add.querySelectorAll('button')[0];
var oBtnReset = add.querySelectorAll('button')[1];
var ordUs = add.querySelector('.us');
var ordAmount = add.querySelector('.amount');
var ordPhone = add.querySelector('.phone');
var ordPay = add.querySelector('.pay');
var ordId = add.querySelector('.id');

//在遮罩层这一部分的内容
var zhezhao = document.querySelector('.zhezhao');
var zhezhaomain = document.querySelector('.zhezhao_main');

var fmous = zhezhaomain.querySelector('[name="us"]');
var fmoamount = zhezhaomain.querySelector('[name="amount"]');
var fmophone = zhezhaomain.querySelector('[name="phone"]');
var fmopay = zhezhaomain.querySelector('[name="pay"]');
var fmoIptid = zhezhaomain.querySelector('[name="id"]');
var zhezhaoEnsure = zhezhao.querySelectorAll('button')[0];
var zhezhaoCancle = zhezhao.querySelectorAll('button')[1];

var pages = document.querySelector('.pages');
var back = pages.querySelector('.back');

var goole = document.querySelector(".goole");
var btnall = document.querySelector('.btnall');
var allTheNumber = document.querySelector('.allTheNumber');
var mycompany = document.querySelector('#mycompany');
var zhelastxiugai = document.querySelector('.zhelastxiugai');
//之后就是导入接口，使得刷新页面
myFunction();
function myFunction() {
    $.ajax({
        type: "post",
        url: "http://118.195.129.130:3000/order/getInfoByPage_order",
        dataType: "json",
        data: {
            page: 1,
            per_page: 100,
        },

        success: function (result) {//result是一个形参名，代表的是返回的数据
            tbody.innerHTML = null;
            console.log(result);
            var datas = result.data;
            for (var i = 0; i < datas.length; i++) {
                //创建tr行
                var tr = document.createElement('tr');
                tbody.appendChild(tr);
                //   tr.innerHTML = "<td>" + datas[i].page + "</td>" + "<td>" + datas[i].per_page + "</td>";
                var count = 0;
                for (var k in datas[i]) {

                    //对于每一行里面的数,有几个内容创建几个单元格

                    //将对象里面的内容赋值给td

                    if (count != 1) {
                        var td = document.createElement('td');
                        td.innerHTML = datas[i][k];
                        tr.appendChild(td);

                        //在这里判断一下是否到了时间板块，如果到了时间板块，就可以将时间的格式进行转换一下



                    }
                    count++;
                    //datas[i][1].innerHTML = null;
                }
                //第三步，创建有删除和修改两项的单元格
                var td = document.createElement('td');
                td.innerHTML = ' <button onclick=delId(' + JSON.stringify(datas[i]._id) + ')>删除</button>' + "\t"
                    + ' <button onclick=xiugai(' + JSON.stringify(datas[i]) + ')>修改</button>';
                tr.appendChild(td);

                var buttondel = td.querySelectorAll('button')[0];
                var buttonxiugai = td.querySelectorAll('button')[1];
                // datas[i][1].innerHTML = null;
            }

        },
        error: function (err) {
            console.log(err);
        }
    })

}

//删除
function delId(id) {
    var con;
    con = confirm("你确定要删除吗");
    if (con == true) {
        //如果确认删除的话，调用删除的接口
        $.ajax({
            type: "post",
            url: "http://118.195.129.130:3000/order/del_order",
            dataType: "JSON",
            data: {

                _id: id,
            },
            success: function (result) {
                console.log("删除成功！");
                myFunction();
                // buttondel.parentNode.parentNode.innerHTML = null;
            },
            error: function (err) {
                console.log(err);
            }

        })

    }
}

//修改
function xiugai(obj) {
    console.log("下面是你想要的");
    console.log(obj);
    zhezhao.style.display = "block";

    fmous.value = obj.us;
    fmoamount.value = obj.amount;
    fmophone.value = obj.phone;
    fmopay.value = obj.pay;
    fmoIptid.value = obj._id;
    console.log(fmoIptid.value);
    //所以，这个请求就应该是在点击确认按钮之后，才开始生效
    zhezhaoEnsure.onclick = function () {
        //点击确认按钮之后，要判断修改的格式是否正确
        if (fmous.value == "") {
            alert("用户框中没有输入内容");
            return;
        }
        if (fmoamount.value == "") {
            alert("订单金额框中没有输入内容");

            return;
        } else {
            let str1 = "" + fmoamount.value;
            let reg = /^[0-9]*$/;
            if (!reg.test(str1)) {
                alert("订单金额框中输入纯数字");
                return;
            }
        }

        if (fmophone.value == "") {
            alert("手机号码框中没有输入内容");
            console.log("我被调用了")
            return;
        } else {
            let str1 = "" + fmophone.value;
            let reg = /^[0-9]*$/;
            if (!reg.test(str1)) {
                alert("手机号必须是纯数字");
                return;
            }
        }


        if (fmopay.value == "") {
            alert("支付状态框内没有输入内容");
        } else {
            let str1 = "" + fmopay.value;
            console.log(str1);
            let reg = /^[0-1]*$/;
            if (!reg.test(str1)) {
                alert("请在支付状态框中输入正确的数字");
                return;
            }
        }
        $.ajax({
            type: "post",
            url: "http://118.195.129.130:3000/order/update_order",
            dataType: "json",
            data: {
                //这里面传的应该是当前行所在的用户的的各种值，需要获取,注意，用户名和Id值都是不可以改变的
                us: fmous.value,
                amount: fmoamount.value,
                phone: fmophone.value,
                pay: fmopay.value,
                _id: fmoIptid.value,
            },
            success: function (result) {
                //要修改对应行里面里面的内容，这里打印一下返回回来的数据
                //这里，只要输入对应行的Id值，就能够修改成功，但是用户一般情况下是不能接触到这个id值的，所以，我们希望
                //通过获取当前所在的行数来获取这个id值，不对，应该是给每一个数据添加一个特定的属性，但是却不是Id值，可以是
                //添加所对应的时间，就可以是name
                // console.log(result);
                //console.log("修改接口调用成功");            
                alert("修改成功");
                //之后，关闭页面
                zhezhao.style.display = "none";
                //此时再调用一下子这个整个页面的信息
                myFunction();
            },
            error: function (err) {
                console.log(err)
            }
        })
    }
    // 当取消按钮被点击之后，关闭遮罩层
    zhezhaoCancle.onclick = function () {
        zhezhao.style.display = "none";
    }
}

//新增
oBtnEnsure.onclick = function () {
    if (ordUs.value == "") {
        alert("用户框中没有输入内容");
        return;
    }
    if (ordAmount.value == "") {
        alert("订单金额框中没有输入内容");

        return;
    } else {
        let str1 = "" + ordAmount.value;
        let reg = /^[0-9]*$/;
        if (!reg.test(str1)) {
            alert("订单金额框中输入纯数字");
            return;
        }
    }

    if (ordPhone.value == "") {
        alert("手机号码框中没有输入内容");
        console.log("我被调用了")
        return;
    } else {
        let str1 = "" + ordPhone.value;
        let reg = /^[0-9]*$/;
        if (!reg.test(str1)) {
            alert("手机号必须是纯数字");
            return;
        }
    }


    if (ordPay.value == "") {
        alert("支付状态框内没有输入内容");
    } else {
        let str1 = "" + ordPay.value;
        console.log(str1);
        let reg = /^[0-1]*$/;
        if (!reg.test(str1)) {
            alert("请在支付状态框中输入正确的数字");
            return;
        }
    }


    $.ajax({
        type: "post",
        url: "http://118.195.129.130:3000/order/add_order",
        dataType: "json",
        data: {
            us: ordUs.value,
            amount: ordAmount.value,
            phone: ordPhone.value,
            pay: ordPay.value,
        },
        success: function (result) {
            console.log(result);
            var datas = result.datas;
            var tr = document.createElement('tr');
            tbody.appendChild(tr);

            for (var j in datas) {
                var td = document.createElement('td');

                td.innerHTML = datas[j];
                tr.appendChild(td);
            }

            myFunction();
        },
        //在这里再调用一下刚才封装好的函数
    })
}

//重置
oBtnReset.onclick = function () {
    //将表单里面所有的内容全部清空
    var reset;
    reset = confirm("你确定要重置吗？");
    if (reset == true) {
        ordUs.value = null,
            ordAmount.value = null,
            ordPhone.value = null,
            ordPay.value = null,
            ordId.value = null
    }
}
//查询
goole.onclick = function () {
    console.log("查询框被点击了");
    //添加一个判断条件，如果框里面的内容为空
    if (zhelastxiugai.value == '') {
        alert("请在查询框中输入内容");
        return;
    }

    $.ajax({
        type: "post",
        url: "http://118.195.129.130:3000/order/getInfoByKw_order",
        dataType: "JSON",
        //这里模糊搜索的是us和phone，也就是数，如果Us或者是phone任意中有对应的数，都可以输出出来
        data: {
            kw: zhelastxiugai.value,

        },

        //将参数传递过去之后，可以接收一下接口即将返回过来的参数,可是我有问题的是，如何知道数据返回来的类型呢，我又该如何将它
        //赋值到渲染到表单上呢？
        success: function (result) {
            console.log(result);
            //之后，将查询得到的结果给返回过来
            //也就是重新加载页面，加载页面之后能够拥有
            var datas = result.data;
            console.log(typeof datas);
            //之后将根据获取得到的结果来重新刷新页面
            console.log(datas instanceof Array);
            //这里，返回来的就是一个数组，如果是数组的话，接下来，就应该能够使得数组中的内容给打印出来
            tbody.innerHTML = null;
            for (var i = 0; i < datas.length; i++) {
                //创建tr行
                var tr = document.createElement('tr');
                tbody.appendChild(tr);
                //   tr.innerHTML = "<td>" + datas[i].page + "</td>" + "<td>" + datas[i].per_page + "</td>";
                var count = 0;
                for (var k in datas[i]) {
                    if (count != 1) {
                        //对于每一行里面的数,有几个内容创建几个单元格
                        var td = document.createElement('td');
                        //将对象里面的内容赋值给td
                        td.innerHTML = datas[i][k];
                        tr.appendChild(td);
                    }
                    count++;
                }


                //第三步，创建有删除和修改两项的单元格
                var td = document.createElement('td');
                td.innerHTML = ' <button onclick=delId(' + JSON.stringify(datas[i]._id) + ')>删除</button>' + "\t"
                    + ' <button onclick=xiugai(' + JSON.stringify(datas[i]) + ')>修改</button>';
                tr.appendChild(td);

                var buttondel = td.querySelectorAll('button')[0];
                var buttonxiugai = td.querySelectorAll('button')[1];

            }
            console.log(datas);
            // myFunction();
            back.onclick = function () {
                myFunction();
            }
        }
    })
}

//查询订单总数量
btnall.onclick = function () {
    //当点击查询按钮的时候，发起查询请求，连接接口
    $.ajax({
        type: "get",
        url: ("http://118.195.129.130:3000/order/allpage_order"),
        data: {

        },
        success: function (result) {
            console.log("查询请求已经发送");
            //之后，就是将返回的结果给记录下来传递给表单
            allTheNumber.value = result.pages;
            console.log(result);
        }
    })
}

mycompany.onclick = function () {
    //跳转到指定页面
    window.location.href = 'index.html';
}

mygod.onclick = function () {
    window.location.href = 'god.html'
}

mymoney.onclick = function () {
    window.location.href = 'order.html';
}

