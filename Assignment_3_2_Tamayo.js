function palindrome(word){
  let result=''
  let firstletter=0;
  let lastletter=word[word.length-1];
  //let lastletter=word[word.length-1];
  //let compare=0;

console.log(word[word.length-1]);

  for (var i = word.length - 1; i >= 0; i--) {

    if (firstletter == lastletter) {
      console.log(word[firstletter] + ' and ' + lastletter);



    }

  //  console.log(word[firstletter] + ' and ' + lastletter);


    //lastletter=word[firstletter] + lastletter;
    firstletter+= 1;
    lastletter+=word[word.length-1];
    //compare+=word[word.length-1];
    //=word[word.length-1];



//    console.log(word[firstletter] + ' and ' + lastletter);

//See what the computer is doing...
//console.log(firstletter);
//console.log('-----------');
//console.log(lastletter);
//console.log('///////////');

  }

//if (lastletter==word) {

  console.log(word + ' '+ 'is a Palindrome!!!');
  return true
//}else {


  //console.log(word + ' '+ 'is NOT Palindrome!!!');
  //return false
}

console.log(palindrome('annna'));
