
//show other text field
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



function getCheesePrice() {
    var cheeseTotal = document.getElementById("cheeseOptions").value;
    return parseFloat(cheeseTotal);
}

function getSaucePrice() {
    var sauceTotal = document.getElementById("sauceOptions").value;
    return parseFloat(sauceTotal);
}


function getToppingsPrice() {
    var toppingArray = document.getElementsByClassName("toppings");
    var selectedToppings= 0;
    for (i=0; i <toppingArray.length; i++) {
        if (toppingArray[i].checked) {
            selectedToppings += .99;
        }
    }
    return selectedToppings;
}

function getDoughPrice () {
    var doughArray = document.getElementsByClassName("dough");
    for (i=0; i <doughArray.length; i++) {
       var grandparentElement = doughArray[i].parentElement.parentElement; //grabs the div for dough option
        if (grandparentElement.style.display === "block") { 
            return parseFloat (doughArray[i].value) //
            }
    }
    return 0; //getTotalPrice needs to have a number selection because there no value added to dough array. Keeps from Nan
}

function getTotalPrice(){
    return Math.round(100 * (getCheesePrice() + getSaucePrice() + getToppingsPrice() + getDoughPrice()))/100;
}

function showTotalPrice(){
    var totalH1 = document.getElementById("total");
    totalH1.textContent= "$ " + getTotalPrice(); //text content puts text inside of the element.
}

function validateName(event) {
    if (event.target.value.match(/^[a-zA-Z]+$/)) {
        document.getElementById('nameValidation').innerText = '';
    } else {
        document.getElementById('nameValidation').innerText = 'Invalid name. Please try again.';
    }
}
function validateEmail(event) {
    if (event.target.value.match(/[^@]+@[^@]+/)) {
        document.getElementById('emailValidation').innerText = '';
    } else {
        document.getElementById('emailValidation').innerText = 'Invalid email. Please try again.';
    }
}
function validateState(event) {
    if (event.target.value.match(/^[a-zA-Z]{5}$/)) {
        document.getElementById('stateValidation').innerText = '';
    } else {
        document.getElementById('stateValidation').innerText = 'Please enter two alphabet characters.';
    }
}
function validateZipcode(event) {
    if (event.target.value.match(/^[0-9]{5}$/)) {
        document.getElementById('zipValidation').innerText = '';
    } else {
        document.getElementById('zipValidation').innerText = 'Invalid zip code. Please try again.';
    }
}
function validatePhone() {
    if (event.target.value.match(/^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/)) {
        document.getElementById('phoneValidation').innerText = '';
    } else {
        document.getElementById('phoneValidation').innerText = 'Invalid phone number. Please try again.';
    }
}

function validateBillingName(event) {
    if (event.target.value.match(/^[a-zA-Z]+$/)) {
        document.getElementById('billingNameValidation').innerText = '';
    } else {
        document.getElementById('billingNameValidation').innerText = 'Invalid name. Please try again.';
    }
}

function validateBillingState(event) {
    if (event.target.value.match(/^[a-zA-Z]{2}$/)) {
        document.getElementById('billingStateValidation').innerText = '';
    } else {
        document.getElementById('billingStateValidation').innerText = 'Please enter two alphabet characters.';
    }
}

function validateBillingZip(event) {
    if (event.target.value.match(/^[0-9]{2}$/)) {
        document.getElementById('billingZipValidation').innerText = '';
    } else {
        document.getElementById('billingZipValidation').innerText = 'Invalid zip code. Please try again.';
    }
}

function checkExpiration(){
    var selectedDate = new Date
    (document.getElementById("expireYear").value, document.getElementById("expireMonth").value);
     var lastDate = new Date(nextmonth -1);
     var today= new Date();
     if (today > selectedDate){
         alert("Invalid");
     } else {
         alert("valid");
     }
}

function validateCvc(event) {
    if (event.target.value.match(/^[0-9]{3}$/)) {
        document.getElementById('cvcValidation').innerText = '';
    } else {
        document.getElementById('cvcValidation').innerText = 'Invalid cvc. Please enter 3 digits.';
    }
}



window.onload=function(){
    var name = document.getElementById('name');
    name.addEventListener('blur', validateName);
    
    var billingNamed = document.getElementById('billingName');
    billingNamed.addEventListener('blur', validateBillingName);
    
    var email = document.getElementById('email');
    email.addEventListener('blur', validateEmail);
    
    var state = document.getElementById('state');
    state.addEventListener('blur', validateState);
    
    var billingState= document.getElementById('billingState');
    billingState.addEventListener('blur' , validateBillingState);
    
    var zipcode = document.getElementById('zip');
    zipcode.addEventListener('blur', validateZipcode);
    
    var billingZip = document.getElementById('billingZip');
    billingZip.addEventListener('blur', validateBillingZip);
    
    var phoneNumber = document.getElementById('phone');
    phoneNumber.addEventListener('blur', validatePhone);
    
    var sauceSelect= document.getElementById("sauceOptions");
    sauceSelect.addEventListener("change" , showTotalPrice);
    
    var cheeseSelect= document.getElementById("cheeseOptions");
    cheeseSelect.addEventListener("change" , showTotalPrice);
    
    var cvcValidate = document.getElementById('cvc');
    cvcValidate.addEventListener('blur', cvcValidation);
    
    var toppingsSelect= document.getElementsByClassName("toppings");
    for (i=0; i<toppingsSelect.length; i++) {
        toppingsSelect[i].addEventListener("click", showTotalPrice);
    }
    
    var doughSelect =document.getElementsByClassName("dough");
    for (i=0; i<doughSelect.length; i++){
        doughSelect[i].addEventListener("change", showTotalPrice);
    }
    
    var submitButton=document.getElementById("submitButton");
    submitButton.addEventListener("click", function(event){
        event.preventDefault()
       var userConfirm=window.confirm("Is your order complete?");
        if (userConfirm === true){
            document.getElementById("billingInformation").style.display="block";
    }
    else {
        document.getElementById("bililngInformation").style.display = "none";
    }
        
    })
    
    var billingInfo= document.getElementById("billing");
    billingInfo.addEventListener("click" , function(){
        document.getElementById("billingName").value = document.getElementById("name").value;
        document.getElementById("billingAddress").value = document.getElementById("address").value;
        document.getElementById("billingCity").value = document.getElementById("city").value;
        document.getElementById("billingState").value = document.getElementById("state").value;
        document.getElementById("billingZip").value = document.getElementById("zip").value;
        
    })
   
}








