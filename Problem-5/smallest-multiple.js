//LCM of two numbers.

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

//Euclidean recursive algorithm GCD of 2 numbers.

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

function smallestMult(n) {
  let maxLCM = 1;

  //LCM in the range
  for (let i = 2; i <= n; i++) {
    maxLCM = lcm(maxLCM, i);
  }
  
  return maxLCM;
}
