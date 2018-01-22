
function lcm(a,b){
  if(a%b===0)
  return a;
  if(b%a===0)
  return b;
  var i=1;
  var prod=1;
  var ger;
  if(a>b)
  ger=b;
  else
  ger=a;
  while(i<ger){
    if((a%i===0)||(b%i===0))
    {
      prod=prod*i;
      if(a%i===0)
      {
        a=a/i;
      }
      if(b%i===0)
      {
      b=b/i;
      }
      console.log("   "+prod);
    }
    i++;
  }
  return prod;
}
function multiple(a,b)
{
  var l=1;
  var i=a;
  while(i<=b){
    l=lcm(i,l);
    console.log(l);
    i++;
  }
}
multiple(2,10);
/*var a=6,b=7;
var i=1;
while(a!=1&&b!=1)
{
  if(a%i===0)
  a=a/i;
  if(b%i===0)
  b=b/i;
  console.log("a:"+a);
  console.log("b:"+b);
  i++;
}*/
