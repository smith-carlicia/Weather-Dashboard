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
                // var date = moment().format("L");
                // $(".cityandcurrentdate").text(date);
                // $(".cityandcurrentdate").text(moment().format("L"));
        
                $.ajax({
                    url: currentWeatherURL,
                    method:"GET"
                }).then(function(response){
                    console.log(response);
                    // var todayWeather = response.data;
                    event.stopPropagation();
                    var currentWeatherCard = $(".currentweather");
    

                    var currentWeather = $(".cityandcurrentdate").text(response.name);
                    console.log(response.name + response.date + response.icon);
                    // console.log("testing");
                    var icon = $(".icon").attr("http://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png");
                    var temperature = $(".tempF").text("Temperature: " + response.main.temp + "F");
                    console.log("Temperature" + response.main.temp);
    
                    var humidity = $(".humidity").text("Humidity: " + response.main.humidity + "%");
                    console.log("Humidity: " + response.main.humidity);
    
                    var wind = $(".wind").text("Wind Speed: " + response.wind.speed + "MPH");
                    console.log("Wind Speed: " + response.wind.speed);
    
                    currentWeatherCard.append(currentWeather, temperature, humidity, wind, uv);
                    $("body").append(currentWeatherCard);
    
                    var tempF = ((response.main.temp - 273.15) * 1.80 + 32);
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
                    method: "GET",
                }).then(function(response) {
                    console.log(forecastURL);
                    console.log(response);
                    for (var i = 0; i <= 32; i += 8){
                        const columnDiv = $("<div>").addClass("col-auto mb-3");
                        const cardDiv = $("<div>").addClass("card weather-card");
                        const cardBody = $("<div>").addClass("card-body").css({"background": "#1e90ff", "color": "white"});
                        const date = $("<div>").addClass("date").text(response.list[i].dt_txt.slice(0,-9)).css({"font-size": "14px", "line-height": "5px"});
                        const icon = $("<img>").addClass("icon").attr("src", "http://openweathermap.org/img/wn/" + response.list[i].weather[0].icon + "@2x.png").css({"height": "45px", "width": "45px"});
                        const temperature = $("<div>").addClass("temperature").text((("Temp:" + response.list[i].main.temp - 273) * 1.8) + 32).css({"font-size": "12px", "line-height": "5px", "padding-bottom": "5px"});
                        const humidity = $("<div>").addClass("humidity").text("Humidity:" + response.list[i].main.humidity + "%").css({"font-size": "12px", "line-height": "9px"});
                        cardBody.append(date, icon, temperature, humidity)
                        cardDiv.append(cardBody)
                        columnDiv.append(cardDiv)
                        $('.card-deck').append(columnDiv)
                    }

                    // $('#icon-1').attr("http://openweathermap.org/img/wn/" + response.list[0].weather.icon + "@2x.png");
                }
                )}
            }
      });
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
      )
      
        
      