let jsonObject=
{
"name":"Satish", //string as json value
"age":25, //number as json value
"isMale":true, //boolean as json value
"subjects":["WF","ML","SADP"], //array as json value
"nothing":null,//null as as Json Value
"Hobbies":{"inDoor":"Pubg","outDoor":"Cricket"},//json value as object
// "Greet":()=>console.log("Hello Satish"),//json value as a function
// "Job":undefined//json value as undefined
}

//  console.log(jsonObject.Greet());

let JSONtostr=JSON.stringify(jsonObject);
console.log(JSONtostr);

let str='{"Animal":"Dog","Breed":"Lanradoor","age":25}';
let strtoJSON=JSON.parse(str);
console.log(strtoJSON);
