// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    const missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = `
    <h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src="${imageUrl}">
    `;
 }
 
 function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    }
    else if (isNaN(testInput)) {
        return "Not a Number";
    }
    else {
        return "Is a Number";
    }
    
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    //const div = document.getElementbyID("faultyItems");
    const pilotStatus = document.getElementById("pilotStatus");
    const copilotStatus = document.getElementById("copilotStatus");
    const launchStatus = document.getElementById("launchStatus");
    const fuelStatus = document.getElementById("fuelStatus");
    const cargoStatus = document.getElementById("cargoStatus");

    console.log(validateInput(pilot));
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" ||validateInput(cargoLevel) === "Empty") {
        document.alert("all fields are required.");
        
    }
    else {
        if (validateInput(pilot) === "Not a Number") {
            pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        }
        if (validateInput(copilot) === "Not a Number") {
            copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        }   
        if (validateInput(fuelLevel) === "Is a Number" && fuelLevel < 10000) {
            list.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "red";
            fuelStatus.innerHTML = "Fuel level too low for launch";
        }
        else if (validateInput(fuelLevel) === "Is a Number") {
            fuelStatus.innerHTML = "Fuel level high enough for launch";
        }
        }
        if (validateInput(cargoLevel) === "Is a Number" && cargoLevel > 10000) {
            list.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "red";
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        }
        else if(validateInput(cargoLevel) === "Is a Number") {
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
        }
        if (fuelLevel >= 10000 && cargoLevel <= 10000 && validateInput(cargoLevel) === "Is a Number" && validateInput(fuelLevel) === "Is a Number") {
            launchStatus.innerHTML = "Shuttle is Ready for Launch";
            launchStatus.style.color = "green";
        }
    }

    
 
 
  async function myFetch() {
    let planetsReturned;
 
    let item = await fetch("https://handlers.education.launchcode.org/static/planets.json");
    planetsReturned = item.json();
    return planetsReturned;

    
 }
 
 function pickPlanet(planets) {
    let idx = Math.floor(Math.random() * planets.length);
    return planets[idx];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;