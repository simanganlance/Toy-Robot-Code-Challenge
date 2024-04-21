const { isValidCommand, isPlaceCommand } = require('./ValidateInput');
const { log, logError } = require('../logging/LogHandlers');
const { initializeRobot, controlRobot } = require('./RobotManager');

// robot instance is null unless initial PLACE command is added.
let robotInstance = null;
let isSuccess = false;

function processInputStream(input) {
    let entry = '';

    try {
        // Convert input to string if it's not already
        if (typeof input !== 'string') {
            // Input using console
            entry = input.toString();
            processPerEntry(entry);
        } else {
            // Input using file
            entry = input;

            // fileStream returns the whole content at once
            // Split it per line
            const lines = entry.trim().split('\n');

            // Iterate per line
            lines.forEach(line => {
                log(line, true);
                processPerEntry(line);
            });
        }
        isSuccess = true;
    } catch(processErr) {
        isSuccess = false;
        logError(`Error while processing input: ${processErr}`, 'ProcessInput');
    }

    return { isSuccess };
}

function processPerEntry(entry) {
    // Trim whitespaces and convert it to uppercase
    entry = entry.trim().toUpperCase();

    // Check if valid command and if robot is initiated
    if(isValidCommand(entry) && robotInstance != null){
        controlRobot(entry, robotInstance);
    }
    else {
        // Verify if Place Command
        const placeCommandParameters = isPlaceCommand(entry);
        checkPlaceParameters(placeCommandParameters);
    }
}

function checkPlaceParameters(placeCommandParameters){
    // The command is a valid "PLACE" command
    if (placeCommandParameters !== null) {
        // Create new Robot instance
        log('Robot was Placed!');
        robotInstance = initializeRobot(placeCommandParameters);
    } else {
        log('Input ignored!');
    }

}


module.exports = { processInputStream };