
var map = document.querySelector(".big_map");
var closeMap = document.getElementById("close_map");
var lookMap = document.querySelector(".map");

lookMap.onclick = function(){
    map.style.display="block";
    closeMap.style.display="block";
  };
  closeMap.onclick = function(){
    map.style.display="none";
    closeMap.style.display="none";
  };