
var basket = document.querySelector(".basket");
var closeBasket = basket.querySelector(".close_basket");
var basketName = basket.querySelector(".basket_name");
var carte1 = document.querySelector(".carte_1");
var ord1 = carte1.querySelector(".ord");
var carte2 = document.querySelector(".carte_2");
var ord2 = carte2.querySelector(".ord");
var carte3 = document.querySelector(".carte_3");
var ord3 = carte3.querySelector(".ord");
var amount = basket.querySelector(".amount");
var countBasket = basket.querySelector(".count_basket");
var countNum = basket.querySelector(".count_num");
var sendOrder = basket.querySelector(".send_order");
var sum;

ord1.onclick = function(){
    basket.style.display = "block";
    closeBasket.style.display = "block";
    basketName.innerHTML ="Цезарь";
    amount.value=0;
    sum=amount.value*0 + " грн.";
    countNum.innerHTML = sum;
    countBasket.onclick = function(){
        sum = amount.value*100 + " грн.";
        countNum.innerHTML = sum;
    };
};
ord2.onclick = function(){
    basket.style.display = "block";
    closeBasket.style.display = "block";
    basketName.innerHTML ="Маргарита";
    amount.value=0;
    sum=amount.value*0 + " грн.";
    countNum.innerHTML = sum;
    countBasket.onclick = function(){
        sum = amount.value*70 + " грн.";
        countNum.innerHTML = sum;
    };
};
ord3.onclick = function(){
    basket.style.display = "block";
    closeBasket.style.display = "block";
    basketName.innerHTML ="Гавайская";
    amount.value=0;
    sum=amount.value*0 + " грн.";
    countNum.innerHTML = sum;
    countBasket.onclick = function(){
        sum = amount.value*85 + " грн.";
        countNum.innerHTML = sum;
    };
};
closeBasket.onclick = function(){
    basket.style.display = "none";
    closeBasket.style.display = "none";
};
sendOrder.onclick = function(){
    basket.style.display = "none";
    closeBasket.style.display = "none";
};