// Question 2
// Make a call to the Rawg API.

// Go to https://rawg.io/apidocs and get an API key which you’ll use as part of the endpoint you’re making an API call to. You can use https://noroff.no for the URL and Noroff Assignment for the description.

// You'll be given an API Key you can add as a "key" parameter in your fetch request.

// Make a call to the following API endpoint replacing INSERTAPIKEYHERE with the key given to you from the Rawg API.
// https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=INSERTAPIKEYHERE

// Loop through the results and display the following properties in HTML, but only for the first eight results:
// name
// rating
// number of tags (not the tag details, just the amount of tags)
// The styling for this assignment is not important but loading indicator should be displayed while the API call is in progress.

// Be sure to handle any potential errors in the code.

// You can use either regular promise or async/await syntax to make the call.

// const apiKey = "f546b12ec4374c3fb158ba87ca3645e1";

const resultsContainer = document.querySelector(".container");

const API_URL =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=f546b12ec4374c3fb158ba87ca3645e1";

async function createList() {
  const response = await fetch(API_URL);
  const data = await response.json();
  console.log(data);
  const results = data.results;
  console.log(results);
  //   const name = results[].name;
  //   console.log(name[0]);
  //   const rating = results[i].ratings.title;
  //   const tags = results[i].tags.length;

  //   console.log(rating);
  //   console.log(results);
  //   resultsContainer.innerHTML = "";

  for (let i = 0; i < results.length; i++) {
    console.log(results[i].name);

    if (i === 10) {
      break;
    }

    resultsContainer.innerHTML += `<div class="result">${results[i].name}</div>`;
  }
}
createList();

//  const url = "https://cat-fact.herokuapp.com/factss";

//  const resultsContainer = document.querySelector(".results");

//  async function getCats() {
//    try {
//      const response = await fetch(url);
//      const data = await response.json();
//      console.log(data);

//      const facts = data.all;

//      resultsContainer.innerHTML = "";

//      for (let i = 0; i < facts.length; i++) {
//        console.log(facts[i].text);

//        if (i === 10) {
//          break;
//        }

//        resultsContainer.innerHTML += `<div class="result">${facts[i].text}</div>`;
//      }
//    } catch (error) {
//      console.log("An error occurred");
//      resultsContainer.innerHTML = displayError(
//        "An error occurred when calling the API"
//      );
//    }
//  }

//  getCats();
