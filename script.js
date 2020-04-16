// Search button
$("#search").on("click", function (event) {
  // Stop refreshing
  event.preventDefault();
  // Grabbing country index from html
  var selectedCountry = $("#countryList");
  var countryIndex = selectedCountry[0].selectedOptions[0].index;
  //console.log(selectedCountry);
  console.log(countryIndex);
  // storing index into variable
  num = countryIndex;
  // Function for Covid Data
  getCovidData();
});

// Initialize variable
var num = 0;

function getCovidData() {
  // QueryURL for covid-19 Data
  var queryURL = "https://api.covid19api.com/summary";
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (responsecovid) {
    console.log(responsecovid);
    //console.log(responsecovid.Countries);
    // Starting Data
    // Countries needs to make sure its based off of user input

    // Storing Active Cases Data
    var activeCases = responsecovid.Countries[num].TotalConfirmed;
    // Displaying the Active Cases
    $("#active").text("Total Active Cases :" + activeCases);
    // console.log(activeCases)

    // Storing Total Deaths Data
    var totalDeaths = responsecovid.Countries[num].TotalDeaths;
    // Displaying Total Deaths
    $("#deaths").text("Total Deaths :" + totalDeaths);
    // console.log(totalDeaths)

    //Storing Total Recovered Data
    var totalRecovered = responsecovid.Countries[num].TotalRecovered;
    // Displaying Recovered Data
    $("#recovered").text("Total Recovered :" + totalRecovered);
    // console.log(totalRecovered)

    googleNewsData();
  });
}

function googleNewsData() {
  var countryISO = $(".countryISO").val();
  var queryURL =
    "https://newsapi.org/v2/top-headlines?country=" +
    countryISO +
    "&apiKey=d7814b6763714644a52a112b30add51b";
  console.log(queryURL);
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (responsenews) {
    console.log(responsenews);
    //console.log("ISO Code Print!", $(".countryISO").val());
    // //This is pulling the value from the options
    // console.log(responsenews);
    // console.log(responsenews.articles.title);
    // console.log(responsenews.articles[0].urlToImage);
    var imageURL = responsenews.articles[0].urlToImage;
    $(".image").html("<img src=" + imageURL + ">");
    responsenews.articles.forEach(function (article) {
      if (article.title) {
        // do something
      }
    });
    // for (var i = 0; i < responsenews.articles.length; i++) {
    //   console.log(responsenews.articles[i].title);
    //   if(responsenews.articles[i].title) {
    //   }
    // }
    $(".content").text(responsenews.articles[0].title);
  });
  // });
}

// Reset Button
// $("#reset").on("click", function (event) {});
