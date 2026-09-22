
//1

function reverseNumber(number) {
   number = number.toString();
    let reversed = "";
 for (let i = number.length - 1; i >= 0; i--) {
    reversed += number[i];
  }
  return reversed;
}
console.log(reverseNumber("12345"));

//////////////////////////////////////////////////

//2

for(let i=0 ; i <= 15 ;i++)
    {
       if ( i % 2 === 0 ){
         console.log( i+ "is even");
       }
       else{ console.log( i+ "is odd");}

    }

////////////////////////////////////////////////

//3

function insertDashes(number) {

    let result = "";

    for (let i = 0; i < number.length; i++) {

        result = result + number[i];

        if (number[i] % 2 === 0 && number[i + 1] % 2 === 0) {
            result = result + "-";
        }
    }

    console.log(result);
}

let number = prompt("Enter a number:");
insertDashes(number);


//////////////////////////////////////////////

//4

let age =prompt(" Enter age");

function Agechecker(age){

    if(age >= 18 )
    {
     document.write("The user is Adult");
    }
    else
    {
     document.write("The user is Minor");
    }


}

Agechecker(age);
