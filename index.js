const form = document.querySelector("form");
const search = form[0];
const button = form[1];

const lat = document.getElementById("lat");
const long = document.getElementById("lng");

let results = [];

("\n\n- - - - - - - - - - - - - - - - - -\n\nCONGRATS!\n\nYou can now use\nlocationNameToCoords(['New York City']);\n\n- - - - - - - - - - - - - - - - - -\n\n");

const simulateClick = function(elem) {
  // Create our event (with options)
  const evt = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    view: window
  });
  // If cancelled, don't dispatch our event
  const canceled = !elem.dispatchEvent(evt);
};

function getCoords(city, lat, long) {
  search.value = city;
  simulateClick(button);
  setTimeout(() => {
    (function(city, lat, long) {
      results.push({
        name: city,
        latitude: Number(lat.value),
        longitude: Number(long.value)
      });
    })(city, lat, long);
  }, 100);
}

const defaultSearches = [
  "Kansas City",
  "Boulder",
  "Chicago",
  "New York",
  "Los Angeles",
  "San Fran"
];

function locationNameToCoords(searches) {
  searches = searches || defaultSearches;

  results = [];

  for (let index = 0; index < searches.length; index++) {
    (function(index, lat, long) {
      setTimeout(() => {
        console.log(123123, searches[index]);
        getCoords(searches[index], lat, long, index);
      }, index * 1000);
    })(index, lat, long);
  }

  setTimeout(() => {
    console.log("Your Results", results);
    console.log("Stringified", JSON.stringify(results));
  }, searches.length * 1000 + 300);

  return "Scrubbing your data from latlong.net...";
}
