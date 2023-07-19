
setInterval(function showtime(){
  let x =  document.getElementById('hours')
  let y =  document.getElementById('minutes')
  let z =  document.getElementById('seconds')
  let e =  document.getElementById('meridian')

    let a = new Date;
    let  hours= a.getHours();
    hours = hours > 12 ? hours % 12 : hours;
    hours = hours < 10 ? "0" + hours : hours;
    x.innerHTML = hours + ""+ ":";
    //  e.innerHTML = hours < 12 ? "AM" :"PM"; 

    let m=a.getMinutes();
    m=m<10?"0"+m:m;
    y.innerHTML=m +  ":";
    
    let s= a.getSeconds();
    s = s < 10 ?  "0"+s : s;
    z.innerHTML=s;
},1000);

// const z=new Date;
// let a = z.getHours();
// let b = a < 12 ? a > 12 ?  alert( "Good Morning!" )  : alert("Good Afternoon" )  :alert("Good Evening!" );
function  search(){
  let search = document.getElementById("search-input");
  let searchValue = search.value;
  console.log(searchValue);
}


// search_handler
// $(document).ready(function(){
//   $("#search").click(function(){
//     $("#searchBar").on("keyup", function() {
//       var value = $(this).val().toLowerCase();
//       $(".card-body h5").filter(function() {
//         $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
//       });
//     });
//   })
// });


const btn=document.getElementById("search")
 btn.addEventListener("click",function(){
  const x=document.getElementById("searchBar").value
  console.log(x)
 })
