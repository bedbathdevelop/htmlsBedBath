
window.onload = function() {


    /*Popup*/
    //Popuprecomendations CGR
    var prod = document.getElementById("poprecomendations");
    var prod2 = document.getElementById("poprecomendationsb");
    var prod3 = document.getElementById("poprecomendationsc");
    var prod4 = document.getElementById("poprecomendationsd");
    var prod5 = document.getElementById("poprecomendationse");
    var prod6 = document.getElementById("poprecomendationsf");
    var prod7 = document.getElementById("poprecomendationsg");
    var prod8 = document.getElementById("poprecomendationsh");
    var prod9 = document.getElementById("poprecomendationsi");
    var prod10 = document.getElementById("poprecomendationsj");

    showPop();

    function showPop() {
        setTimeout(function(){ prod.classList.add("displayactive")}, 1000);
        setTimeout(function(){ prod.classList.remove("displayactive") }, 4000);
        setTimeout(function(){  showPop2()}, 4000);
    }

    function showPop2() {
        setTimeout(function(){ prod2.classList.add("displayactive") }, 1000);
        setTimeout(function(){ prod2.classList.remove("displayactive") }, 4000);
        setTimeout(function(){  showPop3()}, 6000);
    }
 
    function showPop3() {
        setTimeout(function(){ prod3.classList.add("displayactive") }, 1000);
        setTimeout(function(){ prod3.classList.remove("displayactive") }, 4000);
        setTimeout(function(){  showPop4()}, 8000);
    }

    function showPop4() {
        setTimeout(function(){ prod4.classList.add("displayactive") }, 1000);
        setTimeout(function(){ prod4.classList.remove("displayactive") }, 4000);
        setTimeout(function(){  showPop5()}, 10000);
    }

    function showPop5() {
        setTimeout(function(){ prod5.classList.add("displayactive") }, 1000);
        setTimeout(function(){ prod5.classList.remove("displayactive") }, 4000);
        setTimeout(function(){  showPop6()}, 12000);
    }

    function showPop6() {
        setTimeout(function(){ prod6.classList.add("displayactive") }, 1000);
        setTimeout(function(){ prod6.classList.remove("displayactive") }, 4000);
        setTimeout(function(){  showPop7()}, 14000);
    }

    function showPop7() {
        setTimeout(function(){ prod7.classList.add("displayactive") }, 1000);
        setTimeout(function(){ prod7.classList.remove("displayactive") }, 4000);
        setTimeout(function(){  showPop8()}, 16000);
    }

    function showPop8() {
        setTimeout(function(){ prod8.classList.add("displayactive") }, 1000);
        setTimeout(function(){ prod8.classList.remove("displayactive") }, 4000);
        setTimeout(function(){  showPop9()}, 18000);
    }

    function showPop9() {
        setTimeout(function(){ prod9.classList.add("displayactive") }, 1000);
        setTimeout(function(){ prod9.classList.remove("displayactive") }, 4000);
        setTimeout(function(){  showPop10()}, 20000);
    }
    function showPop10() {
        setTimeout(function(){ prod10.classList.add("displayactive") }, 1000);
        setTimeout(function(){ prod10.classList.remove("displayactive") }, 4000);
    }
}
