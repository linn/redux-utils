module.exports = {
    testEnvironment: 'node', // <-- use Node.js environment instead of jsdom
    transform: {
        '^.+\\.jsx?$': 'babel-jest' // transpile JS with babel-jest (if needed)
    }
    // Add any other config you have, like coverage, setupFiles, etc.
};
