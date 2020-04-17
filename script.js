$("#search").on("click", function (event) {
  // Stop refreshing
  event.preventDefault();
  // Grabbing country index from html
  var selectedCountry = $("#countryList");
  var countryIndex = selectedCountry[0].selectedOptions[0].index;
  var countryCode = selectedCountry[0].selectedOptions[0].value;
  // storing index into variable
  num = countryIndex;
  // Function for Covid Data
  code = countryCode;
  getCovidData();
});

// Initial  // Initialize variable
var num = 0;
var code = "";
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
  // var countryISO = $(".countryISO").val();
  var queryURL =
    "https://newsapi.org/v2/top-headlines?country=" +
    code +
    "&category=health&apiKey=d7814b6763714644a52a112b30add51b";
  console.log(queryURL);
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (responseNews) {
    var resonseAPI = responseNews.articles;
    console.log(resonseAPI);
    var mainContainerDIV = $("div");
    for (var i = 0; i < resonseAPI.length; i++) {
      var newArray = resonseAPI[i];
      var imageSource = newArray.urlToImage;
      var author = newArray.author;
      var URL = newArray.url;
      var title = newArray.title;
      $("#article-titles").prepend(
        '<div class="card"><div class="card-content"> <div class="card-image"> <figure class="image is-3by2"> <img src="' +
          imageSource +
          '" alt="Placeholder image"> </figure> </div> <div class="media"> <div class="media-content"> <p class="subtitle is-6">' +
          author +
          '</p> </div> </div> <div class="content">' +
          "<a href=" +
          URL +
          ">" +
          title +
          "</a> </div>"
      );
    }
  });
}

// Reset Button
$("#reset").on("click", function (event) {
  location.reload();
});
