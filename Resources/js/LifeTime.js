function lifeTimeGet(){


const currentUser = new user();// makes a new class object

// checks if the milliseconds have a value if they don't a message is diplayed in a div
if(isNaN(currentUser.milliseconds)){
    user.message("Please put in your birth date.");
}

else{
currentUser.pushAllTimeMeasures(); //pushes all required text into an array


currentUser.appendAllTimeMeasures(); //appends all required text into a div


document.getElementById("lifetimeInMi").value = currentUser.milliseconds;
document.getElementById("sendBirthHour").value = currentUser.inputBirthHour; 
document.getElementById("sendBirthDate").value = currentUser.inputBirthDate;
document.getElementById("registeredDate").value = currentUser.todayDate;
//sends a bunch of information into a form
console.log(document.getElementById("registeredDate").value);
}

}
