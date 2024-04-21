const { processInputStream } = require('../modules/ProcessInput');
const { Readable } = require('stream');
const { LogHandlers } = require('../logging/LogHandlers');

describe('Process Input', () => {
    describe('processInputStream', () => {
        // Before running this test ensure Config.js showAdditionalLogs is set to true
        // Mock a Readable stream
        const inputText = 'PLACE 0,0,NORTH\n';
        const readableStream = new Readable({
            read() {
                this.push(inputText);
                this.push(null); // End the stream
            }
        });


        // Test the behavior of processInputStream
        it('should process readable stream successfully', (done) => {

            // Start processing the input stream
            readableStream.on('data', (chunk) => {
                let result = processInputStream(chunk);
                expect(result.isSuccess).toEqual(true);
                done();
            });
          
        });

        it('should process text input successfully', (done) => {
            
            let result = processInputStream('PLACE 0,0,NORTH\nREPORT\n');
            expect(result.isSuccess).toEqual(true);
            done();
          
        });

        it('should handle null input', (done) => {
            
            let result = processInputStream(null);
            expect(result.isSuccess).toEqual(false);
            done();
          
        });

    });
});