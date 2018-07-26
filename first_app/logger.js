
const EventEmitter = require('events');


class Logger extends EventEmitter {
     log(message) {
        // Send an HTTP request
        console.log(message);
    
        // Raise a event
        this.emit('sendLogger', { id: 1, url: 'http://globo.com.br' });
    }
}



function log2(message) {
    console.log(message);
    
}




module.exports = Logger; // exportando a classe, UpperCase
module.exports.log2 = log2; // exportando a funcao lowerCase

//console.log(module);