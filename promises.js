let promise = new Promise((resolve, reject) => {
    
    let task_performed = true;
    if(task_performed) { 
      resolve('The promised task was performed successfully.'); 
    } else { 
      reject('The promised task was not performed.'); 
    } 
  });  
  promise.then((fromRes) => console.log("success")). 
    catch((fromRej) => console.log("rejected"));

/* 
promise is like real world promise it takes a task to do and promis to the result

The Promise object represents the eventual completion (or failure) of an asynchronous 
operation and its resulting value.

A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.


*/