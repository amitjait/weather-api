const input = document.getElementsByClassName('input');
const button = document.getElementById("subBtn");



console.log(input[0].value);
console.log(button.innerHTML);

let locChange = document.getElementById('location').innerHTML;
let latitude = document.getElementById('latLong').innerHTML;
// let longitude = document.getElementById('Long').innerHTML;
let timeZoneChange = document.getElementById('timeZone').innerHTML;
let windS = document.getElementById('windSpeed').innerHTML;
let humidity = document.getElementById('humidity').innerHTML;
let windD = document.getElementById('windDirection').innerHTML;
let uvI = document.getElementById('uvIndex').innerHTML;
let feel = document.getElementById('feelsLike').innerHTML;

// const apiCall = fetch()

async function getDetails(){

    // key: 3e9dc67288734f0bb89201357221012

    let access_key = input[1].value;    
    let loc = document.getElementsByClassName('input')[0].value;

    // const url = "http://api.weatherstack.com/current?access_key=${"+access_key+"}&query=${"+loc+"}";
    
    // const url2 = "https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={"+access_key+"}";

    const url3 = "https://api.weatherapi.com/v1/current.json?key=3e9dc67288734f0bb89201357221012&q="+loc+"&aqi=no";
    // 

    let result = await fetch(url3);
    result.json().then(json => {
        console.log(json);
        var temp = json.current.temp_c;
        var feelsLike = json.current.feelslike_c;


        console.log(temp);
        document.getElementById('location').innerHTML = locChange+temp+" C";
        document.getElementById('latLong').innerHTML = latitude+json.location.lat+" / "+json.location.lon;
        // document.getElementById('Long').innerHTML = longitude+;
        document.getElementById('timeZone').innerHTML = timeZoneChange+json.location.tz_id;
        document.getElementById('windSpeed').innerHTML = windS+json.current.wind_kph+" KPH";
        document.getElementById('humidity').innerHTML =humidity+json.current.humidity+" %";
        document.getElementById('windDirection').innerHTML = windD + json.current.wind_dir;
        document.getElementById('uvIndex').innerHTML = uvI+json.current.uv;
        document.getElementById('feelsLike').innerHTML =feel+json.current.feelslike_c+" C";
    })

    
}

// getDetails();

function getData(){
    getDetails(); 
}