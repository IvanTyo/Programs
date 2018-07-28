function reverse_string(word){

  debugger;
  let reverse = '';
  for (let i = word.length - 1; i >=0; i--) {
    reverse += word[i];
  }
  return reverse;
}
console.log(reverse_string('hello'));
