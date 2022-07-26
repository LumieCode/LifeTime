function IFS(){
    
    const currentUser = new user();

    if(currentUser.milliseconds === NaN ){
        let Error = document.createElement("p");
  Error.innerText = "Your format Is Not Correct/You Didn't Fill In The Birth Date";
  Error.setAttribute("Class", "Pad");
  document.body.appendChild(Error);
    }
    else{

    currentUser.pushAllTimeMeasures();
    
    let Sec1 = Sec.toString();
    let Min1 = Min.toString();
    let Hour1 = Hour.toString();
    let Day1 = Day.toString();
    let Week1 = Week.toString();
    let Month1 = Month.toString();
    let Year1 = user.firstNumber(Year);
    
    console.log(Year1)
    

   

    let Sec2 = Sec.toString().length - 1;      
    let Min2 = Min.toString().length - 1;  
    let Hour2 = Hour.toString().length - 1;  
    let Day2 = Day.toString().length - 1;   
    let Week2 = Week.toString().length - 1;  
    let Month2 = Month.toString().length - 1;  
    let Year2 = Year.toString().length - 1;
    


    let Sec3 = 10 ** Sec2 * Sec1;      
    let Min3 = 10 ** Min2 * Min1;  
    let Hour3 = 10 ** Hour2 * Hour1;  
    let Day3 = 10 ** Day2 * Day1;   
    let Week3 = 10 ** Week2 * Week1;  
    let Month3 = 10 ** Month2 * Month1;  
    let Year3 = 10 ** Year2 * Year1;
    console.log(Year1)
    console.log(Year2)
    console.log(Year3)
    
    let Sec4 = Sec3 * 1000 - currentUser.milliseconds;
    let Min4 = Min3 * 60000 - currentUser.milliseconds;
    let Hour4 = Hour3 * 3600000 - currentUser.milliseconds; 
    let Day4 = Day3 * 86400000 - currentUser.milliseconds; 
    let Week4 = Week3 * 604800000 - currentUser.milliseconds; 
    let Month4 = Month3 * 2629800000 - currentUser.milliseconds;
    let Year4 = Year3 * 31557600000 - currentUser.milliseconds;
    console.log(Year4)
    Calc(Sec4, Sec3, 'Seconds', Sec)
    Calc(Min4, Min3, 'Minutes', Min)
    Calc(Hour4, Hour3, 'Hours', Hour)
    Calc(Day4, Day3, 'Days', Day)
    Calc(Week4, Week3, 'Weeks', Week)
    Calc(Month4, Month3, 'Months', Month)
    Calc(Year4, Year3, 'Years', Year)
    
    }}
   