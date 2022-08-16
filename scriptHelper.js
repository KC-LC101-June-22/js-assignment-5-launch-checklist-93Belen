// Write your helper functions here!
//require('isomorphic-fetch');

export function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
     document.getElementById('missionTarget').innerHTML = `
    <h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src="${imageUrl}">`
}

function validateInput(testInput) {
   if(!testInput){
    console.log(testInput + ' is empty')
       return 'Empty'
   }
   else if(isNaN(testInput)){
    console.log(testInput + ' is not a number')
       return 'Not a Number'
   }
   else {
    console.log(testInput + ' is a number')
       return 'Is a Number'
   }
}

export function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    // Do this only if all form fields are correct
     if(validateInput(pilot) === 'Not a Number' && validateInput(copilot) === 'Not a Number' && validateInput(fuelLevel) === 'Is a Number' && validateInput(cargoLevel) === 'Is a Number'){
        // Makel ist visible
        document.getElementById('faultyItems').style.visibility = 'visible';
        // If anything is wrong:
        if(fuelLevel < 10000 || cargoLevel > 10000){
            document.getElementById('launchStatus').innerHTML = 'Shuttle not ready for launch';
            document.getElementById('launchStatus').style.color = 'red';
        }
        // Display what is wron: (fuellevel)
        if(fuelLevel < 10000){
            document.getElementById('fuelStatus').innerHTML = 'Not enough fuel for the journy';
        }
        // Display what is wron: (cargoLevel)
        if(cargoLevel > 10000){
            document.getElementById('cargoStatus').innerHTML = 'Cargo mass too high for launch';
        }
         // If everything is fine
        if(fuelLevel > 10000 && cargoLevel < 10000) {
            document.getElementById('launchStatus').innerHTML = 'Shuttle is ready for launch';
            document.getElementById('fuelStatus').innerHTML = 'Fuel level high enough for launch';
            document.getElementById('cargoStatus').innerHTML = 'Cargo mass low enough for launch'
            document.getElementById('launchStatus').style.color = 'green';
        }
            // In Any case (if we have names they are ready)
        document.getElementById('pilotStatus').innerHTML = `<p>Pilot ${pilot} is ready for launch</p>`;
        document.getElementById('copilotStatus').innerHTML = `<p>Co-pilot ${copilot} is ready for launch</p>`;
}
    // Do this if a form field is empty or has the wrong data type
    else {
        window.alert('Please, fill all the fields in the form with the right value')
    }
    
}

export async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
        return response.json();
        });

    return planetsReturned;
}

export function pickPlanet(planets) {
    let i = Math.floor(Math.random() * planets.length);
    return planets[i];
}

// module.exports.addDestinationInfo = addDestinationInfo;
// module.exports.validateInput = validateInput;
// module.exports.formSubmission = formSubmission;
// module.exports.pickPlanet = pickPlanet; 
// module.exports.myFetch = myFetch;
