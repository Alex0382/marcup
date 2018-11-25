var carouselGall = document.getElementById("carousel_img");
var widthGall = 290;
var countGall = 1;
var listGall = carouselGall.querySelector('ul');
var listElemsGall = carouselGall.querySelectorAll('li');
var positionGall = 0;
var bigImg = document.querySelector(".biggest");
var preview = document.querySelector(".gallery");
var panel = document.querySelector(".big_img");
var closeGall =document.getElementById("close_gall");

carouselGall.querySelector('.prev_gall').onclick = function(){
    positionGall = Math.min(positionGall + widthGall * countGall, 0)
      listGall.style.marginLeft = positionGall + 'px';
};
carouselGall.querySelector('.next_gall').onclick = function() {
    positionGall = Math.max(positionGall - widthGall * countGall,-widthGall * (listElemsGall.length - count));
      listGall.style.marginLeft = positionGall + 'px';
};

preview.onclick = function(click) {
    var target = click.target;

    while (target != this) {

      if (target.nodeName == 'A') {
        showBig(target.href);
        return false;
      };

      target = target.parentNode;
    };

  };

  function showBig(href) {
    bigImg.src = href;
    panel.style.display ="block";
    closeGall.style.display ="block";
  };
  closeGall.onclick = function(){
    panel.style.display="none";
  };