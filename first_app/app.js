// https://nodejs.org/dist/latest-v8.x/docs/api/

const path = require('path');
const os = require('os');
const fs = require('fs');
const Logger = require('./logger');

const logger = new Logger();

// Register a listener
logger.on('sendLogger', (arg) => {
    console.log('Listener called', arg);
});
logger.log('Evento com um emitter');







// console.log(pathObj);
// console.log(`Total Memory ${totalMemory}`);
// console.log(`Memória livre: ${freeMemory}`);
// console.log(system);

// const files = fs.readdirSync('./');
//console.log(files);

// fs.readdir('./', (err, files) => {
//     console.log(files);
// });