function compute()
{
   var Amount = document.getElementById("principal");
   var Rate = document.getElementById("rate");
   var Years = document.getElementById("years");
   if(Amount.value<=0){
       alert("please enter the positive value of Amount");
       Amount.focus();
       return false;
   }
   if(Rate.value==0){
    alert("please enter a positive value of Rate");
    Rate.focus();
    return false;
}

   var final = parseFloat(Amount.value) * parseFloat(Rate.value) * parseInt(Years.value) /100;
   Years = 2020+parseInt(Years.value);
   document.getElementById("result").innerHTML="If you deposit Rs."+"<mark>"+Amount.value+"</mark>"+"<br>"+"at an interest rate of "+"<mark>"+Rate.value+"%."+"</mark>"+"<br>"+"You will receive an amount of Rs."+"<mark>"+final+"</mark>"+","+"<br>"+"in the year "+"<mark>"+Years+"</mark>"+"."
}

function slider_reader(val){
    document.getElementById('rate').value=val;
}

        
