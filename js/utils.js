// ajax
function ajax({url,type='GET',dataType,async=true,success=function(res){}}) {
	var xhr;
	if (window.XMLHttpRequest) {
		xhr = new XMLHttpRequest();
	} else {
		xhr = new ActiveXObject("Microsoft.XMLHTTP");
	}

	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4) {
			if (xhr.status == 200) {
				let obj = xhr.responseText;
				if(dataType == 'json') {
					obj = JSON.parse(obj);
				}
				success(obj);
			}
		}
	}
	xhr.open(type,url,async);
	xhr.send();
}



function each({data,eachfun=function(index,item){}}) {
	for(let i=0;i<data.length;i++) {
		let item = data[i];
		eachfun(i,item);
	}
}

/**
 * 生成随机整数
 * @param {Object} minNum 最小值
 * @param {Object} maxNum 最大值
 */
function randomNum(minNum,maxNum){ 
	switch(arguments.length){ 
		case 1:
			return parseInt(Math.random()*minNum+1,10);
		case 2:
			return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10);
		default:
			return 0;
	} 
} 