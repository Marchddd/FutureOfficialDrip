//定义一个函数,用来向一个元素中添加指定的class属性值
/*
 * 参数：
 * obj 要添加class的元素
 * cn 要添加的class值
 * 
 */
function addClass(obj,cn){
	//检查obj中是否有cn
	if(!hasClass(obj,cn)){
		obj.className+=" "+cn;
	}
	
	
}
//判断一个元素中是否有指定的class属性值
function hasClass(obj,cn){
	//判断obj中有没有cnclass
	/*var reg=/\bb2\b/;*/
	var reg=new RegExp("\\b"+cn+"\\b");
	//创建一个正则表达式
	return reg.test(obj.className);
}
/*删除一个元素中指定的元素*/
function removeClass(obj,cn){
	//创建一个正则表达式
	var reg=new RegExp("\\b"+cn+"\\b");
	//删除class
	obj.className=obj.className.replace(reg,"");
}
/*切换一个类
 * 如果元素中具有该类则删除
 * 如果元素中没有该类则添加*/
function toggleClass(obj,cn){
	//判断obj中是否有cn
	if(hasClass(obj,cn)){
		//有,删除
		removeClass(obj,cn);
	}else{
		//没有,添加
		addClass(obj,cn);
	}
}
