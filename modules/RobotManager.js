const Robot = require('../classes/Robot');
const { log } = require('../logging/LogHandlers');

function initializeRobot(parameters) {
    const [xCoordinate, yCoordinate, orientation] = parameters;
    return new Robot(xCoordinate, yCoordinate, orientation);
}

function controlRobot(command, robotInstance) {
    switch (command) {
        case 'MOVE':
            robotInstance.move(command);
            break;
        case 'RIGHT':
        case 'LEFT':
            robotInstance.changeOrientation(command);
            break;
        case 'REPORT':
            robotInstance.report();
            break;
        default:
            log('Invalid command!');
    }
}

module.exports = { initializeRobot, controlRobot };