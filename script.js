$(document).ready(function(){
    $(function(){

        var moment = moment().isDate(newDate());
        var userInput = document.querySelector("#search-input");
        var forecast = document.querySelector("#five-day-forecast");
        var searchbutton = document.querySelector("#searchbtn");
        var searchHistory = document.querySelector("#search-engine");
    
        
    
        function searchBar(){
            // var cities = document.querySelector.apply("#city-list");
            var cityName = userInput.value;
    
            var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=649856b9ade664fe56ba1ab8c053cf86"
            var currentWeatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=649856b9ade664fe56ba1ab8c053cf86"
            console.log(currentWeatherURL);
            // var currentDay = moment().format();
            $(".cityandcurrentdate").text(moment().format("L"));
    
    
            $.ajax({
                url: currentWeatherURL,
                method:"GET"
            }).then(function(response){
                console.log(response.main.temp);
                $(".cityandcurrentdate").text(response.name + response.date + response.icon);
                $(".tempF").text("Temperature: " + response.main.temp);
                $(".humidity").text("Humidity: " + response.main.humidity);
                $(".wind").text("Wind Speed: " + response.wind.speed);
                $("uv").text("UV Index: " + response.uv.index);

                var tempF = (response.main.temp - 273.15) * 1.80 + 32;
                $(".temp").text("Temperature (K) " + response.main.temp);
                $(".tempF").text("Temperature (F) " + tempF.toFixed(2));
            });
    // Render search 
           renderSearch();
            function renderSearch(){
                userInput.innerHTML = "";
                for (var i = 0; i < search.length; i++){
                    var search = search[i];
                    var li = document.createElement("li");
                    li.textContent = search;
                    cities.appendChild(li);
                }
            }
    // Search button click event
            searchbutton.addEventListener("click", function(event){
                event.preventDefault();
                searchBar();
            });
    // Search submission 
            searchHistory.addEventListener("submit", function(event){
                event.preventDefault();
    
                var searchText = userInput.value.trim();
                if (searchText === "") {
                    return;
                  }
    
                cityName.push(searchText);
                userInput.value = "";
    
                renderSearch();
            })
    
        };
        // Five day forecast card forms
    
    }); //end ready
});