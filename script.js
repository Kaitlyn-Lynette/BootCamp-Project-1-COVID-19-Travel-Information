// QueryURL for covid-19 Data
var queryURL = "https://api.covid19api.com/summary";
$.ajax({
  url: queryURL,
  method: "GET",
}).then(function (responsecovid) {
  console.log(responsecovid);

  // QueryURL for NYTimes World News Data
  var queryURL =
    "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=L4hQpiyOGEibjPv6zTL3iHLGCrbGgIER";
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (responsenyt) {
    console.log(responsenyt);

    // Starting Data
    var totalConfirmed = responsecovid.Global.TotalConfirmed;
    var totalDeaths = responsecovid.Global.TotalDeaths;
    var totalRecovered = responsecovid.Global.TotalRecovered;

    // Storing data from QueryURL

    // Displaying infomration on screen
  });
});

// Search button
$("#search").on("click", function (event) {});

// Clear Button

$("#clear").on("click", function (event) {});
