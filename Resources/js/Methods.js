


   function calc(Mi, Ann, timeValueTxt, timeValueNum){
    let Days = Math.floor(Mi / 86400000); // gets the amount of days left

    user.message(`You Have Lived For ${timeValueNum} ${timeValueTxt + 's'} And You Have ${Days} Days Left Until Your ${Ann} ${timeValueTxt} Anniversary `); // displays how long youv'e lived for and how long you have left in days until a certain annniversary

    }
 // I made a class so I don't have to do the same things over and over again in all the js files
    class user{
        constructor(){
           this.newDate = new Date(); //creates a date object
           this.inputBirthDate = document.getElementById('birthDate').value; // gets the birth date
           this.todayDate = this.newDate.getFullYear() + '-' + (this.newDate.getMonth()+1) + '-' + this.newDate.getDate(); // gets today's date
           this.inputBirthHour = document.getElementById("birthHour").value; // gets the birth hour
           this.parsedBirthDate = Date.parse(this.inputBirthDate) + Date.parse(`01 Jan 1970 ${this.inputBirthHour} GMT`); // parses the birth date along with the birth hour
           this.todayHour = this.newDate.getHours() * 3600000 + this.newDate.getMinutes() * 60000 + this.newDate.getSeconds() * 1000; // gets today's hour 
           this.parsedToday = Date.parse(this.todayDate)+this.todayHour; // parses the date and adds it to the  hour in milliseconds
           this.milliseconds = this.parsedToday - this.parsedBirthDate; // the amount of milliseconds one has lived
           this.timeMeasureArray = []; // this will be used for the method pushTimeMeasure and will have similar uses as timeMeasureInMi
           this.timeMeasureInMi = [1000, 60000, 3600000, 86400000, 604800000, 2629800000, 31557600000]; // inlcudes an array of the each time value represented in milliseconds, this is made so i can use loops and so i dont have to write a bunch of numbers a milliion times
           this.paragraphContainer; // this is just for convenience's sake
        }
        
        // don't quite remember why this is here 
        returnTimeMeasure(timeMeasureInMillisecond){
            return Math.floor(this.milliseconds / timeMeasureInMillisecond);
        }
        
        // pushes an array containing a time value and the amount of time one has lived of that time value
        pushTimeMeasure(timeMeasure, timeMeasureInMillisecond){
        this.timeMeasureArray.push([timeMeasure, Math.floor(this.milliseconds / timeMeasureInMillisecond)]);
        }
        
        // uses pushTimeMeasure 7 times with different arguments
        pushAllTimeMeasures(){
            this.pushTimeMeasure('second', this.timeMeasureInMi[0]);      
            this.pushTimeMeasure('minute', this.timeMeasureInMi[1]); 
            this.pushTimeMeasure('hour', this.timeMeasureInMi[2]);
            this.pushTimeMeasure('day', this.timeMeasureInMi[3]);   
            this.pushTimeMeasure('week', this.timeMeasureInMi[4]);  
            this.pushTimeMeasure('month', this.timeMeasureInMi[5]);  
            this.pushTimeMeasure('year', this.timeMeasureInMi[6]);
        }
         
        
        // appends to the div(pad) a sentence that tells you how long you've lived of a certain time value based on the arguement provided
         appendTimeMeasure(index){
            this.paragraphContainer = document.createElement("p");
            this.paragraphContainer.innerText = `Your ${this.timeMeasureArray[index][0] + 's'} are: ` + this.timeMeasureArray[index][1];
            document.getElementsByClassName('pad')[0].appendChild(this.paragraphContainer);
         }
         

         // triggers appendTimeMeassure with different arguments
         appendAllTimeMeasures(){
            this.appendTimeMeasure(0);
            this.appendTimeMeasure(1);
            this.appendTimeMeasure(2);
            this.appendTimeMeasure(3);
            this.appendTimeMeasure(4);
            this.appendTimeMeasure(5);
            this.appendTimeMeasure(6);
         }
        

         // displays the inputed text into a div
        static message(text){
            let message = document.createElement("p");
            message.innerText = text;
            document.getElementsByClassName('pad')[0].appendChild(message);
           }
        
        // removes all the p elements in the DOM
           static removeClutter(){
            for(let i = 0; i < 1000; i++) {
              document.querySelector("p").remove();
            }
            }
        
        // gets the first number of a number and adds 1 to it
        static firstNumber(number){
        return Number(String(number)[0]) + 1;
        }
           }