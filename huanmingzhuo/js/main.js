function darkMode() {
    let element = document.body;
    let content = document.getElementById("DarkModetext");
    element.className = "dark-mode";
    content.innerText = "现在是黑暗模式";
}
function lightMode() {
    let element = document.body;
    let content = document.getElementById("DarkModetext");
    element.className = "light-mode";
    content.innerText = "现在是明亮模式";
}

function copyLink(url) {  
  navigator.clipboard.writeText(url).then(function() {  
    alert('链接已复制到剪贴板');  
  }, function(err) {  
    console.error('复制失败: ', err);  
  });  
}