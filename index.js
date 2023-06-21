
setInterval(function showtime(){
  let x =  document.getElementById('hours')
  let y =  document.getElementById('minutes')
  let z =  document.getElementById('seconds')
  let e =  document.getElementById('meridian')

    let a = new Date;
    let  hours= a.getHours();
    hours = hours > 12 ? hours % 12 :"0"+ hours;
    hours = hours < 10 ? "0" + hours : hours;
    x.innerHTML = hours + ""+ ":";
     e.innerHTML = hours < 12 ? "AM" :"PM"; 

    let m=a.getMinutes();
    m=m<10?"0"+m:m;
    y.innerHTML=m +  ":";
    
    let s= a.getSeconds();
    s = s < 10 ?  "0"+s : s;
    z.innerHTML=s;
},1000);

const z=new Date;
let a = z.getHours();
let b = a < 12 ? a > 12 ?  alert( "Good Morning!" )  : alert("Good Afternoon" )  :alert("Good Evening!" );


// setInterval(() => {
//   //getting id.....
//   const hEl = document.getElementById('hours');
//   const mEl = document.getElementById('minutes');
//   const sEl = document.getElementById('seconds');
//   // const ampmEl = document.getElementById('ampm');
//   // const noonEl = document.getElementById('noon');
//   // ampmEl.innerHTML = h < 12 ? "AM" :"PM";  
//   // noonEl.innerHTML = h < 12 ? h > 1 ? h > 6?  "MORNING" : "AFTERNOON" :"EVENING" : "NIGHT";

//   //declare variable
//   var time = new Date();
//   var h = time.getHours();
//   var m = time.getMinutes();
//   var s = time.getSeconds();
  
//   //changing the hours 24 to 12 hours
//   h = h > 12 ? h % 12 :"0"+ h;
//   h = h < 10 ? "0" + h : h;
//   m = m < 10 ? "0" + m : m;
//   s = s < 10 ?  s: s;
//   //what element we want to changing dynamic....
//   hEl.innerHTML = h;
//   mEl.innerHTML = m;
//   sEl.innerHTML = s;   
// }, 1000);


