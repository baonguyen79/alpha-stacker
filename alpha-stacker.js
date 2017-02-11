var AlphabetArray = "abcdefghijklmnopqrstuvwxyz";

// var AlphabetArray = str.split("");


// Invoke the function and pass in the array
stackLetters(AlphabetArray);


// The stackLetter function should accept the array as the sole argument
function stackLetters (theAlphabetArray) {
	
    /*Write a `for` loop that iterates over the array argument and outputs the letters.*/
    for (var i = 0; i < theAlphabetArray.length; i++) {
    	
		if (i == 0)
		{
			var displayStr = theAlphabetArray[i];
		}
		else 
			{if ((i % 3) == 0)
				{
					 displayStr += " " 
				}
		 
				displayStr += theAlphabetArray[i];
			}
		
		console.log(displayStr);	
	}
}


