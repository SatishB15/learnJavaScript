let jsonObject=
{
"name":"Satish", //string as json value
"age":25, //number as json value
"isMale":true, //boolean as json value
"subjects":["WF","ML","SADP"], //array as json value
"nothing":null,
"Hobbies":{"inDoor":"Pubg","outDoor":"Cricket"},//json value as object
// "Greet":()=>console.log("Hello Satish"),//json value as a function
// "Job":undefined//json value as undefined
}

// console.log(jsonObject.Greet());

let parsedObj=JSON.stringify(jsonObject);
console.log(parsedObj);

let jsonObj=JSON.parse(parsedObj);
console.log(jsonObj);
