// Load the async module found here: https://www.npmjs.com/package/async
var async = require("async");
var hdb = require("hdb");

// sql we want to run
var sql = "SELECT 1 FROM DUMMY; SELECT 2 FROM DUMMY";

// Create client
var client = hdb.createClient({
    host: hostname,
    user: username,
    password: password,
    port: port,
    databaseName: tenant
});

// Connect to Database
client.connect(function(err) {

    // If there is an error, complain
    if (err) {
        console.log(err);
        return;
    }

    // We have succesfully connected, now lets execute the sql

    // Split sql into seperate queries
    var queries = splitStringBySemicolon(sql);

    // Run in HANA
    runQueries(queries, function(err, data) {
        console.log(err, data);
    });

});

// Run all our queries
var runQueries = function(queries, callback) {
    async.mapSeries(queries, function(query, callback) {
        client.exec(query, callback)
    })
}

// inspired by: http://stackoverflow.com/a/12920211/3110929
var splitStringBySemicolon = function(s) {

    /**
     * Reverse the string
     */
    var rev = s.split('').reverse().join('');

    /**
     * Only split on non escape semicolons.
     */
    var commands = rev.split(/;(?=[^\\])/g).reverse().map(function(s) {

        /**
         * Put string back into order and return string chunk
         */
        return s.split('').reverse().join('').trim();
    });

    for (var i = 0; i < commands.length; i++) {
        if (commands[i].replace(/ /g, '').length == 0) {
            commands.splice(i, 1);
        }
    };

    return commands;
}