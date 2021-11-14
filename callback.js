// function displayResult(result) {
//     document.getElementById("root").innerHTML = result;
//   }
// function increseValue(val) {
//     document.getElementById("root1").innerHTML = val+10;
// }

//   function myCalculator(num1, num2,displayResult,increseValue) {
//     let total = num1 + num2;
//     displayResult(total);
//     increseValue(total);
//   }
  
//   myCalculator(5, 5, displayResult,increseValue);
  function display(text) {
      document.getElementById("root").innerHTML="Hello "+text;
      // console.log("Hello",text);
  }
function user(name,cb) {
    cb(name);
}

user("Satish",display);

/*
JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.
callback is fully functional function which is passed to other function as parameter.
 */