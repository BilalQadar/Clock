/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

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
