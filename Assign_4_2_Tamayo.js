//Seccond Function.

function myset_remove(arr, remove_value){
  //arr = [1,2,34,45,67,9]

console.log(arr);
//console.log(arr[i]);
//let total = []

  for (let i = 0; i < arr.length; i++) {
    let index = arr.indexOf(i);

    //total+=arr[i]
    if (arr[i] == remove_value) {

    //if (index[i] > -1) {
      arr.splice(i, 1);
      return true;

    }


      //let index = arr.indexOf(i);
      //arr.indexOf(i)
      //arr.splice(index);
      //console.log(arr.indexOf[i]);
    }
return false;
    console.log(arr);
    //console.log(total);
    //console.log(arr);

  }

    //if total[i] = remove_value
    //arr.pop()
    //console.log(arr);




x = [1,2,34,45,67,9, 'boy', 'girl']


console.log(myset_remove(x, 34));

console.log(x);
