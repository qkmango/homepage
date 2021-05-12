let theme = $.cookie('theme');

function loadCssTheme() {
	let css = 'css/moon.css';
	if(theme == 'sun') {
		css = 'css/sun.css';
	}
	document.getElementById('theme-css').href = css;
}


function loadBgImgTheme() {
	let backgroundimg = 'imgs/background/moon.svg';
	if(theme == 'sun') {
		backgroundimg = 'imgs/background/sun.svg';
	}
	document.getElementById('backgroundimg').src = backgroundimg;
}


function loadChangeThemeBtn(){
	let btn_img = '\ue624';
	if(theme == 'sun') {
		btn_img = '\ue603';
	}
	document.getElementById('switch-img').innerText = btn_img;
}

function loadAnimateTheme() {
	let animate = 'css/animate_moon.css';
	if(theme == 'sun') {
		animate = 'css/animate_sun.css';
	}
	document.getElementById('animate').href = animate;
}

function loadThemeAll() {
	reloadThemeCookie();
	loadCssTheme();
	loadAnimateTheme();
	loadBgImgTheme();
	loadChangeThemeBtn();
}

function setTheme(theme) {
	//cookie有效期365天
	$.cookie('theme',theme,{expires:365});
}

function reloadThemeCookie() {
	theme = $.cookie('theme');
}