// 不显示非简历相关的内容
window.onload = function() {
    let param =  window.location.search.substring(1);
    if(param == 'resume') {
        let item = document.getElementsByClassName('displaynone');
        for(let i=0;i<item.length;i++) {
            item[i].style.display='none';
        }
    }
}