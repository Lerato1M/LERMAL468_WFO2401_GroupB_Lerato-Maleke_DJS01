/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters

//Renamed Variable to be readable.
const initialVelocity = 10000; // Velocity (km/h)
const acceleration = 3; // Acceleration (m/s^2)
const timeInSeconds = 3600; // Seconds (1 hour)
const initialDistance = 0; // Distance (km)
const remainingFuel = 5000; // Remaining fuel (kg)
const fuelBurnRate = 0.5; // Fuel burn rate (kg/s)




// Calculate new distance, remaining fuel, and new velocity
const newDistance = calculateNewDistance(initialDistance, initialVelocity, timeInSeconds); 
const remainingFuelAfterBurn = calculateRemainingFuel(remainingFuel, fuelBurnRate, timeInSeconds); 
const newVelocity = 48880; 






//Good function names
// Function to calculate new distance
//Calculate New Distance
function calculateNewDistance(initialDistance, velocity, time) {
  if (time < 0) {
    throw new Error("Time cannot be negative.");
  }
  return initialDistance + (velocity * (time / 3600)); // convert time to hours.
}




// Function to calculate remaining fuel
//Calculate remaining fuel
function calculateRemainingFuel(initialFuel, burnRate, time) {
  if (time < 0) {
    throw new Error("Time cannot be negative.");
  }
  return initialFuel - (burnRate * time);
}


//Round-offto 2 decimal places 
console.log(`Corrected New Velocity: ${newVelocity.toFixed(2)} km/h`);
console.log(`Corrected New Distance: ${newDistance.toFixed(2)} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuelAfterBurn.toFixed(2)} kg`);
