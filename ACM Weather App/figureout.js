//To Understand how data is obtained. This file serves no purpose.

async function current(){
    var res_current = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=thane&appid=47b4ab6d78d620719c38f13bc2448dc0&units=metric`);
    var data_current = await res_current.json();
    console.log('Current:');
    console.log(data_current);

}

current();

async function forecast(){
    let coor = geo();

    console.log();
    console.log("Testing Open!");
    console.log(coor);
    console.log("Testing Close!")
    console.log();
    var res_forecast = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=19.1943294&lon=72.9701779&appid=47b4ab6d78d620719c38f13bc2448dc0&units=metric`);
    var data_forecast = await res_forecast.json();
    console.log('Forecast:');
    console.log(data_forecast);

}

forecast();

async function geo(){
    var res_geo = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=Thane&limit=1&appid=47b4ab6d78d620719c38f13bc2448dc0`);
    var data_geo = await res_geo.json();
    console.log('Geo:');
    let latti = data_geo[0].lat;
    let longi = data_geo[0].lon;
}