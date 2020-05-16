var n;
function sumSquareDifference(n) {
  return sumSquare(n)-squareSum(n);
}

function sumSquare(num){
  return (((num*(num+1))/2)*((num*(num+1))/2));
}

function squareSum(num){
      return ((num*(num+1)*(2*num+1))/6);
}
