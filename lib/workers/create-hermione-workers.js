'use strict';

const os = require('os');

module.exports = (workersRegistry) => {
    const workerFilepath = require.resolve('./hermione-worker');

    const params = {
        maxConcurrentWorkers: os.cpus().length,
        autoStart: false,
        maxRetries: 0
    };

    return workersRegistry.register(params, workerFilepath, ['saveDiffTo']);
};
