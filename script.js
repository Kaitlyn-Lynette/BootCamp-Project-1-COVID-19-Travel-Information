$("#search").on("click", function (event) {
  event.preventDefault();
  //This is pulling the value of the country from the search bar
  var country = $("#location-search").val();
  console.log(country);
  //This is an object where the keys are should come from a drop down and the values are the isoCodes
  var iSOCodes = { USA: "us", Germany: "de" };
  const keys = Object.keys(iSOCodes);
  console.log(keys);
  console.log(iSOCodes[keys[0]]);

  //We will query this API for stats on COVID
  var queryURL = "https://api.covid19api.com/summary";
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (responsecovid) {
    console.log(responsecovid);
    var totalConfirmed = responsecovid.Global.TotalConfirmed;
    console.log(totalConfirmed);
    var totalDeaths = responsecovid.Global.TotalDeaths;
    console.log(totalDeaths);
    var totalRecovered = responsecovid.Global.TotalRecovered;
    console.log(totalRecovered);
    // We will query this API for top headlines
    var queryURL =
      "https://newsapi.org/v2/top-headlines?country=" +
      country +
      "&apiKey=d7814b6763714644a52a112b30add51b";
    console.log(queryURL);
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (responsenews) {
      console.log(responsenews);
    });
  });
});

// Clear Button

$("#clear").on("click", function (event) {});
