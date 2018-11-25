var call = document.querySelector(".call");
var order =document.querySelector(".order_form");
var close = document.getElementById("close");

call.onclick = function(){
    order.style.display="block";
};
close.onclick = function(){
    order.style.display="none";
};