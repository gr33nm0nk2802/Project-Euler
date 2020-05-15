function fiboEvenSum(n) {
  var a = 1,f = 2,sum=0;
  while(f<=n)
  {
    if(f%2==0){
      sum += f; 
    }
    f += a;
    a = f-a; 
  }
  return sum;
}

fiboEvenSum(10);
