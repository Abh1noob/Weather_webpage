
async function getweather(){
    let searchinp = document.getElementById("inp").value;
    var res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchinp}&appid=47b4ab6d78d620719c38f13bc2448dc0&units=metric`);
    var data = await res.json();
    console.log('Current Weather:');
    console.log(data);
    document.querySelector('.temp').innerHTML= data.main.temp + " °C";
    document.querySelector('.pres').innerHTML= data.main.pressure + " Pa";
    document.querySelector('.humi').innerHTML= data.main.humidity + " %";
    document.querySelector('.wind').innerHTML= data.wind.speed + ' Kmph';
    document.querySelector('.city_name').innerHTML= data.name;

    let status = document.getElementById("focal_img");
    if(data.weather[0].main=="Clouds"){
        status.src = 'Images/cloudy.png'
    }
    else if(data.weather[0].main=="Clear"){
        status.src = 'Images/sun.png'
    }
    else if(data.weather[0].main=="Snow"){
        status.src = 'Images/snowfall.png'
    }
    else if(data.weather[0].main=="Rain"){
        status.src = 'Images/rain.png'
    }
    else if(data.weather[0].main=="Drizzle"){
        status.src = 'Images/drizzl.png'
    }
    else if(data.weather[0].main=="Thunderstorm"){
        status.src = 'Images/thunderstorm.png'
    }
    else{
        status.src = 'Images/sun.png'
    }
    forecast(searchinp);
}


async function default_data(city){
    var res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=47b4ab6d78d620719c38f13bc2448dc0&units=metric`);
    var data = await res.json();
    console.log('Current Weather:');
    console.log(data);
    document.querySelector('.temp').innerHTML= data.main.temp + " °C";
    document.querySelector('.pres').innerHTML= data.main.pressure + " Pa";
    document.querySelector('.humi').innerHTML= data.main.humidity + " %";
    document.querySelector('.wind').innerHTML= data.wind.speed + ' Kmph';
    document.querySelector('.city_name').innerHTML= data.name;

    let status = document.getElementById("focal_img");
    if(data.weather[0].main=="Clouds"){
        status.src = 'Images/cloudy.png'
    }
    else if(data.weather[0].main=="Clear"){
        status.src = 'Images/sun.png'
    }
    else if(data.weather[0].main=="Snow"){
        status.src = 'Images/snowfall.png'
    }
    else if(data.weather[0].main=="Rain"){
        status.src = 'Images/rain.png'
    }
    else if(data.weather[0].main=="Drizzle"){
        status.src = 'Images/drizzl.png'
    }
    else if(data.weather[0].main=="Thunderstorm"){
        status.src = 'Images/thunderstorm.png'
    }
    else{
        status.src = 'Images/sun.png'
    }
    forecast(city);
}

