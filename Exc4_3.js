//Given an array of objects with
 //"first_name" and "last_name" fields,
 // write a callback for the ".sort" function to sort the
 //names alphabetically by last name. If two last names are the same,
 //then sort those by first name.

 let playerOne = {
   firstName:'Ivan',
   lastName: 'Tamayo',
   age: '41',
   instrument: 'Guitar'
 };
 let playerTwo = {
   firstName: 'Victor',
   lastName: 'Hurtado',
   age: '35',
   instrument: 'Lead Guitar'
 };
 let playerThree = {
   firstName: 'Miguel Angel',
   lastName: 'Castellanos',
   age: '34',
   instrument: 'Bass'
 };
 let playerFour = {
   firstName: 'Jose',
   lastName: 'Tamayo',
   age: '35',
   instrument: 'Drums'
 };

 let cikatriz = [playerOne, playerTwo, playerThree, playerFour];

//console.log(cikatriz[1].lastName);

function sort(arr) {
  newArr=[];
  for (var i = 0; i < arr.length; i++) {
    //console.log(arr[i].lastName);
    newArr.push(arr[i].lastName);
    //newSort(newArr);
    if (arr[i].lastName == arr[i].lastName) {

      newArr.push(arr[i].firstName);

    }

  }
  newSort(newArr);


}

//a.sort();
//console.log(a);

//console.log(a(cikatriz));

sort(cikatriz);

//console.log('-_____________________-');

//console.log(newArr);

function newSort(arr) {

  arr.sort();
  console.log(arr);

}


//newSort(newArr);

//console.log(a);


//console.log(cikatriz);








//console.log(cikatriz.split());






 //console.log(cikatriz);

 //myForeach(cikatriz, objSpitOutter);

//function mySortFunct(arr, myCallbackFunc) {
    //for (var i = 0; i < arr.length; i++) {
    //arr.sort();
    //if (lastName == lastName) {
    //arr.sort(firstName);
    //myCallbackFunc(arr[i]);
  //}

//}
//}

//mySortFunct(cikatriz, objSpitOutter);

//function objSpitOutter(p){
  //console.log(p);
//}


 //let x = {
   //firstName:"John",
   //lastName:"Smith",
//
//};



//function callback(arr) {
    //arr.sort();
    //console.log(callback(x));
    //document.getElementById("demo").innerHTML = fruits;



 //x.push[]
 //x["firstName"] = "James";

//for (let key in x) {
//console.log(key + " is " + x[key]);

//}
//x['firstName'] = 'Mary'
//console.log(x.firstName);

//x['firstName'] = 'Mary'

//x.sort();

//var fruits = ["Banana", "Orange", "Apple", "Mango"];

//fruits.sort();

  //console.log(x[keys]);
//console.log(callback(x));
