window.onload = function() {
	
	// =========黑夜白天模式===========
	var flag = false;
	
	var switch_btn = document.getElementById('switch-btn');
	var switch_img = document.getElementById('switch-img');
	var sun_moon_css = document.getElementById('sun-moon-css');
	
	switch_btn.onclick = function() {
		if(flag) {
			flag = false;
			switch_img.innerText = '\ue624';
			sun_moon_css.href='css/moon.css';
		}else{
			flag = true;
			switch_img.innerText = '\ue603';
			sun_moon_css.href='css/sun.css';
		}
	}
	
	//==============组合键跳转网页、百度回车键监听================
	var z = -1;
	var y = -1;
	document.onkeydown = function(event) {
		if(event.keyCode==90) {
			z = 90;
		}
		if(event.keyCode==89) {
			y = 89;
		}
		if(z==90 && y==89) {
			window.location = "./case/2/"
		}
	}
	document.onkeyup = function() {
		z = -1;
		y = -1;
	}
	
	
	getYiyan();
	getOSList();
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
	
	$.ajax({
		url:'resource/token.json',
		type:'get',
		async:false,
		dataType:'json',
		success:function(data) {
			token = data.access_token;
		}
	})
	
	$.ajax({
		url:'https://api.github.com/users/qkmango/repos',
		headers: {'Authorization': token},
		type:'get',
		dataType:'json',
		success:function(data) {
			let html = '';
			$.each(data,function(i,n) {
				html += '<a class="case-li hover-style style" href="'+n.html_url+'" target="_blank">'+n.name+'</a>'
			})
			$('#os-box').html(html)
		}
	})
}

/**
 * 获取一言列表
 */
function getYiyan() {
	$.ajax({
		url:'resource/yiyan.json',
		type:'get',
		dataType:'json',
		success:function(data) {
			
			let arr = data["arr"];
			let random = randomNum(0,arr.length-1);
			let context = arr[random]["context"];
			let link = arr[random]["link"];
			
			$("#yiyan .context").text(context)
			$("#yiyan a").attr("href",link);
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
		break;
		case 2:
			return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10);
		break;
			default:
				return 0;
			break;
	} 
} 