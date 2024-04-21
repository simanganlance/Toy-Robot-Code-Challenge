
const Commands = require('../constants/Commands');
const Orientations = require('../constants/Orientations');
const { log, logError } = require('../logging/LogHandlers');

function isValidCommand(command) {
    return Commands.includes(command);
}

function isPlaceCommand(command) {

    try {
        // Check if the input starts with 'PLACE '
        if (command.startsWith('PLACE ')) {
            // Extract the substring after 'PLACE ', trim it, and split it by comma
            const parameters = command.slice(6).trim().split(',');

            // Check if there are exactly 3 parameters
            if (parameters.length !== 3) {
                log(`Incorrect PLACE parameter command length of ${parameters.length}`);
                return null;
            }

            // Deconstruct the parameters
            const [xCoordinate, yCoordinate, orientation] = parameters;

            // Check if x and y are numeric, non-decimal, not out of bounds and non-negative
            if (!/^\d+$/.test(xCoordinate) || !/^\d+$/.test(yCoordinate) || Number(xCoordinate) < 0 || Number(yCoordinate) < 0 || Number(xCoordinate) > 4 || Number(yCoordinate) > 4) {
                log(`Invalid x and y coordinates (${xCoordinate} , ${yCoordinate})`);
                return null;
            }

            // Check if f is found in the Orientations List
            if (!Orientations.includes(orientation)) {
                log(`Orientation ${orientation}  not found!`);
                return null;
            }

            // Once validated, convert string to int
            parameters[0] = Number(xCoordinate);
            parameters[1] = Number(yCoordinate);

            return parameters; 
        } 

    } catch(validateErr) {
        logError(`Error while validating input: ${validateErr}`, 'ValidateInput');
    }
    
    return null;
}

module.exports = { 
    isValidCommand,
    isPlaceCommand
};