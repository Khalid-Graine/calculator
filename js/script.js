let button_input = document.querySelectorAll(".input-button");
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");
let equal_pressed = false;



//Access each class using forEach
button_input.forEach((e) => {
   e.addEventListener("click", () => {
      if (equal_pressed === false) {
         input.value += e.value
      } else if (equal_pressed === true) {
         input.value = "";
         equal_pressed = false;
         input.value += e.value
      }
   });
});


//Solve the user's input when clicked on equal sign
equal.addEventListener("click", () => {
   equal_pressed = true;

   let inp_val = input.value;
   
   try { 
      let solution = eval(inp_val); 
      if (Number.isInteger(solution)) {
         input.value = solution;
      } else {
         input.value = solution.toFixed(2);
      }
   } catch (err) {
      //If user has entered invalid input
      alert("Invalid Input");
   }
});

//for Clear Whole Input
clear.addEventListener("click", () => {
   input.value = "";
});

//for Erase Single Digit
erase.addEventListener("click", () => {
   input.value = input.value.substr(0, input.value.length - 1);
});








