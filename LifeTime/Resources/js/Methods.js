

   function Calc(Mi, Ann, Time, Time1){
    let Day5 = Math.floor(Mi / 86400000)
    
    let p = document.createElement('p')
    let p1 = `You Have Lived For ${Time1} ${Time} And You Have ${Day5} Days Left Until Your ${Ann} ${Time} Anniversary `
    p.innerText = p1;
    if(Time === 'Seconds'){
        p.setAttribute('Class', 'Pad')
        document.body.appendChild(p)
    }else{
        document.body.appendChild(p)
    }
    }

    class user{
        constructor(){
           this.newDate = new Date();
           this.inputBirthDate = document.getElementById('birthDate').value;
           this.todayDate = this.newDate.getFullYear()+'-'+(this.newDate.getMonth()+1)+'-'+ this.newDate.getDate();
           this.inputBirthHour = document.getElementById("birthHour").value;
           this.parsedBirthDate = Date.parse(this.inputBirthDate) + Date.parse(`01 Jan 1970 ${this.inputBirthHour} GMT`);
           this.todayHour = this.newDate.getHours() * 3600000 + this.newDate.getMinutes() * 60000 + this.newDate.getSeconds() * 1000;
           this.parsedToday = Date.parse(this.todayDate)+this.todayHour;
           this.milliseconds = this.parsedToday - this.parsedBirthDate;
           this.timeMeasureArray = [];
           this.paragraphContainer;
        }
        
        returnTimeMeasure(timeMeasureInMillisecond){
            return Math.floor(this.milliseconds / timeMeasureInMillisecond);
        }

        pushTimeMeasure(timeMeasure, timeMeasureInMillisecond){
        this.timeMeasureArray.push([timeMeasure, Math.floor(this.milliseconds / timeMeasureInMillisecond)])
        }
        
        pushAllTimeMeasures(){
            currentUser.pushTimeMeasure(1000);      
            currentUser.pushTimeMeasure(60000); 
            currentUser.pushTimeMeasure(3600000);
            currentUser.pushTimeMeasure(86400000);   
            currentUser.pushTimeMeasure(604800000);  
            currentUser.pushTimeMeasure(2629800000);  
            currentUser.pushTimeMeasure(31557600000);
        }

        appendTimeMeasure(index){
            this.paragraphContainer = document.createElement("p");
            this.paragraphContainer.innerText = `Your ${this.timeMeasureArray[index][0]} are:` + this.timeMeasureArray[index][1];
            document.getElementsByClassName('pad')[0].appendChild(this.paragraphContainer);
         }

        static error(){
            let Error = document.createElement("p");
            Error.innerText = "This Anniversary Has Already Passed!";
            document.getElementsByClassName('pad')[0].appendChild(Error);
           }

        static removeClutter(){
            for(let i = 0; i < 1000; i++) {
              document.querySelector("p").remove()
            }
            };

        static send() {
            document.getElementById("birthhour").value = currentUser.inputBirthHour; 
            document.getElementById("data").value = currentUser.inputBirthDate;
            document.getElementById("cdata").value = currentUser.today;
            getElementById('submit').click();
        };

        static firstNumber(number){
        return Number(String(number)[0]) + 1;
        }
           }