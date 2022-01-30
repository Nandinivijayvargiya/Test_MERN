//Fibonacci Series
//Fibonacci Series

  var n1=prompt("Enter first number");
    var n2=prompt("Enter second number");
      n1=parseInt(n1);
      n2=parseInt(n2); 
	  var fib_array=[];
	  fib_array[0]=n1;
	  fib_array[1]=n2;
   var count=prompt("Enter until what number want to print fibonacci series");
   count=parseInt(count);
   
        for(i=2;i<=count;i++)
       {
	      fib_array[i]=fib_array[i-2]+fib_array[i-1];
		  console.log(fib_array[i]);
       }
	   alert("The fibonacci number is:"+fib_array[count]);

	
	