async function forecast(city){
    var res_geo = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=47b4ab6d78d620719c38f13bc2448dc0`);
    var data_geo = await res_geo.json();
    let latti = data_geo[0].lat;
    let longi = data_geo[0].lon;
    var res_forecast = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latti}&lon=${longi}&appid=47b4ab6d78d620719c38f13bc2448dc0&units=metric`);
    var data_forecast = await res_forecast.json();
    console.log('Forecast:');
    console.log(data_forecast.list[0].dt_txt);

    // Day 1:
    let max_temp_1 = 0;
    let min_temp_1 = 100;
    let humi_1 = 0;
    let humi_sum = 0;
    let rain1 = 0;
    let clouds1=0;
    let status1 = document.getElementById("fore1");

    let date_text1 = 'Tomorrow';
    document.querySelector('.date1').innerHTML= date_text1

    for(let i = 0; i<=8; i++){
        if((data_forecast.list[i].main.temp_max)>max_temp_1){
            max_temp_1 = data_forecast.list[i].main.temp_max;
        }
    }
    document.querySelector('.max_temp1').innerHTML= max_temp_1 + " °C";

    for(let i = 0; i<=8; i++){
        if((data_forecast.list[i].main.temp_min)<min_temp_1){
            min_temp_1 = data_forecast.list[i].main.temp_min;
        }
    }
    document.querySelector('.min_temp1').innerHTML= min_temp_1 + " °C";

    for(let i = 0; i<=8; i++){
        humi_sum += data_forecast.list[i].main.humidity;
    }
    document.querySelector('.humi1').innerHTML= ((humi_sum)/8) + " %";
   
    for(let i = 0; i<=8; i++){
        if((data_forecast.list[i].weather[0].main)=='Clouds'){
            clouds1+=1;
        }
        if((data_forecast.list[i].weather[0].main)=='Rain'){
            rain1+=1;
        }
    }

    if(clouds1>rain1){
        status1.src= 'Images/rain.png'
    }else{
        status1.src= 'Images/cloudy.png'
    }
    

    // Day 2:
    let max_temp_2 = 0;
    let min_temp_2 = 100;
    let humi_2 = 0;
    let humi_sum2 = 0;
    let rain2 = 0;
    let clouds2=0;
    let status2 = document.getElementById("fore2");

    let date_text2 = (data_forecast.list[9].dt_txt).slice(0,10);
    document.querySelector('.date2').innerHTML= date_text2;
    

    for(let i = 9; i<=16; i++){
        if((data_forecast.list[i].main.temp_max)>max_temp_2){
            max_temp_2 = data_forecast.list[i].main.temp_max;
        }
    }
    document.querySelector('.max_temp2').innerHTML= max_temp_2 + " °C";

    for(let i = 9; i<=16; i++){
        if((data_forecast.list[i].main.temp_min)<min_temp_2){
            min_temp_2 = data_forecast.list[i].main.temp_min;
        }
    }
    document.querySelector('.min_temp2').innerHTML= min_temp_2 + " °C";

    for(let i = 9; i<=16; i++){
        humi_sum2 += data_forecast.list[i].main.humidity;
    }
    document.querySelector('.humi2').innerHTML= ((humi_sum2)/8) + " %";

    for(let i = 9; i<=16; i++){
        if((data_forecast.list[i].weather[0].main)=='Clouds'){
            clouds2+=1;
        }
        if((data_forecast.list[i].weather[0].main)=='Rain'){
            rain2+=1;
        }
    }

    if(clouds2>rain2){
        status2.src= 'Images/rain.png';
    }else{
        status2.src= 'Images/cloudy.png';
    }

    // Day 3:
    let max_temp_3 = 0;
    let min_temp_3 = 100;
    let humi_3 = 0;
    let humi_sum3 = 0
    let rain3 = 0;
    let clouds3=0;
    let status3 = document.getElementById("fore3");

    let date_text3 = (data_forecast.list[17].dt_txt).slice(0,10);
    document.querySelector('.date3').innerHTML= date_text3;

    for(let i = 17; i<=24; i++){
        if((data_forecast.list[i].main.temp_max)>max_temp_3){
            max_temp_3 = data_forecast.list[i].main.temp_max;
        }
    }
    document.querySelector('.max_temp3').innerHTML= max_temp_3 + " °C";

    for(let i = 17; i<=24; i++){
        if((data_forecast.list[i].main.temp_min)<min_temp_3){
            min_temp_3 = data_forecast.list[i].main.temp_min;
        }
    }
    document.querySelector('.min_temp3').innerHTML= min_temp_3 + " °C";

    for(let i = 17; i<=24; i++){
        humi_sum3 += data_forecast.list[i].main.humidity;
    }
    document.querySelector('.humi3').innerHTML= ((humi_sum3)/8) + " %";

    for(let i = 17; i<=24; i++){
        if((data_forecast.list[i].weather[0].main)=='Clouds'){
            clouds3+=1;
        }
        if((data_forecast.list[i].weather[0].main)=='Rain'){
            rain3+=1;
        }
    }

    if(clouds3>rain3){
        status3.src= 'Images/rain.png'
    }else{
        status3.src= 'Images/cloudy.png'
    }

    // Day 4:
    let max_temp_4 = 0;
    let min_temp_4 = 100;
    let humi_4 = 0;
    let humi_sum4 = 0;
    let rain4 = 0;
    let clouds4=0;
    let status4 = document.getElementById("fore4");

    let date_text4 = (data_forecast.list[23].dt_txt).slice(0,10);
    document.querySelector('.date4').innerHTML= date_text4;

    for(let i = 25; i<=32; i++){
        if((data_forecast.list[i].main.temp_max)>max_temp_4){
            max_temp_4 = data_forecast.list[i].main.temp_max;
        }
    }
    document.querySelector('.max_temp4').innerHTML= max_temp_4 + " °C";

    for(let i = 25; i<=32; i++){
        if((data_forecast.list[i].main.temp_min)<min_temp_4){
            min_temp_4 = data_forecast.list[i].main.temp_min;
        }
    }
    document.querySelector('.min_temp4').innerHTML= min_temp_4 + " °C";

    for(let i = 25; i<=32; i++){
        humi_sum4 += data_forecast.list[i].main.humidity;
    }
    document.querySelector('.humi4').innerHTML= ((humi_sum4)/8) + " %";

    for(let i =25; i<=32; i++){
        if((data_forecast.list[i].weather[0].main)=='Clouds'){
            clouds4+=1;
        }
        if((data_forecast.list[i].weather[0].main)=='Rain'){
            rain4+=1;
        }
    }

    if(clouds4>rain4){
        status4.src= 'Images/rain.png'
    }else{
        status4.src= 'Images/cloudy.png'
    }

    // Day 5:
    let max_temp_5 = 0;
    let min_temp_5 = 100;
    let humi_5 = 0;
    let humi_sum5 = 0;
    let rain5 = 0;
    let clouds5=0;
    let status5 = document.getElementById("fore5");

    let date_text5 = (data_forecast.list[33].dt_txt).slice(0,10);
    document.querySelector('.date5').innerHTML= date_text5;

    for(let i = 33; i<40; i++){
        if((data_forecast.list[i].main.temp_max)>max_temp_5){
            max_temp_5 = data_forecast.list[i].main.temp_max;
        }
    }
    document.querySelector('.max_temp5').innerHTML= max_temp_5 + " °C";

    for(let i = 33; i<40; i++){
        if((data_forecast.list[i].main.temp_min)<min_temp_5){
            min_temp_5 = data_forecast.list[i].main.temp_min;
        }
    }
    document.querySelector('.min_temp5').innerHTML= min_temp_5 + " °C";

    for(let i = 33; i<40; i++){
        humi_sum5 += data_forecast.list[i].main.humidity;
    }
    document.querySelector('.humi5').innerHTML= ((humi_sum5)/8) + " %";

    for(let i =33; i<40; i++){
        if((data_forecast.list[i].weather[0].main)=='Clouds'){
            clouds5+=1;
        }
        if((data_forecast.list[i].weather[0].main)=='Rain'){
            rain5+=1;
        }
    }

    if(clouds5>rain5){
        status5.src= 'Images/rain.png'
    }else{
        status5.src= 'Images/cloudy.png'
    }


}
