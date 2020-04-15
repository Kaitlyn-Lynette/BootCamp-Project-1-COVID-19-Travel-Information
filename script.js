// var queryURL = "https://api.covid19api.com/summary";
// $.ajax({
//   url: queryURL,
//   method: "GET",
// }).then(function (response) {
//   console.log(response);
// });

var queryURL =
  "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=L4hQpiyOGEibjPv6zTL3iHLGCrbGgIER";
$.ajax({
  url: queryURL,
  method: "GET",
}).then(function (response) {
  console.log(response);
});

// Starting Data

// Storing data to compare to user input(city), approx date of travel

//

// Displaying infomration on screen

// Search button
