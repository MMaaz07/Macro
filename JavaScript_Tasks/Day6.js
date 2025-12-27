const apiKey="";//API Key Here

function getWeather(){
    const city=document.getElementById("city-name").value;
    if(city==""){
        document.getElementById("displayCity").innerText="please enter a city";
        return;
    }

    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    fetch(url)
    .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                console.log(data);
                //optional chaining used here
                const temp=data.main ? data.main.temp : undefined;
                document.getElementById("displayCity").innerText=`${city}`;
                document.getElementById("displayTemp").innerText =
                    `Temperature in ${city}: ${temp}°C`;

            } else {
                document.getElementById("displayCity").innerText = "City not found";
            }
        })
        .catch(() => {
            document.getElementById("displayCity").innerText = "Error fetching data";
        });
};