var items = document.getElementsByClassName("item");
var len = items.length;

const original = window.getComputedStyle(items[0]).getPropertyValue("width");

for (var i = 0; i < len; i++) {
    items[i].addEventListener("click", function(){
        var active_item = document.getElementsByClassName("active");
        active_item[0].classList.remove("active");
        this.classList.add("active");
    })
}