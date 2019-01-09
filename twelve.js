/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

function timer(){
  var date = new Date();
  var hours = date.getHours();
  var sec = date.getSeconds();
  var min = date.getMinutes();
  var des = "AM"
  
  if (hours>12){
    des = "PM"
  }
  
  sec = fixTime(sec); 
  min  = fixTime(min);
  hours = fixHours(hours);

  
  var time = hours + ':' + min + ':' + sec +' '+ des;
  
  document.getElementById('display').innerHTML = time;
  document.getElementById('title').innerHTML = time;
  var t = setTimeout(timer, 500);
} 

function fixTime(num){
 if (num < 10){
   return "0" + num ;
  } else{
  return num;
  }
}

function fixHours(num) {
  if (num > 12){
    return num - 12;
  } else{ 
    return num
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
