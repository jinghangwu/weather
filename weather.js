$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);
 
    console.log(JSON.stringify(data));
   
    // Put your code here. Don't change any other code in this file. You will be sad.
      var formatDate=function(time){
              var   now=new Date(parseInt(time) * 1000)
              var   year=now.getFullYear();     
              var   month=now.getMonth()+1;     
              var   date=now.getDate();     
              var   hour=now.getHours();     
              var   minute=now.getMinutes();     
              var   second=now.getSeconds();     
              return   year+"-"+month+"-"+date;  
   // handleWeatherResponse.fuction(data).console.log(data);
    
   			
   			
   			}  			
   	var markup='';
   	markup+=formatDate(data.currently.time)+":'"+data.currently.summary+"'<br>";
   	markup+=formatDate(data.daily.data[1].time)+":'"+data.daily.data[1].summary+"'<br>"
   	markup+=formatDate(data.daily.data[2].time)+":'"+data.daily.data[2].summary+"'<br>"
   	markup+=formatDate(data.daily.data[3].time)+":'"+data.daily.data[3].summary+"'<br>"
   	//markup+=formatDate(data.daily.data[3].time)+":'"+data.daily.data[3].summary+"'<br>"
  
    // End of your code

    $('.weather-report').html(markup);
  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});