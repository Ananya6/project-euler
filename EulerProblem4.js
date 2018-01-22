var x=0;
function isPalindrome(str){
var h;
var i=0;
  if(str.length%2==0)
  h=str.length/2;
  else
  h=str.length/2-1;
  while(i<h){
    if(str[i]!=str[str.length-i-1])
    {
    return false;
    break;
    }
    i++;
  }
  return true;
};
var z;
function multiply(a,b){
  for(i=a;i>b;i--){
    for(j=i;j>b;j--){
      z=i*j;
      var v=z.toString();
      if(isPalindrome(v)&&v>x)
      {
        x=z;
    }
  }
  }
}
multiply(999,99);
console.log(x);
