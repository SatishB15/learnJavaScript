function makeFunc() {
    var name = 'Mozilla';
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  let myFunc = makeFunc();
  myFunc();

/*
global variable lives until page getting closed
and function variable live when its execution get completed

but here we can call inner function to get the value of its outer scope
it means inner function is closure of outer function
*/