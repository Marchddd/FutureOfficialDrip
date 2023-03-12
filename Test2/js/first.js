// window.onload = function() {

// alert("js代码有被调用");







console.log(1111);

var navbox = document.getElementById("nav-box");
var logo = document.getElementById("logo");
var nav = document.querySelector('.nav-center');
console.log(nav);
var itemf = document.querySelector("#items");
console.log(itemf);
var items = itemf.children;
// var items=document.getElementsByTagName("items");

console.log(items.length);
console.log(items[0]);
var font = document.querySelectorAll('#font');

console.log(font.length);


function toubu() {
	//我想起来了，这里使用一个额外的类比较好，这样就复杂了
	navbox.style.display = "block";
	navbox.style.backgroundColor = "white";
	logo.style.backgroundImage = "url(img/index/tencent_logo.png)";
	for (var i = 0; i < items.length; i++) {

		var a = items[i].querySelector('a');
		a.style.color = "black";
		//这里出现问题了,也就是说,如何获取里面的a
	}
	//document.getElementById("fontS").style.color = "black"
	for (var i = 0; i < font.length; i++) {
		var a1 = font[i].querySelector('a');
		a1.style.color = 'black';
	}

}

function scroll() {
	//console.log("打印log日志");实时看下效果
	console.log("开始滚动！");
}
var navcenterright = document.querySelectorAll('.nav-center-right');
var scrollFunc = function(e) {
	e = e || window.event;
	if (e.wheelDelta) { //第一步：先判断浏览器IE，谷歌滑轮事件               
		if (e.wheelDelta > 0) { //当滑轮向上滚动时  
			//console.log("滑轮向上滚动");
			toubu();
			for (let i = 0; i < navcenterright.length; i++) {
				navcenterright[i].onmouseover = function() {
					navcenterright[i].style.color = 'black';
				}
				navcenterright[i].onmouseleave = function() {
					navcenterright[i].style.color = 'gray';
				}

			}
		}
		if (e.wheelDelta < 0) { //当滑轮向下滚动时  
			//	console.log("滑轮向下滚动");
			navbox.style.display = "none";
		}
	}
	// } else if (e.detail) {  //Firefox滑轮事件  
	//     if (e.detail> 0) { //当滑轮向上滚动时  
	//         console.log("滑轮向上滚动");  
	//     }  
	//     if (e.detail< 0) { //当滑轮向下滚动时  
	//         console.log("滑轮向下滚动");  
	//     }  
	// }  
}
//给页面绑定滑轮滚动事件  
if (document.addEventListener) { //firefox
	document.addEventListener('DOMMouseScroll', scrollFunc, false);
}

//滚动滑轮触发scrollFunc方法  //ie 谷歌  
window.onmousewheel = document.onmousewheel = scrollFunc;
let allImgTags = document.getElementsByTagName('img')
for (let i = 0; i < allImgTags.length; i++) {
	// console.log(allImgTags[i].src)
}


//轮播图部分的js代码
//最先把中间的轮播图作为最首先的部分，没有数字表示
var imgList = document.querySelector('#imgList');
var imgArr = document.getElementsByClassName('tupian');
var outer = document.getElementById("outer");
var index = 0;
var pre = document.querySelector(".order_left");
var next = document.querySelector(".order_right");


// autoChange();
autoChange();

// 创建一个函数来自动切换图片
function autoChange() {
	setInterval(function() {
		index++;
		index %= imgArr.length;
		move(imgList, "left", -700 * index, 20, function() {
			console.log(index, imgArr.length - 1)
			if (index >= imgArr.length - 1) {
				index = 0;
				imgList.style.left = 0 + 'px'
			}

		})
	}, 5000);
}

