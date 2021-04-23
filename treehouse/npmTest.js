var unsecurePlainTextPassword = "password";
var bcrypt = require('bcryptjs');
var color = require('colors')

bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(unsecurePlainTextPassword, salt, function (err, hash) {
        console.log(hash.red);
    });
});