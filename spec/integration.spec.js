const { exec } = require('child_process');

describe('Integration Tests', () => {
    it('should run the application with NODE_ENV=test', (done) => {
        const command = 'cd .. && NODE_ENV=test node app.js'; 
        const app = exec(command, { env: process.env }, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error executing command: ${error}`);
                return done(error);
            }

            // Split the stdout into individual lines
            const lines = stdout.trim().split('\n');

            // Define expected outputs
            const expectedOutputs = [
                'a)----------------',
                'PLACE 0,0,NORTH',
                'MOVE',
                'REPORT',
                'Output: 0,1,NORTH',
                'b)----------------',
                'PLACE 0,0,NORTH',
                'LEFT',
                'REPORT',
                'Output: 0,0,WEST',
                'c)----------------',
                'PLACE 1,2,EAST',
                'MOVE',
                'MOVE',
                'LEFT',
                'MOVE',
                'REPORT',
                'Output: 3,3,NORTH',
            ];
            
            // Assert each line of output against the corresponding expected output
            lines.forEach((line, index) => {
                const expectedOutput = expectedOutputs[index];
                expect(line.trim()).toEqual(expectedOutput);
            });

            done();
        });
    });

});