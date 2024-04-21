const { identifyInputStream } = require('./modules/IdentifyInput');
const { processInputStream } = require('./modules/ProcessInput');
const { log, logError } = require('./logging/LogHandlers');
try{
    // Get the input stream
    const inputStream = identifyInputStream();

    // Listen for inputStream events
    inputStream.on('data', processInputStream);

    // Handle stream errors
    inputStream.on('error', (err) => {
        logError(`Error reading input: ${err}`, 'Main');
    });

} catch (mainError) {
    logError(`Error setting up input stream: ${mainError}` , 'Main');
}

