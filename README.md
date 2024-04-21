# Toy Robot Coding Challenge

## Description

The Toy Robot coding challenge is a simulation of a toy robot moving on a square tabletop of dimensions 5 units x 5 units. The robot can roam around the surface of the table but must be prevented from falling to destruction. Any movement that would result in the robot falling from the table must be prevented, although further valid movement commands must still be allowed.

## Environment Configuration

Under the `config` folder, `Config.js` is used to configure different environments:

- **development**: Used for development with additional logs enabled, which are not part of the expected output.
- **test**: Used by integration script to run specific test data.
- **production**: Default environment; can be edited to specify a specific file input. It doesn’t show additional logs.

Example configuration:

```javascript
production: {
    // Input file path for the production environment
    inputFilePath: '{{Add your input file here}}',
    // Show additional logs that are not part of the output in production
    showAdditionalLogs: false,
}
```

## Running the Application

To run the application, use the following command:

```
node app.js
```

To run with a specific environment, use:

```
NODE_ENV={{environment name}} node app.js
```

If an input file is not provided or cannot be read, the application will proceed to use console input, where you can enter your commands.

## Unit and Integration Test

Jasmine unit and integration tests were created and can be found under the `specs` folder:

- `integration.spec.js`: Integration tests.
- `processInput.spec.js`: Unit tests for the process input module.
- `robotmanager.spec.js`: Unit tests for the robot manager module.
- `validateInput.spec.js`: Unit tests for the validate input module.

To run the tests, use the following command:

```
jasmine {{test script}}
```

If you don’t have the Jasmine module in your node environment, run the following command:

```
npm install -g jasmine
```

You can also choose different test data found under the `test` folder.