//下面这两个的效果就类似于轮子了，造好了直接就用了
function move(obj, attr, target, speed, callback) {
	clearInterval(obj.timer); //关闭上一个定时器
	var current = parseInt(getStyle(obj, attr)); //获取obj当前位置
	if (current > target) {
		speed = -speed; //如果当前位置大于目标位置，应该向左移动，速度为负值
	}
	obj.timer = setInterval(function() {
		var oldValue = parseInt(getStyle(obj, attr)); //获取obj原来的位置
		var newValue = oldValue + speed; //设置obj移动
		if ((speed < 0 && newValue < target) || (speed > 0 && newValue > target)) {
			newValue = target; //不能让移动超过边界
		}
		obj.style[attr] = newValue + "px"; //设置obj现在的位置

		if (newValue == target) { //如果obj到达目标位置，则停止移动，清除定时器
			clearInterval(obj.timer);
			callback && callback();
		}
	}, 40);

};

function getStyle(obj, name) {
	if (window.getComputedStyle) {
		// console.log(11)
		return getComputedStyle(obj, null)[name];
	} else {
		return obj.currentStyle[name];
	};
}


pre.onclick = function() {
	index--;


	//判断Index是否属是小于0
	if (index < 0) {
		index = 0;
	}
	imgList.style.left = index * 700 + "px";
}

next.onclick = function() {
	//切换到下一张，索引自增
	index++;


	//判断index是否是最后一张
	if (index <= imgArr.length - 2) {
		index = 0;
	}
	imgList.style.left = -700 * index + "px";
}





































//接下来要写的是头部的轮播图，大多数命名为1
var headerList = document.querySelector('.headerList');
var toubuArr = document.getElementsByClassName('toubutupian');
var section1 = document.querySelector('.section1');
var index1 = 0;
var prev1 = document.querySelector(".first_arrow_left_left");
var next1 = document.querySelector('.first_arrow_left_right');

//分别为按钮绑定单击响应函数
console.log(toubuArr.length);

//创建一个函数来自动切换图片
function autoChange1() {
	setInterval(function() {
		index1++;
		index1 %= toubuArr.length;
		console.log(headerList, 'headerList')
		move1(headerList, "left", -100 * index1, 20, function() {
			setA1();
		})
	}, 5000);
}

function move1(obj, attr, target, speed, callback) {
	console.log(obj, '0bj')
	clearInterval(obj.timer); //关闭上一个定时器
	var current = parseInt(getStyle(obj, attr)); //获取obj当前位置
	if (current > target) {
		speed = -speed; //如果当前位置大于目标位置，应该向左移动，速度为负值
	}
	obj.timer = setInterval(function() {
		var oldValue = parseInt(getStyle(obj, attr)); //获取obj原来的位置
		var newValue = oldValue + speed; //设置obj移动
		if ((speed < 0 && newValue < target) || (speed > 0 && newValue > target)) {
			newValue = target; //不能让移动超过边界
		}
		obj.style[attr] = newValue + "vw"; //设置obj现在的位置

		if (newValue == target) { //如果obj到达目标位置，则停止移动，清除定时器
			clearInterval(obj.timer);
			callback && callback();
		}
	}, 0);

};

// 绑定按动切换效果
var fbra = document.querySelector(".first_bottom_right_arrow");
var allA1 = fbra.querySelectorAll("a");
console.log(allA1.length);
allA1[index1].style.backgroundColor = "blue";

for (let i = 0; i < allA1.length; i++) {
	allA1[i].index1 = i; //为每一个超链接添加Index属性
	allA1[i].onclick = function() {
		//关闭自动切换定时器
		//点击获取超链接的索引，并且将它设置为index1
		index1 = this.index1;
		headerList.style.left = -100 * index1 + "vw";
		setA1();
	}
}
autoChange1();

function setA1() {
	//判断当前索引是否是最后一张图片
	if (index1 >= toubuArr.length - 1) {
		index1 = 0;
		//此时显示的是最后一张图片，通过css将最后一张一下子切换成第一张
		headerList.style.left = 0;
	}

	
	for (let i = 0; i < allA1.length; i++) {
			allA1[i].style.backgroundColor = "blue";
		}
	allA1[index1].style.backgroundColor = "white";
}



prev1.onclick = function() {
	//切换到上一张，索引自减
	index1--;

	//判断Index1是否属是小于0
	if (index1 < 0) {
		index1 = 0;
	}
	headerList.style.left = 100 * index1 + "vw";

}

