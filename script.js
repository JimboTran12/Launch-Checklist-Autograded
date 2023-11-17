// Write your JavaScript code here!

//const { formSubmission } = require("./scriptHelper");

//const { formSubmission, myFetch, pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function() {
    
    let listedPlanets;


   
        const form = document.querySelector("form");
        form.addEventListener("submit", function(event) {
            const list = document.getElementById("faultyItems").value;
            const pilot = document.querySelector("input[name=pilotName]").value;
            const copilot = document.querySelector("input[name=copilotName]").value;
            const fuelLevel = document.querySelector("input[name=fuelLevel]").value;
            const cargoMass = document.querySelector("input[name=cargoMass]").value;

            event.preventDefault();
            formSubmission(document,list, pilot, copilot, fuelLevel, cargoMass);
        });

     // Set listedPlanetsResponse equal to the value returned by calling myFetch()
     let listedPlanetsResponse = myFetch();

     listedPlanetsResponse.then(function (result) {
         listedPlanets = result;
 
     }).then(function () {
         console.log(listedPlanets);
         // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
         let planet = pickPlanet(listedPlanets);
         addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);


    })
    
 });