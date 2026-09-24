
let button = document.getElementById("btn")


    button.onclick =function(){
let name = document.getElementsByClassName("custName")[0].value;
let order =document.getElementsByClassName("selOrder")[0].value;
     document.write("Hello :) "+ name + " Your order is " + order);

    }


    button.onmouseover= function(){
      button.style.backgroundColor = "orange";
    }

     button.onmouseout= function(){
      button.style.backgroundColor = "";
    }