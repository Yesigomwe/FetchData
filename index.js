//Accessing DOM elements
let nameElement = document.querySelector('#name');
let imageElement = document.querySelector("#prof-image");
let genderElement = document.querySelector("#gender");
let ageElement = document.querySelector('#age')
let cityElement = document.querySelector('#city')
let countryElement = document.querySelector('#country')


//Update the DOM with data from the API
function updateDOM(userProfile){
    nameElement.innerText = `Name: ${userProfile.name.first}`;
    imageElement.setAttribute("src",userProfile.picture.large);
    ageElement.innerText = `Age: ${userProfile.dob.age}`;
    cityElement.innerText = `Location: ${userProfile.location.city},`
    countryElement.innerText = `${userProfile.location.country}`
    genderElement.innerText = `Gender: ${userProfile.gender}`;

}



//Fetch data with fetch api
fetch("https://randomuser.me/api/")
  .then((response) => {
    return response.json(); //This converts the response to a json that we can use.
  })
  .then((data) => {
    console.log(data);
    updateDOM(data.results[0])
  }) // This makes it available to used to used

  .catch((error) => {
    console.log(error);
  });

