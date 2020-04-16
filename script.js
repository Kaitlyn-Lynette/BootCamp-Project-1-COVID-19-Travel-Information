var queryURL = "https://api.covid19api.com/summary";
$.ajax({
  url: queryURL,
  method: "GET",
}).then(function (responsecovid) {
  console.log(responsecovid);

  // Make a variable for the country and get this value from the search
  var queryURL =
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=d7814b6763714644a52a112b30add51b";

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (responsenews) {
    // Starting Data
    var totalConfirmed = responsecovid.Global.TotalConfirmed;
    console.log(totalConfirmed);
    var totalDeaths = responsecovid.Global.TotalDeaths;
    console.log(totalDeaths);
    var totalRecovered = responsecovid.Global.TotalRecovered;
    console.log(totalRecovered);
  });
  // Storing data from QueryURL

  // Displaying infomration on screen for news.
  console.log(responsenews);
});

// Search button
$("#search").on("click", function (event) {
  event.preventDefault();
  var country = $("#location-search").val();
  console.log(country);
});

// Clear Button

$("#clear").on("click", function (event) {});
