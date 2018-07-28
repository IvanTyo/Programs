function myset_add(arr, new_value){
  //x = [1,2,34,45,67,9]
  arr+=arr.push(new_value);
  console.log(arr);
  return true
}

x = [1,2,34,45,67,9,'gum',]

console.log(myset_add(x, 'hi'))
console.log(myset_add(x, 'he'))
console.log(myset_add(x, 'them'))
console.log(myset_add(x, 'she'));
console.log(x);
