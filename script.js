// Search bar function 
function searchBar(){
    var userInput = document.querySelector("#search-input");
    var cities = document.querySelector.apply("#city-list");
    
    var search = "api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=649856b9ade664fe56ba1ab8c053cf86"
    
    $ajax({
        url: search,
        method:"GET"
    }).then(function(response){
        render userSearch() {
            var cityList = $("<li>");
            
        }
    });
};