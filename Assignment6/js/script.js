/* function checkedOff () {
    if (document.getElementById("handTossed").checked) {
        document.getElementById("ifHandTossed").style.visibility= "visible";
    } else document.getElementById("ifHandTossed").style.visibility= "hidden";
} */

//get setIndexOf ??? 
function check() {
    var dropdown = document.getElementById("selection");
    var current_value =
dropdown.options[dropdown.selectedIndex].value;
    if (current_value == "other") {
        document.getElementById("enterOther").style.display="block";
    }
    else {
        document.getElementById("enterOther").style.display = "none";
    }
}
function yourfunction(radioid) {
    if(radioid == 1){
        document.getElementById("one").style.display= "block";
        document.getElementById("two").style.display= "none";
        document.getElementById("three").style.display= "none";
        document.getElementById("four").style.display= "none";
    }
    else if(radioid == 2) 
    {
      document.getElementById("one").style.display= "none";
        document.getElementById("two").style.display= "block";
        document.getElementById("three").style.display= "none"; 
        document.getElementById("four").style.display= "none";
    }
    else if(radioid == 3) {
        document.getElementById("one").style.display= "none";
        document.getElementById("two").style.display= "none";
        document.getElementById("three").style.display= "block";
        document.getElementById("four").style.display= "none";
    }
    else if(radioid == 4) {
        document.getElementById("one").style.display= "none";
        document.getElementById("two").style.display= "none";
        document.getElementById("three").style.display= "none";
        document.getElementById("four").style.display= "block";
    }
}


//Pizza Crust calculations

var crustPrices = new Array();
crustPrices["smHandTossed"] = 9.99;
crustPrices["mdHandTossed"] = 12.99;
crustPrices["lgHandTossed"] = 14.99;

function getCrustPrice(){
    var crustTypePrice=0;
    var theForm = document.forms["pizzaForm"];
    var selectedCrust = theForm.elements["handTossed"];
    crustTypePrice = crustPrices[selectedHandTossed.value];
    return crustTypePrice;
}

//Pizza Crust calculations

var thincrustPrices = new Array();
thincrustPrices["mdThinCrust"] = 9.99;
thincrustPrices["lgThinCrust"] = 12.99;


function getThinCrustPrice(){
    var thincrustTypePrice=0;
    var theForm = document.forms["pizzaForm"];
    var selectedThinCrust = theForm.elements["thinCrust"];
    crustTypePrice = thincrustPrices[selectedThinCrust.value];
    return thincrustTypePrice;
    
}
function getTotal(){
var pizzaPrice = getCrustPrice() + getThinCrustPrice();
document.getElementById("totalPrice").innerHTML = "Total Price for Pizza" + pizzaPrice;
    }