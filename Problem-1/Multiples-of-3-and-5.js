function multiplesOf3and5(number) {
  var i=1,sum=0;
  while(i<number){
    if((i%3==0)||(i%5==0))    
    sum +=i;
    i++;
  }

  return sum;
}

multiplesOf3and5(1000);
multiplesOF3and5(49);
multiplesOF3and5(10);
multiplesOF3and5(8456);
multiplesOF3and5(19456);
