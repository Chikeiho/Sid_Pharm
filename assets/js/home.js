var menu = document.getElementById('icon');
var list = document.getElementById('list');
var close = document.getElementById('close');
menu.addEventListener('click', function () {
    list.style.display = 'block'
})
close.addEventListener('click', function () {
    list.style.display = 'none'
})