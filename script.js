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

  //Append the items
});

// Clear Button

$("#clear").on("click", function (event) {});
