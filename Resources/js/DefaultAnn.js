function weirdFunctionTheTeacherRequestedToMake(){
    
    const currentUser = new user(); // creates a new user class object
    let firstNumber;
    let timeMeasureValue;
    let difference;
    // declares a bunch of variables that will be used later
    if(isNaN(currentUser.milliseconds)){ // checks if the user has inputed a birth date if they have'nt a message will be displayed
        user.message("Please put in your birth date.")
    }

    else{

    currentUser.pushAllTimeMeasures(); // pushes all time measures into an array
    
   for (let i = 0; currentUser.timeMeasureArray.length > i; i++){ // a loop that repeats the code 7 times
   firstNumber = user.firstNumber(currentUser.timeMeasureArray[i][1]); // triggers firstNumber() on the time measure 
   timeMeasureValue = 10 ** (currentUser.timeMeasureArray[i][1].toString().length - 1) * firstNumber  // not really sure how  to describe this
   difference = timeMeasureValue * currentUser.timeMeasureInMi[i] - currentUser.milliseconds; //gets the ammount of time left until timeMeasureValue
   calc(difference, timeMeasureValue, currentUser.timeMeasureArray[i][0], currentUser.timeMeasureArray[i][1]) // transforms all the statements into a comprehensible text
   }
    }}
   