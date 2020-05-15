function largestPalindromeProduct(n) {
  
  const number = parseInt(Array(n).fill(9).join(''));
  let largest = 0;

  for(var i = number;i>=1;i--){
    for(var j= number;j>=1;j--){
      let mult = i*j;
      if(mult>largest && isPallindrome(mult)){
        largest = mult;
      }
    }
  }

  return largest;
}


function isPallindrome(num){
  return num.toString()===num.toString().split('').reverse().join('');
}

console.log(largestPalindromeProduct(4));
//99000099
