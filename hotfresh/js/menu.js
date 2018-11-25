
var menu = document.querySelector(".menu");
var selectA;
var sandwich = document.querySelector(".sandwich");
var close = document.querySelector(".close");

menu.onclick = function(event){
    var target = event.target;
    if(target.tagName !="A"){
        return;
    };
    red(target);
};
function red(node){
    if(selectA){
        selectA.style.color="white";
    };
    selectA=node;
    selectA.style.color="#7d0003";
};
sandwich.onclick = function(){
    menu.style.left="0px";
    sandwich.style.display="none";
    close.style.display="block";
};
close.onclick = function(){
    menu.style.left="-220px";
    sandwich.style.display="block";
};