console.log("hello-world");
$(document).ready(function() {
      console.log("ready");
      $("#searchbtn").on("click", function(event){
        //   localStorage.getItem("#city-list" + currentCityName);
        event.preventDefault();
        var currentCityName = "";
        console.log(currentCityName);
        searchBar(currentCityName);
            function searchBar(currentCityName){
                var currentCityName = $("#search-input").val();
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
                    // var todayWeather = response.data;
                    event.stopPropagation();
                    var currentWeatherCard = $(".currentweather");
    

                    var currentWeather = $(".cityandcurrentdate").text(response.name + response.date + response.icon);
                    console.log(response.name + response.date + response.icon);
                    // console.log("testing");
                    var temperature = $(".tempF").text("Temperature: " + response.main.temp + "F");
                    console.log("Temperature" + response.main.temp);
    
                    var humidity = $(".humidity").text("Humidity: " + response.main.humidity + "%");
                    console.log("Humidity: " + response.main.humidity);
    
                    var wind = $(".wind").text("Wind Speed: " + response.wind.speed + "MPH");
                    console.log("Wind Speed: " + response.wind.speed);
    
                    currentWeatherCard.append(currentWeather, temperature, humidity, wind, uv);
                    $("body").append(currentWeatherCard);
    
                    var tempF = (response.main.temp - 273.15) * 1.80 + 32;
                    $(".temp").text("Temperature (K) " + response.main.temp);
                    $(".tempF").text("Temperature (F) " + tempF.toFixed(2));

                    $(currentWeatherCard).append(body);

                    var lat = response.city.coord.lat;
                    var lon = response.city.coord.lon;

                    var uvIndexURL = "https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=649856b9ade664fe56ba1ab8c053cf86"
                    console.log(unIndexURL);
                    $.ajax({
                        url: uvIndexURL, 
                        method: "GET",
                    }).then(function(responseUV){
                        var uvIndex = responseUV.value;
                        var uvIndexDiv = $(".uv").text("UV Index" + uvIndex);
                        $(uvIndexDiv).append("#currentweather")
                    })
                    });
            
                // Five day forecast card forms
                cards(currentCityName);
                function cards(currentCityName){
                
                var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + 
                currentCityName + "&appid=649856b9ade664fe56ba1ab8c053cf86"
                console.log(forecastURL);
                
                $.ajax({
                    url: forecastURL,
                    method: "GET"
                }).then(response)
                {
                    console.log(forecastURL);
                    console.log(response);

                    // JSON.stringify(response.city.name);
                    var cardOne = $("#card-one");
                    var cardTwo = $("#card-two");
                    var cardThree = $("#card-three");
                    var cardFour = $("#card-four");
                    var cardFive = $("#card-five");
                    for (var i = 0; i < 5; i++){
                        colEl = $("<div>");
                        colEl.attr("class", "col-sm-2");
                        $("#five-day-forecast").append(colEl);
                        cardEl = $("<div>");
                        cardEl.attr("class", "card small card-body");
                        colEl.append(cardEl);
                        dateEl = $("<h5>");
                        var date = $(response.list[0].dt_txt.slice(0,-9));
                        dateEl.text(date);
                        cardEl.append(dateEl);
                        var icon = $("#card-icon").text(response.weather[3].icon);
                        iconEl = $("<img>");
                        iconEl.attr("src", "https://openweathermap.org/img/wn" + icon + "@2x.png");
                        icon.attr("width", 40);
                        icon.attr("height", 40);
                        cardEl.append(iconEl);
                        tempEl = $("<h5>");
                        var temperature = parsint(((response.list[0].main.temp - 273) * 1.8) + 32);

                    }
                var forecast = document.querySelector("#five-day-forecast");
                var date = $(response.list[0].dt_txt.slice(0,-9));
                var icon = $("#card-icon").text(response.weather[3].icon);
                var temperature = $("#card-temperature").text(response.main.temp);
                var humidity = $("#card-humidity").text(response.humidity);

                    forecast.append(date, icon, temperature, humidity);
                    $("body").append(cardOne);
                }
            // }
            //     };
                // Render search 
               renderSearch();
               function renderSearch(searchInput){
                var cities = document.querySelector("#city-list");
                var searchInput = document.querySelector("#searchbtn").value;
                console.log("#city-list");
                   searchInput.innerHTML = "";
                   for (var i = 0; i < cities.length; i++){
                       var cities = cities[i];
                       
                       var li = document.createElement("li");
                       li.textContent = cities;
                       cities.appendChild(li);
                       $("<ul>").append(cities);
                   }
               }
        
            };
       // Submission

               searchHistory(currentCityName);
                function searchHistory(currentCityName){
                    var searchHistory = $("#search-engine");
                    var searchHistorybtn = $("searchbtn").text(currentCityName).addClass("city-button");
                    searchHistory.prepend(searchHistorybtn);
                    $("search-input").val("");
                }

                 var searchHistory = document.querySelector("#search-engine");
               searchHistory.addEventListener("submit", function(event){
                   event.preventDefault();
                   var searchText = searchInput.value.trim();
                   if (searchText === "") {
                       return;
                     }
                     
                   currentCityName.push(searchText);
                   searchInput.value = "";
                     
                   renderSearch();
               })
            //    
               
      }
    }
      )}
        
    );  