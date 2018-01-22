function numprime(n){
  if(n===1){
  console.log(n+"th prime is"+2);
  }
  else{
    var p=1;
    var i=3;
    while(p<n){
      if(IsPrime(i)){
       p++;
       }
    i=i+2;
  }
  console.log(p+"th prime is"+(i-2));
}
}
function IsPrime(n){
  for(var j=2;j<=Math.sqrt(n);j++){
    if(n%j===0)
    return false;
  }
  return true;
}
numprime(10001);
