/*Given an array of objects with
 "first_name" and "last_name" fields,
  write a callback for the ".sort" function to sort the
 names alphabetically by last name. If two last names are the same,
 then sort those by first name.
 */

 let playerOne = {
   firstName:'Ivan',
   lastName: 'Tamayo',

 };
 let playerTwo = {
   firstName: 'Victor',
   lastName: 'Hurtado',

 };
 let playerThree = {
   firstName: 'Miguel Angel',
   lastName: 'Castellanos',

 };
 let playerFour = {
   firstName: 'Jose',
   lastName: 'Tamayo',

 };

 let cikatriz = [playerTwo, playerThree, playerFour, playerOne,];


console.log(cikatriz);


function sorted(arr) {
  arr.sort(function(a,b){

    //make strings equals to compare...
  var lastName1 = a.lastName.toUpperCase();
  var lastName2 = b.lastName.toUpperCase();
  var firstName1 = a.firstName.toUpperCase();
  var firstName2 = b.firstName.toUpperCase();

  //Do comparison, looks like a and b are internalized...???
  if (lastName1 < lastName2){
  return -1;
}
  else if (lastName1 > lastName2) {
   return 1;
 }
   if (firstName1 < firstName2){
   return -1;
 }


 else if (firstName1 > firstName2) {
   return 1
 } else {
  return 0;
 }
})
return arr;

};



//console.log(cikatriz);
console.log('**********************');
console.log(sorted(cikatriz));

/* cikatriz.sort(function(a,b){
  var lastName1 = a.lastName.toUpperCase();
  var lastName2 = b.lastName.toUpperCase();
  if (lastName1 < lastName2)
  return 0;
  if (lastName1 > lastName2) {
  return 0;
}

return 0;

}) */
















 //cikatriz.sort();
  //console.log(cikatriz);

//function sort(arr){
  //arr.sort();
  //console.log(arr);



//console.log(sort(cikatriz));

 //console.log(cikatriz);

//console.log(cikatriz[1].lastName);

/*function sortlastNam(arr, callback) {
  for (var i = 0; i < arr.length; i++) {



      //newArr.push(arr[i].lastName);
      //newSort(newArr);
      //callback=newArr
    if (arr[i].lastName != arr[q].lastName) {
      newArr.push(arr[i].lastName);
      newSort(newArr);
      q+=1
    } newArr.push(arr[i].firstName);
      newSort(newArr);




    }
  }*/

//arr3 = newArr.concat(newArr2)
//newSort(arr3);

    //newArr.push(arr[i].lastName);
    //newSort(newArr);
    //if (arr[i].lastName == arr[i].lastName) {

      //newArr.push(arr[i].firstName);




  //newSort(arr);




//a.sort();
//console.log(a);

//console.log(a(cikatriz));

//console.log(sort(cikatriz));

//console.log('-_____________________-');

//console.log(newArr);

//function newSort(arr, sOut) {

  //p = arr.sort();
  //console.log(newArr);



//function sOut(p) {
  //console.log(p);


//}


//console.log(p[1]);



//console.log(cikatriz);

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




/* console.log('____________________');


console.log(cikatriz[1]);




console.log(playerTwo.lastName);*/
