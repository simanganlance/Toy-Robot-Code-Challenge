const config = {
    development: {
        // Input file path for development environment
        inputFilePath: './test/RegressionTest.txt',
        // Show additional Logs that is not part of the output in development
        showAdditionalLogs: true,
    },
    production: {
        // Input file path for production environment
        inputFilePath: './test/GoingAroundTest.txt',
        // Show additional Logs that is not part of the output in production
        showAdditionalLogs: false,
    },
    test: {
        // Input file path for testing environment
        inputFilePath: './test/RequirementExample.txt',
        // Show additional Logs that is not part of the output in testing
        showAdditionalLogs: false,
    }
};

// Determine which configuration to use based on the NODE_ENV environment variable
const environment = process.env.NODE_ENV || 'production';
module.exports = config[environment];