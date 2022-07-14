console.log("Weather App");

// var lat =
// var lon =
var latitude = document.getElementById("latitude");
var longitude = document.getElementById("longitude");
var createEle = document.createElement("h3");
var showResults = document.getElementById("showResults");
var buttonSave = document.getElementById("buttonSave");
var apiData = "";
var savedData = [];
var leftDiv = document.getElementById("left");
var rightDiv = document.getElementById("right");
// fetch( "http://api.openweathermap.org/geo/1.0/direct?q=fairfax,{state code},{country code}&limit={limit}&appid={API key}"
// )

class Weather {
  constructor(location, windSpeed) {
    this.location = location;
    this.windSpeed = windSpeed;
  }
}
form.addEventListener("submit", function (e) {
  e.preventDefault();

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude.value}&lon=${longitude.value}&appid=59cc63d45ae4752acbc1749c59637a5a`
  )
    // fetch( `https://api.openweathermap.org/data/2.5/weather?lat=37.926868&lon= 78.024902&appid=59cc63d45ae4752acbc1749c59637a5a` )

    .then((response) => {
      //Successful Response
      return response.json();
    })
    .then((response) => {
      apiData = response;
      showResults.appendChild(
        createEle
      ).textContent = `Location Name is ${apiData.name} and Wind Speed is ${apiData.wind.speed}`;
    })
    .catch((error) => {
      console.log(error);
    });
});

buttonSave.addEventListener("click", function () {
  var weather = new Weather(apiData.name, apiData.wind);
  savedData.push(weather);

  while (leftDiv.firstChild) {
    leftDiv.removeChild(leftDiv.firstChild);
  }

  for (let i = 0; i < savedData.length; i++) {
      
    var createEleH = document.createElement("h4");
    var createEleButton = document.createElement("button");
    createEleH.className = "list";
    createEleButton.className = "buttonList";
    var listSelect = document.getElementsByClassName("list");

    //left div contents //
    leftDiv.appendChild(createEleH).textContent = savedData[i].location;
    listSelect[i].appendChild(createEleButton).textContent = "delete";

    var listOrder = document.getElementsByClassName("list")[i];
    listOrder.addEventListener("click", function () {
      rightDiv.textContent = `Location is ${savedData[i].location} and Current wind speed is ${savedData[i].windSpeed.speed}`;

      let deleteButton = document.getElementsByClassName("buttonList")[i];
      deleteButton.addEventListener("click", function () {
        savedData.splice(i, 1);
        leftDiv.removeChild(listSelect[i])
        console.log(savedData);
      });
    });
  }
});
