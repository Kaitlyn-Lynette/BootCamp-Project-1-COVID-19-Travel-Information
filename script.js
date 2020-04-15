// QueryURL for covid-19 Data
var queryURL = "https://api.covid19api.com/summary";
$.ajax({
  url: queryURL,
  method: "GET",
}).then(function (responsecovid) {
  console.log(responsecovid);

<<<<<<< HEAD
  //   var NYTapiKey = "L4hQpiyOGEibjPv6zTL3iHLGCrbGgIER"
=======
  // QueryURL for NYTimes World News Data
>>>>>>> master
  var queryURL =
    "https://api.nytimes.com/svc/search/v2/articlesearch.json?&fq=news_desk:("Foreign")&api-key=L4hQpiyOGEibjPv6zTL3iHLGCrbGgIER";
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (responsenyt) {
    console.log(responsenyt);
<<<<<<< HEAD
    console.log(responsenyt.title);
  });
});
// Starting Data
=======

    // Starting Data
    var totalConfirmed = responsecovid.Global.TotalConfirmed;
    var totalDeaths = responsecovid.Global.TotalDeaths;
    var totalRecovered = responsecovid.Global.TotalRecovered;
>>>>>>> master

    // Storing data from QueryURL

    // Displaying infomration on screen
  });
});

// Search button
$("#search").on("click", function (event) {});

// Clear Button

$("#clear").on("click", function (event) {});
