// 首先要判断的事件是表单失去焦点onblur'
// 如果输入正确的则提示正确的信息，颜色是绿色的小图标变化
// 如果输入的不是6到16位，则采取className修改样式
// 因为修改的样式比较多，所以使用classNAME来修改样式

var inputname = document.querySelector('.name');
var password = document.querySelector(".password");
var nameerror = document.querySelector('.name_error');
var passworderror = document.querySelector('.password_error');
var remember = document.querySelector('#remember');
var password = document.querySelector('.password');

var passworderror1 = document.querySelector('.password_error1');
var iconfont = document.querySelectorAll('.iconfont');
var nameerror1 = document.querySelector('.name_error1');
var regester = document.querySelector('.regester');
var enroll = document.querySelector('.enroll');

var zhucecancle = document.querySelector('.zhuce_cancle')

var flag_name = false;
var flag_password = false;
var zhuce = document.querySelector('.zhuce');

var zhucename = document.querySelector('#zhucename');
var ps = document.querySelector('#ps');
var mail = document.querySelector('#mail');
var code = document.querySelector('#code');
var zhucecomplete = document.querySelector(".zhuce_complete");

// 失去焦点事件
// inputname.onblur = function () {
//     //根据表单里面值的长度，inputname.value.length,这个是用来设置样式
//     //在这里可以使用一个当输入的格式错误的时候，将表单里面的内容制空
//     if (this.value.length != 6) {
//         console.log("错误");
//         iconfont[0].className = "wrong iconfont";
//         iconfont[0].innerHTML = "&#xe630;"
//         nameerror1.className = 'wrong  name_error1';//这里面没有添加原来的属性，稍后再弄
//         nameerror1.innerHTML = "您输入的格式不对";
//     } else {
//         console.log("正确");

//         iconfont[0].className = "right iconfont";
//         iconfont[0].innerHTML = "&#xec6b;"
//         nameerror1.className = 'right  name_error1';//这里面没有添加原来的属性，稍后再弄
//         nameerror1.innerHTML = "输入正确";
//         flag_name = true;
//     }
// }
// password.onblur = function () {
//     //根据表单里面值的长度，inputname.value.length,这个是用来设置样式
//     //在这里可以使用一个当输入的格式错误的时候，将表单里面的内容制空
//     var str = this.value;
//     // var reg = /^[0-9]$/;
//     if (this.value.length != 6) {
//         console.log("错误");
//         iconfont[1].className = "wrong iconfont";
//         iconfont[1].innerHTML = "&#xe630;"
//         passworderror1.className = 'wrong password_error1';//这里面没有添加原来的属性，稍后再弄
//         passworderror1.innerHTML = "您输入的格式不对";
//     } else {
//         console.log("正确");
//         // window.location.href = 'index.html';
//         iconfont[1].className = "right iconfont";
//         iconfont[1].innerHTML = "&#xec6b;"
//         passworderror1.className = 'right  name_error1';//这里面没有添加原来的属性，稍后再弄
//         passworderror1.innerHTML = "输入正确";
//         flag_password = true;
//     }
// }


//记住用户名的事件
if (localStorage.getItem('inputname') && localStorage.getItem('password')) {
    //如果有数据，就将数据提交给文本框
    inputname.value = localStorage.getItem('inputname');
    password.value = localStorage.getItem('password');
    remember.checked = true;
}

remember.addEventListener('change', function () {
    if (this.checked) {
        localStorage.setItem('inputname', inputname.value);
        localStorage.setItem('password', password.value);
    } else {
        localStorage.removeItem('inputname');
        localStorage.removeItem('password');
    }
})


regester.onclick = function () {
    $.ajax({
        type: 'POST',
        url: 'http://118.195.129.130:3000/user/login',
        data: {
            us: inputname.value,
            ps: password.value
        },
        success: function (result) {
            console.log(result, 'result');

            //window.location.href = 'index.html';
            //在这里添加一个判断条件，如果用户输入的用户名和密码是正确的，就可以跳转到另一个页面
            if (result.err == 0) {
                window.location.href = 'index.html';
            } else {
                alert("账户不存在或者是密码错误,请重新输入");
                //之后，将表单里面的内容给清空
                inputname.value = null;
                password.value = null;
            }

        },
        error: function (err) {
            //如果失败

            console.log(err);
        }
    })

}
enroll.onclick = function () {
    //当点击注册的时候，开启注册事件
    zhuce.style.display = "block";
    //当点击完成注册的时候，调用接口
    zhucecomplete.onclick = function () {
        $.ajax({
            type: "post",
            url: "http://118.195.129.130:3000/user/reg",
            data: {
                us: zhucename.value,
                ps: ps.value,
                mail: mail.value,
                code: code.value,
            },
            success: function (result) {
                if (result.err == 0) {
                    alert("注册成功");
                    zhuce.style.display = "none";
                } else if (result.err == -1) {
                    alert("注册失败");
                }

            }
        })
    }
















    zhucecancle.onclick = function () {
        zhuce.style.display = "none";
    }
}