next1.onclick = function() {
	//切换到下一张，索引自增
	index1++;

	//判断index1是否是最后一张
	if (index1 <= toubuArr.length - 2) {
		index1 = 0;
	}
	headerList.style.left = -100 * index1 + "vw";

}


//做一下，最后面的轮播图部分,暂时命名为2
var slideshow = document.querySelector("#slideshow");
var imgcontain = document.querySelector("#imgcontain");
var endArr = document.querySelectorAll(".endimg");
var index2 = 0;


//调用自动切换图片的函数
autochange2();
//创建一个函数来自动切换图片
function autochange2() {
	setInterval(function() {
		index2++;
		index2 %= endArr.length;

		move2(imgcontain, "left", -100 * index2, 20, function() {
			console.log(index2, endArr.length - 1)
			setA2();
		})
	}, 5000);
}


function move2(obj, attr, target, speed, callback) {
	clearInterval(obj.timer); //关闭上一个定时器
	var current = parseInt(getStyle(obj, attr)); //获取obj当前位置
	if (current > target) {
		speed = -speed; //如果当前位置大于目标位置，应该向左移动，速度为负值
	}
	obj.timer = setInterval(function() {
		var oldValue = parseInt(getStyle(obj, attr)); //获取obj原来的位置
		var newValue = oldValue + speed; //设置obj移动
		if ((speed < 0 && newValue < target) || (speed > 0 && newValue > target)) {
			newValue = target; //不能让移动超过边界
		}
		obj.style[attr] = newValue + "vw"; //设置obj现在的位置

		if (newValue == target) { //如果obj到达目标位置，则停止移动，清除定时器
			clearInterval(obj.timer);
			callback && callback();
		}
	}, 40);

};

//对于其中的a节点，进行一下时间绑定
var sbta = document.querySelector('.six_bottom_right_arrow');
var allA2 = sbta.querySelectorAll('a');
console.log(allA2.length);

allA2[index2].style.backgroundColor = "blue";

for (let i = 0; i < allA2.length; i++) {
	allA2[i].index2 = i; //为每一个超链接添加index属性
	allA2[i].onclick = function() {
		//关闭自动切换定时器
		//点击获取超链接的索引，并且将它设置为index2
		index2 = this.index2;
		imgcontain.style.left = -100 * index2 + "vw";

		setA2();
	}
}



function setA2() {
	//判断当前索引是否是最后一张图片
	if (index2 >= endArr.length - 1) {
		index2 = 0;
		imgcontain.style.left = 0;
	}

	for (var i = 0; i < allA2.length; i++) {
		allA2[i].style.backgroundColor = "blue";
	}
	allA1[index2].style.backgroundColor = "white";
}

//对于下面的左移右移进行时间绑定
var prev2 = document.querySelector(".arrow_left");
var next2 = document.querySelector(".arrow_right");


prev2.onclick = function() {
	index2--;


	//判断Index1是否属是小于0
	if (index2 < 0) {
		index2 = 0;
	}
	imgcontain.style.left = index2 * 100 + "vw";
}

next2.onclick = function() {
	//切换到下一张，索引自增
	index2++;

	//判断index2是否是最后一张
	if (index2 <= endArr.length - 2) {
		index2 = 0;
	}
	imgcontain.style.left = -100 * index2 + "vw";

}

var ldone = document.querySelector('#ld_one');
var ldtwo = document.querySelector('#ld_two');
var ldthree = document.querySelector('#ld_three');
var right1 = document.querySelector(".right_top_left");
var right2 = document.querySelector(".right_top_right");
var right3 = document.querySelector(".right_bottom_left");
var right4 = document.querySelector(".right_bottom_right");

console.log(right1);
console.log(right2);




var fourright=document.querySelector('.four_right');
console.log(fourright);

