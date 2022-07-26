function LifeTimeGet(){
  
const currentUser = new user();
currentUser.pushAllTimeMeasures();


currentUser.appendTimeMeasure(0);


currentUser.appendTimeMeasure(1);


currentUser.appendTimeMeasure(2);


currentUser.appendTimeMeasure(3);


currentUser.appendTimeMeasure(4);


currentUser.appendTimeMeasure(5);


currentUser.appendTimeMeasure(6);

document.getElementById("lifetime").value = currentUser.timeMeasureArray;
}


