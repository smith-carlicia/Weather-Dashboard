$(function(){

    // var currentDate = moment().isDate(newDate());
        
        searchBar();
        function searchBar(){
            var searchbutton = document.querySelector("#searchbtn");
            var searchInput = document.querySelector("#search-input").value;
            var searchHistory = document.querySelector("#search-engine");

            var currentCityName = "";
            // var userInput = $("#search-input").value;
            console.log("#search-input");
    
            var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + 
            currentCityName + "&appid=649856b9ade664fe56ba1ab8c053cf86"
            console.log(forecastURL);
            

            var currentWeatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + 
            currentCityName + "&appid=649856b9ade664fe56ba1ab8c053cf86"
            console.log(currentWeatherURL);
            
            // var currentDay = moment().format();
            $(".cityandcurrentdate").text(moment().format("L"));
    

            $.ajax({
                url: currentWeatherURL,
                method:"GET"
            }).then(function(response){
                console.log(response);
                console.log(currentWeatherURL);
                // var todayWeather = response.data;
                var currentWeatherCard = $(".currentweather");

                var currentWeather = $(".cityandcurrentdate").text(response.name + response.date + response.icon);
                console.log(response.name + response.date + response.icon);
                // console.log("testing");
                var temperature = $(".tempF").text("Temperature: " + response.main.temp);
                console.log("Temperature" + response.main.temp);

                var humidity = $(".humidity").text("Humidity: " + response.main.humidity);
                console.log("Humidity: " + response.main.humidity);

                var wind = $(".wind").text("Wind Speed: " + response.wind.speed);
                console.log("Wind Speed: " + response.wind.speed);

                var uv = $("uv").text("UV Index: " + response.uv.index);
                console.log("UV Index: " + response.uv.index);

                currentWeatherCard.append(currentWeather, temperature, humidity, wind, uv);
                $("body").append(currentWeatherCard);

                // var tempF = (response.main.temp - 273.15) * 1.80 + 32;
                // $(".temp").text("Temperature (K) " + response.main.temp);
                // $(".tempF").text("Temperature (F) " + tempF.toFixed(2));
            });
            // Render search 
           renderSearch();
           function renderSearch(){
            var cities = document.querySelector("#city-list");
            console.log("#city-list");
               searchInput.innerHTML = "";
               for (var i = 0; i < cities.length; i++){
                   var cities = cities[i];
                   
                   var li = document.createElement("li");
                   li.textContent = cities;
                   cities.appendChild(li);
                   $()
               }
           }
   // Search button click event
           searchbutton.addEventListener("click", function(event){
               event.preventDefault();
               searchBar();
           });
   // Submission 
           searchHistory.addEventListener("submit", function(event){
               event.preventDefault();
   
               var searchText = searchInput.value.trim();
               if (searchText === "") {
                   return;
                 }
   
               cityName.push(searchText);
               searchInput.value = "";
                 
               renderSearch();
           })
    
        };
        // Five day forecast card forms
        // function cards(){
            
        //     $.ajax({
        //         url: forecastURL,
        //         method: "GET"
        //     }).then(response){
                // var forecast = document.querySelector("#five-day-forecast");
        //         $("#card-date").text(response.date);
        //         $("#card-icon").text(response.icon);
        //         $("#card-temperature").text(responce.main.temperature);
        //         $("#card-humidity").text(response.humidity);
        //     }
        // };
        //     var forecastCards = ["card-one", "card-two", "card-three", "card-4", "card-5"];

        //     for (var i = 0; i < forecastCards.length; i++){
                   
        //     }
           
        
}); //end ready