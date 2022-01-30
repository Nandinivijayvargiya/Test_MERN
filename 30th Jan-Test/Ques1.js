//Fibonacci Series

  var n1=prompt("Enter first number");
    var n2=prompt("Enter second number");
      n1=parseInt(n1);
      n2=parseInt(n2);
        console.log(n1);
        console.log(n2);
   var count=prompt("Enter until what number want to print fibonacci series");
      var n3;
        for(i=2;i<=count;i++)
       {
	      n3=n1+n2;
	        console.log(n3);
	         n1=n2;
	           n2=n3;
       }

	
	