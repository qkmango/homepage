window.onload = function() {
	
	// =========黑夜白天模式===========
	var theme_flag = theme=='moon'?false:true;
	
	var switch_btn = document.getElementById('switch-btn');
	var switch_img = document.getElementById('switch-img');
	var theme_css = document.getElementById('theme-css');
	var backgroundimg = document.getElementsByClassName('backgroundimg')[0];
	
	
	switch_btn.onclick = function() {
		if(theme_flag) {
			theme_flag = !theme_flag;
			setTheme('moon');
		}else{
			theme_flag = !theme_flag;
			setTheme('sun');
		}
		loadThemeAll();
	}
	
	
	getOSList();
	toLovePage();
	getYiyan();
	// printLogo();
}





// ===============控制台输出==============
function printLogo() {
	let logo="";
	logo+="         _______                  _____                   _____                   _____                   _____                   _____                  _______         \n";
	logo+="        /::\\    \\                /\\    \\                 /\\    \\                 /\\    \\                 /\\    \\                 /\\    \\                /::\\    \\        \n";
	logo+="       /::::\\    \\              /::\\____\\               /::\\____\\               /::\\    \\               /::\\____\\               /::\\    \\              /::::\\    \\       \n";
	logo+="      /::::::\\    \\            /:::/    /              /::::|   |              /::::\\    \\             /::::|   |              /::::\\    \\            /::::::\\    \\      \n";
	logo+="     /::::::::\\    \\          /:::/    /              /:::::|   |             /::::::\\    \\           /:::::|   |             /::::::\\    \\          /::::::::\\    \\     \n";
	logo+="    /:::/~~\\:::\\    \\        /:::/    /              /::::::|   |            /:::/\\:::\\    \\         /::::::|   |            /:::/\\:::\\    \\        /:::/~~\\:::\\    \\    \n";
	logo+="   /:::/    \\:::\\    \\      /:::/____/              /:::/|::|   |           /:::/__\\:::\\    \\       /:::/|::|   |           /:::/  \\:::\\    \\      /:::/    \\:::\\    \\   \n";
	logo+="  /:::/    / \\:::\\    \\    /::::\\    \\             /:::/ |::|   |          /::::\\   \\:::\\    \\     /:::/ |::|   |          /:::/    \\:::\\    \\    /:::/    / \\:::\\    \\  \n";
	logo+=" /:::/____/   \\:::\\____\\  /::::::\\____\\________   /:::/  |::|___|______   /::::::\\   \\:::\\    \\   /:::/  |::|   | _____   /:::/    / \\:::\\    \\  /:::/____/   \\:::\\____\\ \n";
	logo+="|:::|    |     |:::|    |/:::/\\:::::::::::\\    \\ /:::/   |::::::::\\    \\ /:::/\\:::\\   \\:::\\    \\ /:::/   |::|   |/\\    \\ /:::/    /   \\:::\\ ___\\|:::|    |     |:::|    |\n";
	logo+="|:::|____|     |:::|____/:::/  |:::::::::::\\____/:::/    |:::::::::\\____/:::/  \\:::\\   \\:::\\____/:: /    |::|   /::\\____/:::/____/  ___\\:::|    |:::|____|     |:::|    |\n";
	logo+=" \\:::\\   _\\___/:::/    /\\::/   |::|~~~|~~~~~    \\::/    / ~~~~~/:::/    \\::/    \\:::\\  /:::/    \\::/    /|::|  /:::/    \\:::\\    \\ /\\  /:::|____|\\:::\\    \\   /:::/    / \n";
	logo+="  \\:::\\ |::| /:::/    /  \\/____|::|   |          \\/____/      /:::/    / \\/____/ \\:::\\/:::/    / \\/____/ |::| /:::/    / \\:::\\    /::\\ \\::/    /  \\:::\\    \\ /:::/    /  \n";
	logo+="   \\:::\\|::|/:::/    /         |::|   |                      /:::/    /           \\::::::/    /          |::|/:::/    /   \\:::\\   \\:::\\ \\/____/    \\:::\\    /:::/    /   \n";
	logo+="    \\::::::::::/    /          |::|   |                     /:::/    /             \\::::/    /           |::::::/    /     \\:::\\   \\:::\\____\\       \\:::\\__/:::/    /    \n";
	logo+="     \\::::::::/    /           |::|   |                    /:::/    /              /:::/    /            |:::::/    /       \\:::\\  /:::/    /        \\::::::::/    /     \n";
	logo+="      \\::::::/    /            |::|   |                   /:::/    /              /:::/    /             |::::/    /         \\:::\\/:::/    /          \\::::::/    /      \n";
	logo+="       \\::::/____/             |::|   |                  /:::/    /              /:::/    /              /:::/    /           \\::::::/    /            \\::::/    /       \n";
	logo+="        |::|    |              \\::|   |                 /:::/    /              /:::/    /              /:::/    /             \\::::/    /              \\::/____/        \n";
	logo+="        |::|____|               \\:|   |                 \\::/    /               \\::/    /               \\::/    /               \\::/____/                ~~              \n";
	logo+="         ~~                      \\|___|                  \\/____/                 \\/____/                 \\/____/                                                         ";
	console.log("%c"+logo,"color:#fff;background:#1aaf5d");
	console.log("%c@芒果小洛 qkmango  http://qkmango.cn","font-size:14px;color:#1aaf5d;font-weight:bold;");
}


// 我的开源项目列表
function getOSList() {
	let token = '';
	ajax({
		url:'resource/token.json',
		dataType:'json',
		success:function(data) {
			token = data.access_token;
		}
	})

	ajax({
		url:'https://api.github.com/users/qkmango/repos',
		headers: {'Authorization': token},
		dataType:'json',
		success:function(data) {
			data.reverse();
			let html = '';
			each({
				data:data,
				eachfun:function(index,item) {
					html += '<a class="case-li hover-style style" href="'+item.html_url+'" target="_blank">'+item.name+'</a>'
				}
			})
			document.querySelector("#os-box").innerHTML = html;
		}
	})
}

/**
 * 获取一言列表
 */
function getYiyan() {
	ajax({
		url:'resource/yiyan.json',
		dataType:'json',
		success:function(data) {
			
			let arr = data["arr"];
			let random = randomNum(0,arr.length-1);
			let context = arr[random]["context"];
			let link = arr[random]["link"];

			document.querySelector('#yiyan .context').innerText = context;
			document.querySelector('#yiyan a').href = link;
		}
	})
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


/**
 * 组合键跳转网页、百度回车键监听
 */
function toLovePage() {
	let w = -1;
	let y = -1;
	let x = -1;
	document.onkeydown = function(event) {
		if(event.keyCode==87) {
			w = 87;
		}
		if(event.keyCode==89) {
			y = 89;
		}
		if(event.keyCode==88) {
			x = 88;
		}
		if(w==87 && y==89 && x==88) {
			window.location = "./page/love/"
		}
	}
	document.onkeyup = function() {
		w = -1;
		y = -1;
		x = -1;
	}
}


		

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