const { initializeRobot, controlRobot } = require('../modules/RobotManager');
const Robot = require('../classes/Robot');
const { log } = require('../logging/LogHandlers');

describe('Robot Manager', () => {
    describe('initializeRobot', () => {
        it('should create a new Robot instance with given parameters', () => {
            const parameters = [0, 0, 'NORTH'];

            const robotInstance = initializeRobot(parameters);

            expect(robotInstance).toBeInstanceOf(Robot);
            expect(robotInstance.xCoordinate).toEqual(0);
            expect(robotInstance.yCoordinate).toEqual(0);
            expect(robotInstance.orientation).toEqual('NORTH');
        });
    });

    describe('controlRobot', () => {
        it('should execute the MOVE action when facing NORTH', () => {
            const robotInstance = new Robot(2, 2, 'NORTH');

            controlRobot('MOVE', robotInstance);
            expect(robotInstance).toBeInstanceOf(Robot);
            expect(robotInstance.xCoordinate).toEqual(2);
            expect(robotInstance.yCoordinate).toEqual(3);
            expect(robotInstance.orientation).toEqual('NORTH');

        });

        it('should execute the MOVE action when facing EAST', () => {
            const robotInstance = new Robot(2, 2, 'EAST');

            controlRobot('MOVE', robotInstance);
            expect(robotInstance).toBeInstanceOf(Robot);
            expect(robotInstance.xCoordinate).toEqual(3);
            expect(robotInstance.yCoordinate).toEqual(2);
            expect(robotInstance.orientation).toEqual('EAST');

        });

        it('should execute the MOVE action when facing SOUTH', () => {
            const robotInstance = new Robot(2, 2, 'SOUTH');

            controlRobot('MOVE', robotInstance);
            expect(robotInstance).toBeInstanceOf(Robot);
            expect(robotInstance.xCoordinate).toEqual(2);
            expect(robotInstance.yCoordinate).toEqual(1);
            expect(robotInstance.orientation).toEqual('SOUTH');

        });

        it('should execute the MOVE action when facing WEST', () => {
            const robotInstance = new Robot(2, 2, 'WEST');

            controlRobot('MOVE', robotInstance);
            expect(robotInstance).toBeInstanceOf(Robot);
            expect(robotInstance.xCoordinate).toEqual(1);
            expect(robotInstance.yCoordinate).toEqual(2);
            expect(robotInstance.orientation).toEqual('WEST');

        });

        it('should ignore the MOVE action when out of bound', () => {
            const robotInstance = new Robot(4, 4, 'EAST');

            controlRobot('MOVE', robotInstance);
            expect(robotInstance).toBeInstanceOf(Robot);
            expect(robotInstance.xCoordinate).toEqual(4);
            expect(robotInstance.yCoordinate).toEqual(4);
            expect(robotInstance.orientation).toEqual('EAST');

        });


        it('should turn RIGHT from NORTH to EAST', () => {
            const robotInstance = new Robot(2, 2, 'NORTH');

            controlRobot('RIGHT', robotInstance);
            expect(robotInstance).toBeInstanceOf(Robot);
            expect(robotInstance.xCoordinate).toEqual(2);
            expect(robotInstance.yCoordinate).toEqual(2);
            expect(robotInstance.orientation).toEqual('EAST');

        });

        it('should turn RIGHT from EAST to SOUTH', () => {
            const robotInstance = new Robot(2, 2, 'EAST');

            controlRobot('RIGHT', robotInstance);
            expect(robotInstance).toBeInstanceOf(Robot);
            expect(robotInstance.xCoordinate).toEqual(2);
            expect(robotInstance.yCoordinate).toEqual(2);
            expect(robotInstance.orientation).toEqual('SOUTH');

        });

        it('should turn RIGHT from SOUTH to WEST', () => {
            const robotInstance = new Robot(2, 2, 'SOUTH');

            controlRobot('RIGHT', robotInstance);
            expect(robotInstance).toBeInstanceOf(Robot);
            expect(robotInstance.xCoordinate).toEqual(2);
            expect(robotInstance.yCoordinate).toEqual(2);
            expect(robotInstance.orientation).toEqual('WEST');

        });

        it('should turn RIGHT from WEST to NORTH', () => {
            const robotInstance = new Robot(2, 2, 'WEST');

            controlRobot('RIGHT', robotInstance);
            expect(robotInstance).toBeInstanceOf(Robot);
            expect(robotInstance.xCoordinate).toEqual(2);
            expect(robotInstance.yCoordinate).toEqual(2);
            expect(robotInstance.orientation).toEqual('NORTH');

        });

        it('should turn LEFT from WEST to SOUTH', () => {
            const robotInstance = new Robot(2, 2, 'WEST');

            controlRobot('LEFT', robotInstance);
            expect(robotInstance).toBeInstanceOf(Robot);
            expect(robotInstance.xCoordinate).toEqual(2);
            expect(robotInstance.yCoordinate).toEqual(2);
            expect(robotInstance.orientation).toEqual('SOUTH');

        });


        it('should turn LEFT from SOUTH to EAST', () => {
            const robotInstance = new Robot(2, 2, 'SOUTH');

            controlRobot('LEFT', robotInstance);
            expect(robotInstance).toBeInstanceOf(Robot);
            expect(robotInstance.xCoordinate).toEqual(2);
            expect(robotInstance.yCoordinate).toEqual(2);
            expect(robotInstance.orientation).toEqual('EAST');

        });


        it('should turn LEFT from EAST to NORTH', () => {
            const robotInstance = new Robot(2, 2, 'EAST');

            controlRobot('LEFT', robotInstance);
            expect(robotInstance).toBeInstanceOf(Robot);
            expect(robotInstance.xCoordinate).toEqual(2);
            expect(robotInstance.yCoordinate).toEqual(2);
            expect(robotInstance.orientation).toEqual('NORTH');

        });


        it('should turn LEFT from NORTH to WEST', () => {
            const robotInstance = new Robot(2, 2, 'NORTH');

            controlRobot('LEFT', robotInstance);
            expect(robotInstance).toBeInstanceOf(Robot);
            expect(robotInstance.xCoordinate).toEqual(2);
            expect(robotInstance.yCoordinate).toEqual(2);
            expect(robotInstance.orientation).toEqual('WEST');

        });

    });
});
