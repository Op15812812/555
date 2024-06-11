  window.onscroll = function() {
    var scrollButton = document.getElementById("scrollButton");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        // 滚动距离大于100px时显示按钮
        scrollButton.parentElement.style.display = "block";
    } else {
        // 滚动距离小于等于100px时隐藏按钮
        scrollButton.parentElement.style.display = "none";
    }
    document.getElementById("scrollButton").onclick = function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
};