function largestPrimeFactor(number) {
  
  if(number===0) return 0;
  // Case- Number itself is prime
  if(isPrime(number)) return number;

  // Checking for factor if number is greater than 2
  while(number>=2){
    var largest =2;
    for(let i =2; i <= Math.ceil(Math.sqrt(number)); i++){
      // setting the largest prime number as factor
      if( number%i===0 && isPrime(i)){
          largest=i;
          if(isPrime(number/i))
            largest= Math.max(i,(number/i));
      }
    }  
    return largest;
  }
}


// To check if a number is prime.
function isPrime(n){
  // Only even prime number is 2
  if(n%2===0 && n!==2) return false;
  // Other odd prime number in O(sqrt n)
  for(var i=3;i<=Math.sqrt(n);i+=2){
    if(n%i===0)
    return false;
  }
    return true;
}

console.log(largestPrimeFactor(42));
