/*var primo=[];
function isPrime(n){
  var j=2;
  while(j<n){
    if(n%j==0)
    return false;
  j++;
  }
  return true;
}

function pr(n){
  var i=2;
  while(i<n){
    if((n%i==0)&&(isPrime(Math.ceil(Math.sqrt(i))))){
      primo.push(i);
    }
i++;
  }
}
pr(600851475143);

if(primo.length!=0){
console.log(primo);
console.log(primo.pop());
}
else {
  console.log(1);
}*/
/*function primeFactors(n)
{
  console.log("sqrt:"+Math.sqrt(n));
    // Print the number of 2s that divide n
    while (n%2 == 0)
    {
        console.log("%d ", 2);
        n = n/2;
    }

    // n must be odd at this point.  So we can skip
    // one element (Note i = i +2)
    for (var i = 3; i <= Math.sqrt(n); i = i+2)
    {
        // While i divides n, print i and divide n
        while (n%i == 0)
        {
            console.log(i);
            n = n/i;
        }
    }

    // This condition is to handle the case when n
    // is a prime number greater than 2
    if (n > 2)
        console.log("%d ", n);
}

primeFactors(600851475143);*/
var N = 600851475143;

function largestPrimeFactor(number) {

	var i = 2;

	for (i; i <= number; i++){

		// if the number is factored by the iterator, divide the number and test the iterator again
		if ((number % i) === 0){
			number = number / i;
			i--;
		}
	}

	return i;
}

console.log("The largest prime factor of " + N + " is: " + largestPrimeFactor(N))
