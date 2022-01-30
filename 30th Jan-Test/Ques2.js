//Prime number
  var number=prompt("Enter a number");
	number=parseInt(number);
	  var count=0;
        if(isNaN(number))
        {
	      alert("Please enter number");
        }
       for(var i=1;i<=number;i++)
       {
		  if(number%i==0)
	      {
		    count++;
	      }
       }
         if(count==2)
         {
	       alert(number+" "+"is prime number");
         }
         else
         {
	       alert(number+" "+"is not prime number");
         }
