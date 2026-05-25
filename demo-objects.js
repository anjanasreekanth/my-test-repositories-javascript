/** EXERCISE 1: COCKPIT CONFIGURATION **/

const communicationSpecs = {
    frequencyGhz: 8.4,
    "encryption-protocol": "AES-256",
    signalStrength: "GOOD"
};

//Update the 'frequencyGhz' to 9.1 using dot notation.

communicationSpecs.frequencyGhz = 9.1;

//Update the 'encryption-protocol' to "RSA-4096" using bracket notation.

communicationSpecs["encryption-protocol"] = "RSA-4096";

// Logging a full statement confirming the update using both bracket notation and dot notation.

console.log(`Updated frequncyGhz: ${communicationSpecs.frequencyGhz} and Updated encryption-protocol: ${communicationSpecs["encryption-protocol"]}`);


//Excercise 2: Populating Enemy Data

const scanningDrone = {};

/*
    TODO: The drone scanned an unidentified object. Add three keys to the 
    empty 'scanningDrone' object dynamically:
    - classification (Set to "Frigate")
    - weaponCount (Set to 12)
    - "shield-active" (Set to false)
    
    Then, log a full statement using some of the properties of the object.
*/

scanningDrone.classification = "Frigate";
scanningDrone.weaponCount = 12;
scanningDrone["sheild-active"] = false;

console.log(`Target identified as a ${scanningDrone.classification} with ${scanningDrone.weaponCount} weapons.`);