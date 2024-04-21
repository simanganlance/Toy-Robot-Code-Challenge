const config = require('../config/Config');
const showAdditonalLogs = config.showAdditionalLogs || false;

function log(message, isOutput = false) {
    if(isOutput) {
        console.log(`${message}`);
    }else if(showAdditonalLogs){
        console.log(`[INFO] ${message}`);
    }
        
}

// Define error handler
function logError(message, moduleName) {
    if(showAdditonalLogs) {
        console.error(`[ERROR] [${moduleName}] ${message}`);
    }
        
}

module.exports = { log, logError };