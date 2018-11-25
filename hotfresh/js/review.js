
let carouselRev = document.getElementById("review_m");
var widthRev = 250;
var countRev = 1;
var listRev = carouselRev.querySelector('ul');
var listElemsRev = carouselRev.querySelectorAll('li');
var positionRev = 0;
var feedback = document.querySelector(".feedback_mob");
var closeFeed = document.getElementById("close_rev");
var give = document.querySelector(".give_feet_m");
var look = document.querySelector(".all_rev");
var allRev = document.querySelector(".all_review");
var closeRev = document.getElementsByTagName("section");

carouselRev.querySelector('.prev').onclick = function(){
    positionRev = Math.min(positionRev + widthRev * countRev, 0)
      listRev.style.marginLeft = positionRev + 'px';
};
carouselRev.querySelector('.next').onclick = function() {
    positionRev = Math.max(positionRev - widthRev * countRev,-widthRev * (listElemsRev.length - countRev));
      listRev.style.marginLeft = positionRev + 'px';
};
give.onclick = function(){
  feedback.style.display="block";
  closeFeed.style.display="block";
  give.style.display="none";
};
closeFeed.onclick = function(){
  feedback.style.display="none";
  give.style.display="block";
};
look.onclick = function(e){
  e.stopPropagation();
  allRev.style.display="block";
  look.style.display="none";
};
document.onclick = function(event){
  var target = event.target;
  if(target.Name !="all_review"){
    allRev.style.display="none";
    look.style.display="block";
  }; 
};
allRev.onclick = function(e){
  e.stopPropagation();
};