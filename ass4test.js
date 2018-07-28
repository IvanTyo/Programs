function avarege(arr) {

  //my_arr=[1,2,3,4,5,6,7,8,9]

  //my_arr2=[78,12,45,67,9]

  //my_arr3=['hey', 'hola', '12','what', 'she', 'him', 'why', 'EEEE']

  newarr=[];

for (var i = arr.length-1; i >= 0; i--) {

  console.log(arr[i]);
//newarr = newarr + newarr.push(i);

//console.log(newarr);
newarr.push(arr.pop());
console.log('arr items are: ' + arr.length );

console.log(newarr);
console.log('______________________________________');
}

return true

console.log(newarr);
}


console.log(avarege(['hola', '23', 'she', '12', '234']));
