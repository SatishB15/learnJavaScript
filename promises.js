var promise = new Promise(function(resolve, reject) {
  const x = "string";
  const y = "string"
  if(x === y) {
    resolve();
  } else {
    reject();
  }
  });
  
  promise.
    then(function () {
      console.log('Success');
    }).
    catch(function () {
      console.log('Some error has occurred');
    });
  
/* 
promise is like real world promise it takes a task to do and promis to the result

The Promise object represents the eventual completion (or failure) of an asynchronous 
operation and its resulting value.

A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.


*/