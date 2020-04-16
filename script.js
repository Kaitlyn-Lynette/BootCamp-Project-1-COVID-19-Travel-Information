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

    var arr = responsecovid.Countries;
    for (var i = 0; i < arr.length; i++) {
      // Getting Countries from Array
      arr[i];
      console.log(arr[i]);
    }

    // Starting Data
    // Countries needs to make sure its based off of user input
    // Storing Active Cases Data
    var activeCases = responsecovid.Countries[0].TotalConfirmed;
    // Displaying the Active Cases
    $("#active").text("Total Active Cases :" + activeCases);

    // Storing Total Deaths Data
    var totalDeaths = responsecovid.Countries[0].TotalDeaths;
    // Displaying Total Deaths
    $("#deaths").text("Total Deaths :" + totalDeaths);

    //Storing Total Recovered Data
    var totalRecovered = responsecovid.Countries[0].TotalRecovered;
    // Displaying Recovered Data
    $("#recovered").text("Total Recovered :" + totalRecovered);
  });
});

// Search button
$("#search").on("click", function (event) {
  event.preventDefault();
});

// Reset Button
$("#reset").on("click", function (event) {});
