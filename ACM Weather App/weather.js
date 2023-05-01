async function getweather(){
    let searchinp = document.getElementById("inp").value;
    var res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchinp}&appid=47b4ab6d78d620719c38f13bc2448dc0&units=metric`);
    var data = await res.json();
    console.log(data);
    document.querySelector('.temp').innerHTML= data.main.temp + " °C";
    document.querySelector('.pres').innerHTML= data.main.pressure + " Pa";
    document.querySelector('.humi').innerHTML= data.main.humidity + " %";
    document.querySelector('.wind').innerHTML= data.wind.speed + ' Kmph';
    document.querySelector('.city_title').innerHTML= data.name;
    document.querySelector('.time').innerHTML= Date(data.main.sunrise);
}
