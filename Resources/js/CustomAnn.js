function getCustomAnn(){
   
const currentUser = new user(); // creates a user class object
const inputedTimeMeasure = document.getElementById('timeValueSelector').value; // gets the inputed time measure
const inputedNumber = document.getElementById('numberSelector').value; //gets the inpputed number
let indexOfTimeMeasure = 0;
currentUser.pushAllTimeMeasures(); // pushes all required time measures into an array

while (currentUser.timeMeasureArray[indexOfTimeMeasure][0] != inputedTimeMeasure) { // don't really remember what this does
indexOfTimeMeasure = indexOfTimeMeasure;
indexOfTimeMeasure++;
}


  function releaseAnn(){ // in summary this displays a text showing how much time you have let to a certain date
let remainder1 = timeLeftUntilAnn % currentUser.timeMeasureInMi[6]
let remainder2 = remainder1 % currentUser.timeMeasureInMi[5]
let remainder3 = remainder2 % currentUser.timeMeasureInMi[4]
let remainder4 = remainder3 % currentUser.timeMeasureInMi[3]
let remainder5 = remainder4 % currentUser.timeMeasureInMi[2]
let remainder6 = remainder5 % currentUser.timeMeasureInMi[1]
let Year = Math.floor(timeLeftUntilAnn / currentUser.timeMeasureInMi[6])
let Month = Math.floor(remainder1 / currentUser.timeMeasureInMi[5])
let Week = Math.floor(remainder2 / currentUser.timeMeasureInMi[4])
let Day = Math.floor(remainder3 / currentUser.timeMeasureInMi[3])
let Hour = Math.floor(remainder4 / currentUser.timeMeasureInMi[2])
let Min = Math.floor(remainder5 / currentUser.timeMeasureInMi[1])
let Sec = Math.floor(remainder6 / currentUser.timeMeasureInMi[0])
    
user.message( `${Year} Years, ${Month} Months, ${Week} Weeks, ${Day} Days, ${Hour} Hours, ${Min} Minutes, ${Sec} Seconds Left Until Your ${inputedNumber} ${inputedTimeMeasure + 's'} anniversary`)

  }
  
 
const timeLeftUntilAnn = (inputedNumber * currentUser.timeMeasureInMi[indexOfTimeMeasure]) -  currentUser.milliseconds;        // finds out the time left until the date                 
 
  if (timeLeftUntilAnn < 0){ // if there is time left until the date releaseAnn() is triggered
  user.message("This anniversary has already passed or you didn't fill in your birth date.")
  }
  else{
  releaseAnn()
  }
}