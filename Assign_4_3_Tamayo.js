function myset_has(arr, test_value) {
  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    let index = arr.indexOf(i);

    if (arr[i] == test_value) {
      return true;
      console.log(arr[i]);

    }
  }
return false;
}

x = [1,2,3,4,45,34,12,'boy','girl','dad','mom'];

console.log(myset_has(x, 123));
