const count = true;
function getCount()
{
  return new Promise((Resolve,Reject)=>
  {
    if(count)
    {
      Resolve("Count is True")
    }
    else
    {
      Reject("Count is False")
    }
  })
}

// console.log(getCount());

getCount().then(function(Message)
{
  console.log(Message);
  let Name="Satish";
  return Name;
}).then(function(nm)
{
  console.log("Name is Accessed "+nm);
}).catch(function(err)
{
console.log(err);
}).finally(function()
{
  console.log("It will Execute Any how");
})
// let promise = new Promise(function(resolve, reject) {
//   const x = "string";
//   const y = "string"
//   if(x === y) {
//     resolve("Promiss Resolved");
//   } else {
//     reject("Promis 'Some error has occurred'");
//   }
//   });
  
//   promise.
//     then(function (msg) {
//       console.log(msg);
//     }).
//     catch(function (err) {
//       console.log(err);
//     });
  
/* 
promise is like real world promise it takes a task to do and promis to the result

The Promise object represents the eventual completion (or failure) of an asynchronous 
operation and its resulting value.

A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.


*/