ldone.onmouseover = function() {
	
	right1.style.background = "url(./img/index_link_1_1.jpg)";
	right1.querySelector('.right_top_top').innerHTML = "通信和社交";
	right1.querySelector('.right_top_bottom').innerHTML = "	人与人之间提供丰富的及时通讯和社交平台，让沟通更加便捷";

	right2.style.background = "url(./img/index_link_1_2.jpg)";
	right2.querySelector('.right_top_top').innerHTML = "数字内容";
	right2.querySelector('.right_top_bottom').innerHTML = "基于优质内容，以技术为驱动引擎，探索社交和内容融合的下一代形态。";

	right3.style.background = "url(./img/index_link_1_3.jpg)";
	right3.querySelector('.right_top_top').innerHTML = "金融科技服务";
	right3.querySelector('.right_top_bottom').innerHTML = "连接用户、商户和金融机构，提供安全、专业、便捷的金融产品与服务。";

	right4.style.background = "url(./img/index_link_1_4.jpg)";
	right4.querySelector('.right_top_top').innerHTML = "工具";
	right4.querySelector('.right_top_bottom').innerHTML = "提供多种工具性软件，帮助用户快速直接解决各项具体需求。";

}
ldtwo.onmouseover = function() {
	right1.style.background = "url(./img/index_link_2_1.jpg)";
	right1.querySelector('.right_top_top').innerHTML = "腾讯广告营销";
	right1.querySelector('.right_top_bottom').innerHTML = "大数据营销平台，汇聚腾讯全量应用场景，提供一体化数字化营销方案。";

	right2.style.background = "url(./img/index_link_2_2.jpg)";
	right2.querySelector('.right_top_top').innerHTML = "腾讯云";
	right2.querySelector('.right_top_bottom').innerHTML = "提供领先的云产品与云服务，辅助企业走向数字化和全球化。";

	right3.style.width = "100%"
	right3.style.background = "url(./img/index_link_2_3.jpg)";
	right3.querySelector('.right_top_top').innerHTML = "智慧产业";
	right3.querySelector('.right_top_bottom').innerHTML = "通过云、AI、大数据分析、安全、支付、小程序、LBS等互联网前沿技术和产品";


	right4.remove();
}

ldthree.onmouseover = function() {
	

	
	right1.style.background = "url(./img/index_link_3_1.jpg)";
	right1.querySelector('.right_top_top').innerHTML = "人工智能";
	right1.querySelector('.right_top_bottom').innerHTML = "运用多种技术资产，提升人工智能实力，惠及人类和世界。";
	right2.style.background = "url(./img/index_link_3_2.jpg)";
	right2.querySelector('.right_top_top').innerHTML = "物联网";
	right2.querySelector('.right_top_bottom').innerHTML = "通过腾讯云物联网，致力提供IoT全栈产品和解决方案。";

	right3.style.background = "url(./img/index_link_3_3.jpg)";
	right3.querySelector('.right_top_top').innerHTML = "多媒体";
	right3.querySelector('.right_top_bottom').innerHTML = "腾讯多媒体实验室专注音视频通信技术的前瞻性研究。";
	right4.style.background = "url(./img/index_link_3_4.jpg)";
	right4.querySelector('.right_top_top').innerHTML = "腾讯探索";
	right3.querySelector('.right_top_bottom').innerHTML = "携手合作伙伴探索未来和相关技术，帮助解决全球在食物、能源和水源方面的挑战。";
	console.log("图片1：", right1.style.background);
}




var width = document.querySelector("html").offsetWidth;
var navmore = document.querySelector('.nav-more');
var navmoremore = document.querySelector('.nav-more-more');

console.log(navmore);
console.log(navmoremore);

navmore.onclick = function() {
	navmoremore.style.display = "block";
}

var delete1 = document.querySelector('.delete');
delete1.onclick = function() {
	navmoremore.style.display = 'none';

}




var eight = document.querySelector(".eight");
var LatestNews = document.querySelector('.LatestNews');
window.addEventListener('scroll', function() {
	if (window.pageYOffset >= LatestNews.offsetTop) {
		eight.style.display = 'block';
	} else {
		eight.style.display = 'none';
	}
})

eight.addEventListener('click', function() {
	window.scroll(0, 0);
})






var shipinerzi = document.querySelector('.shipin_erzi');
var video = document.querySelector('.video');


shipinerzi.onclick = function() {
	shipinerzi.style.display = 'none';
	video.style.display = 'block';

}






//// }
