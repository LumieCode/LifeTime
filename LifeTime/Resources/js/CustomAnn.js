function GetAnn(){
   
  const newDate = new Date();
  const val = document.getElementById('birthDate').value;
  const val1 = newDate.getFullYear()+'-'+(newDate.getMonth()+1)+'-'+newDate.getDate();
  let BirthTime = document.getElementById("birthHour").value
  let prs = Date.parse(val) + Date.parse(`01 Jan 1970 ${BirthTime} GMT`)
  const time = newDate.getHours() * 3600000 + newDate.getMinutes() * 60000 + newDate.getSeconds() * 1000;
  const TotalBirth = Date.parse(val1)+time;
  let Mi = TotalBirth - prs;

  function Calc(Mi, Ann){
let time1 = Mi % 31557600000
let time2 = time1 % 2629800000
let time3 = time2 % 604800000
let time4 = time3 % 86400000
let time5 = time4 % 3600000
let time6 = time5 % 60000
let Year5 = Math.floor(Mi / 31557600000)
let Month5 = Math.floor(time1 / 2629800000)
let Week5 = Math.floor(time2 / 604800000)
let Day5 = Math.floor(time3 / 86400000)
let Hour5 = Math.floor(time4 / 3600000)
let Min5 = Math.floor(time5 / 600000)
let Sec5 = Math.floor(time6 / 1000)
    
    let p = document.createElement('p')
    let p1 = `${Year5} Years,${Month5} Months,${Week5} Weeks,${Day5} Days,${Hour5} Hours,${Min5} Minutes,${Sec5} Seconds Left Until Your ${Ann.join(" ")} anniversary`
    p.innerText = p1;
        p.setAttribute('Class', 'Pad')
        document.body.appendChild(p)
  }
  
  let InAnn = document.getElementById("Ann").value;
  InAnn = InAnn.split(" ");
  
  if(InAnn.includes("Year") || InAnn.includes("Years"))
  {
  let YearNum = InAnn[0];
  let YearAnn = YearNum * 31536000000;
  Mi = YearAnn - Mi;
  if (Mi < 0){
  error()
  }
  
  else{
  Calc(Mi, InAnn)
  }
  
  }
  else if(InAnn.includes("Month") || InAnn.includes("Months"))
  {
  let MonthNum = InAnn[0];
  let MonthAnn = MonthNum * 2629800000;
  Mi = MonthAnn - Mi;
  if (Mi < 0){   
  error()
  }
  else{
  Calc(Mi, InAnn)
  }
  
  }
  else if(InAnn.includes("Week") || InAnn.includes("Weeks"))
  {
  let WeekNum = InAnn[0];
  let WeekAnn = WeekNum * 604800000;
  Mi = WeekAnn - Mi;
  if (Mi < 0){
  error()
  }
  else{
    Calc(Mi, InAnn)
  }
  
  }
  else if(InAnn.includes("Day") || InAnn.includes("Days"))
  {
  let DayNum = InAnn[0];
  let DayAnn = DayNum * 86400000;
  Mi = DayAnn - Mi;
  if (Mi< 0){
  error()
  }
  else{
  Calc(Mi, InAnn)
  }
  
  }
  else if(InAnn.includes("Hour") || InAnn.includes("Hours"))
  {
  let HourNum = InAnn[0];
  let HourAnn = HourNum * 3600000;
  Mi = HourAnn - Mi;
  if (Mi < 0){
  error()
  }
  else{
  Calc(Mi, InAnn)
  }
  
  }
  else if(InAnn.includes("Minute") || InAnn.includes("Minutes"))
  {
  let MinNum = InAnn[0];
  let MinAnn = MinNum * 60000;
  Mi = MinAnn - Mi;
  if (Mi < 0){
  error()
  }
  else{
  Calc(Mi, InAnn)
  }
  
  
  }
  else if(InAnn.includes("Second") || InAnn.includes("Seconds"))
  {
  let SecNum = InAnn[0];
  let SecAnn = SecNum * 1000;
  Mi = SecAnn - Mi;
  if (Mi < 0){
  
  error()
  }
  else{
  Calc(Mi, InAnn)
  }
  
  }
  else{
  let Error = document.createElement("p");
  Error.innerText = "Your inputat Is Not Correct/You Didn't Fill In The Birth Date/Server Side Has error Might Be Fixed If You Contact diooplatinum@gmail.com";
  Error.setAttribute("Class", "Pad");
  document.body.appendChild(Error);
  }
  }