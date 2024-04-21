const fs = require('fs');
const path = require('path');
const readline = require('readline');
const config = require('../config/Config');
const { log, logError } = require('../logging/LogHandlers');
const consoleInputMessage = "File input is unavailable. Enter your commands in the console terminal.";

function identifyInputStream() {
    let inputFilePath = '';

    try {
        // get input configuration
        inputFilePath = config.inputFilePath;

        if (inputFilePath && fs.existsSync(inputFilePath)) {
            return checkExistingInputFile(inputFilePath);
        } else {
            // Return stdin stream if no input file path is provided and if it doesn't exist
            log(consoleInputMessage, true);
            return process.stdin; 
        }
    } catch (configErr) {
        // Return stdin stream if config file reading fails
        logError(`Error reading config file: ${configErr}`, 'IdentifyInput');
        log(consoleInputMessage, true);
        return process.stdin; 
    }
}

function checkExistingInputFile(inputFilePath) {
    try {
        const stats = fs.statSync(inputFilePath);

        if(stats.size == 0) {
            // Return stdin stream if file is empty
            log(consoleInputMessage, true);
            return process.stdin; 
        }

        // Once validated create read stream
        return createFileInputStream(inputFilePath);
    } catch (fileErr) {
        // Return stdin stream if file reading fails
        logError(`Error reading input file: ${fileErr}`, 'IdentifyInput');
        log(consoleInputMessage, true);
        return process.stdin; 
    }
}

function createFileInputStream(inputFilePath) {
    const fileStream = fs.createReadStream(inputFilePath, 'utf-8');
    return fileStream;
}

module.exports = { identifyInputStream };