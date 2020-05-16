function nthPrime(n) {
  
  var p =[];
  let i=2;
  while(p.length<n){
    if(isPrime(i)) p.push(i);
    i++;
  }
  return p.pop();
}

function isPrime(num){
  if(num!==2 && num%2==0) return false;
  
  for(let i=3;i<=Math.sqrt(num);i+=2)
    if(num % i==0) return false;

    return true;
}

console.log(nthPrime(10001));
