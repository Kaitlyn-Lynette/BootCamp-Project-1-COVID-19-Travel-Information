$("#search").on("click", function (event) {
  event.preventDefault();
  console.log("ISO Code Print!", $(".countryISO").val());
  //This is pulling the value from the options
  var country = $(".countryISO").val();
  console.log(country);

  //We will query this API for stats on COVID
  var queryURL = "https://api.covid19api.com/summary";
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
      console.log(responsenews.articles.title);
      console.log(responsenews.articles[0].urlToImage);
      var imageURL = responsenews.articles[0].urlToImage;
      console.log(imageURL);
      $(".image").html("<img src=" + imageURL + ">");

      responsenews.articles.forEach(function (article) {
        console.log(article.title);
        if (article.title) {
          // do something
        }
      });
      // for (var i = 0; i < responsenews.articles.length; i++) {
      //   console.log(responsenews.articles[i].title);
      //   if(responsenews.articles[i].title) {

      //   }
      // }
      $("#headline1").text(responsenews.articles[0].title);
    });
  });

// Search button
$("#search").on("click", function (event) {
  event.preventDefault();
});

// Reset Button
$("#reset").on("click", function (event) {});
