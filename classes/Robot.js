const Orientations = require('../constants/Orientations');
const { log, logError } = require('../logging/LogHandlers');

class Robot {
    constructor(xCoordinate, yCoordinate, orientation) {
        this.xCoordinate = xCoordinate;
        this.yCoordinate = yCoordinate;
        this.orientation = orientation;
    }

    move() {
        let newX = this.xCoordinate;
        let newY = this.yCoordinate;

        // Update the coordinates based on the orientation
        switch (this.orientation) {
            case 'NORTH':
                newY += 1;
                break;
            case 'EAST':
                newX += 1;
                break;
            case 'SOUTH':
                newY -= 1;
                break;
            case 'WEST':
                newX -= 1;
                break;
            default:
                throw new Error(`${orientation} Invalid orientation!`);
        }

        // Check if the new coordinates are within the valid range (0 to 4)
        if (this.determineOutOfBounds(newX) && this.determineOutOfBounds(newY)) {
            this.xCoordinate = newX;
            this.yCoordinate = newY;
        } else {
            log("Out of bounds!");
        }
    }

    determineOutOfBounds(coordinate) {
        return coordinate >= 0 && coordinate <= 4;
    }

    changeOrientation(direction) {
        const currentIndex = Orientations.indexOf(this.orientation);
        let newIndex;

        if (direction.toUpperCase() === 'RIGHT') {
            newIndex = this.rotateToRight(currentIndex);
        } else if (direction.toUpperCase() === 'LEFT') {
            newIndex = this.rotateToLeft(currentIndex);
        } else {
            throw new Error(`${direction} is an invalid direction!`);
        }

        this.orientation = Orientations[newIndex];
    }

    rotateToRight(currentIndex){
        // if it exceeds back to NORTH
        let targetIndex = currentIndex + 1;
        if (targetIndex >= Orientations.length) {
            targetIndex = 0;
        }
        return targetIndex;
    }


    rotateToLeft(currentIndex){
        // if it exceeds back to WEST
        let targetIndex = currentIndex - 1;
        if (targetIndex < 0) {
            targetIndex = Orientations.length - 1;
        }
        return targetIndex;
    }

    report() {
        log(`Output: ${this.xCoordinate},${this.yCoordinate},${this.orientation}`, true);
    }

}

module.exports = Robot;