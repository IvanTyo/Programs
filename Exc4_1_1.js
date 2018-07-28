function average(arr) {

  //let newarr=[];
  let len=arr.length;
  let ave=0;
  let sum=0;

  for (var i = 0; i < arr.length; i++) {

    sum += arr[i]

    console.log(sum);

  }
ave = (sum / arr.length)
console.log('Array length is:  ' + arr.length);
console.log('Array sum is:  ' + sum);
console.log('Array average is:  ' + ave);
//console.log(ave);
return true
}

console.log(average([2,8,11]));
