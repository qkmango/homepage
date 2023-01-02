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
	ajax({
		//按照更新时间排序
		url:'https://gitee.com/api/v5/users/qkmango/repos?sort=updated',
		dataType:'json',
		success:function(data) {
			// data.reverse();
			let html = '';
			let url_header = 'https://gitee.com/qkmango/';
			each({
				data:data,
				eachfun:function(index,item) {
					html += '<a class="case-li hover-style style" href="'+item.assigner.html_url+'/'+item.path+'" target="_blank">'+item.name+'</a>'
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
 * 组合键跳转网页、百度回车键监听
 */
function toLovePage() {
	let z = -1;
	let y = -1;
	document.onkeydown = function(event) {
		if(event.keyCode==90) {
			z = 90;
		}
		if(event.keyCode==89) {
			y = 89;
		}
		if(z==90 && y==89) {
			window.location = "./page/love/"
		}
	}
	document.onkeyup = function() {
		z = -1;
		y = -1;
	}
}


		

