//"For of" loop.

let arr=[1,2,3,4,5,45,67,78];
  total=0;

  for (let num of arr) {
    total += num;

  }

  console.log('The total of arr is: ' + total);

console.log('-------------------------');
  //For end loop

let bass={
  strings: 4,
  color: 'red',
  volume: 11,
  play: function (){}

}

for (let key in bass) {
  console.log(key + ' is ' + bass[key]);

}

console.log('------------------');


//"sort"
console.log('"sort" Funtion....');
let arr1 = [4,2,3,-6,1];

let sorted = arr1.sort(function(a,b) {
  if ( a < 0 ) a = +a;
  if ( b < 0 ) b = +b;
  if ( a > b ) return -1;
  return 1;
});

console.log(sorted);

console.log('---------------');


console.log('"indexOf" Function...');

let arr2 = [1, 2, 3,4,5];

console.log("2 is at position " + arr2.indexOf(2));
console.log(arr2.indexOf(3));

if ( arr2.indexOf(4) >= 0 ) console.log("4 is in the array");

console.log('-------------');


console.log('Objects...');

let person = {
  name: 'Alice',
  age: 25
};

person.species = 'human';
person["planet of origin"] = "Earth";
person[5] = "numbers are fine to use as keys as well!";

console.log(
  person.name + ", the " + person.species +
  " from " + person["planet of origin"] + ", is " + person.age + ' ---- ' +person[5]
);




console.log('----------------- ');
console.log('My bass....');

//let bass1= Object;
//bass1.type = "guitar";
//bass1.strings= 4;
//bass1.color= red;
//bass1.volume= 11;
//bass1.play = function (){
  //alert("doo doo doo doodoo doo doo");

//}
