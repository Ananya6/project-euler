function squares(n){
  var d;
  n1=n*(n+1)*(2*n+1)/6;
  console.log(n1);
  n2=Math.pow((n*(n+1)/2),2);
  console.log(n2);
  console.log(n1-n2);
  return d;
}
squares(100);
