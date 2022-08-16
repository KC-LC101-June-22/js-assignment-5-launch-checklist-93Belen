// Write your JavaScript code here!
import {addDestinationInfo, formSubmission, myFetch, pickPlanet} from './scriptHelper.js';

window.addEventListener("load", function() {
   let listedPlanets;
   let listedPlanetsResponse = myFetch()
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       //console.log(listedPlanets);
   }).then(function () {
       //console.log(listedPlanets);
       let pickedPlanet = pickPlanet(listedPlanets);

        addDestinationInfo(document, pickedPlanet.name, pickedPlanet.diameter, pickedPlanet.star, pickedPlanet.distance, pickedPlanet.moons, pickedPlanet.image);
   })
   document.getElementById('formSubmit').addEventListener('click', function(e){
    e.preventDefault();
    let pilot = document.getElementById('pilotName').value;
    let copilot = document.getElementById('copilotName').value;
    let fuelLevel = document.getElementById('fuelLevel').value;
    let cargoMass = document.getElementById('cargoMass').value;
    let list = document.getElementById('faultyItems')
    console.log(list)
    formSubmission(document, list, pilot, copilot, Number(fuelLevel), Number(cargoMass));

})  
});
