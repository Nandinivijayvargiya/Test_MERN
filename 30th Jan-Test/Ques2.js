//Prime number
  var number=prompt("Enter a number");
	number=parseInt(number);
	 
        if(isNaN(number))
        {
	      alert("Please enter number");
        }
		for(var i=1;i<=number;i++)
		{
			var count=true;
       for(var j=2;j<i;j++)
       {
		  if(i%j==0)
	      {
		  count=false;
		  break;
		  }
		  
	   }
		  if(i>1&&count==true)
			  
		  {
		  
			  console.log(i);
		  }
		  
		}
	   
