
var carousel = document.getElementById("carousel");
var width = 170;
var count = 1;
var list = carousel.querySelector('ul');
var listElems = carousel.querySelectorAll('li');
var position = 0;
var menuBig = document.querySelector(".menu_big");
var all = document.querySelector(".all_menu");


carousel.querySelector('.prev').onclick = function(){
    position = Math.min(position + width * count, 0)
      list.style.marginLeft = position + 'px';
};
carousel.querySelector('.next').onclick = function() {
    position = Math.max(position - width * count,-width * (listElems.length - count));
      list.style.marginLeft = position + 'px';
};
all.onclick = function(e){
  e.stopPropagation();
  menuBig.style.display="block";
};

function close (event){
  var target = event.target;
  if(target.Name !="menu_big"){
    menuBig.style.display="none";
  }; 
};
document.addEventListener( "click",close);
menuBig.onclick = function(e){
  e.stopPropagation();
};
