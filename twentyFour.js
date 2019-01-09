/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

function twentyFour(){
  var date = new Date();
  var hours = date.getHours();
  var sec = date.getSeconds();
  var min = date.getMinutes();
  
  sec = fixTime(sec); 
  min  = fixTime(min);
  var time = hours + ':' + min + ':' + sec;
  
  document.getElementById('display').innerHTML = time;
  document.getElementById('title').innerHTML = time;
  var t = setTimeout(twentyFour, 500);
}

function fixTime(num){
 if (num < 10){
   return "0" + num ;
  } else{
  return num;
  }
}

function saying(){
  var date = new Date(); 
  var hour = date.getHours();
  if (hour > 12 && hour < 12+6){
  document.getElementById('saying').innerHTML = "Good Afternoon!"; 
  } else if (hour>12 && hour >= 12+6) {
  document.getElementById('saying').innerHTML = "Good Evening!"; 
  }else if (hour<=12) {
    document.getElementById('saying').innerHTML = "Good Morning";
}
}

