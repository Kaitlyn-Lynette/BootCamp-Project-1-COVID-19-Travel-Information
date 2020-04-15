// queryURL
var queryURL = "https://api.covid19api.com/summary";
$.ajax({
  url: queryURL,
  method: "GET",
}).then(function (response) {
  console.log(response);

  var queryURL =
    "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=L4hQpiyOGEibjPv6zTL3iHLGCrbGgIER";
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
  });
});
// Starting Data

// Storing data from QueryURL
console.log(array.countries[0]);

// Displaying infomration on screen

// Search button
$("#search").on("click", function (event) {});

// Clear Button

$("#clear").on("click", function (event) {});
