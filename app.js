var express = require('express');
var socket = require('socket.io');
var Passport = require( 'passport' );
var LocalStrategy = require( 'passport-local' ).Strategy;
var BodyParser = require( 'body-parser' );

var users = {
  Mio: {
    username: 'Mio',
    password: '1234',
    id: 1,
  }
}

var localStrategy = new LocalStrategy({
      usernameField: 'username',
      passwordField: 'password',
    },
    function(username, password, done) {
      user = users[ username ];

      if ( user == null ) {
        return done( null, false, { message: 'Invalid user' } );
      };

      if ( user.password !== password ) {
        return done( null, false, { message: 'Invalid password' } );
      };

      done( null, user );
    }
  )

Passport.use( 'local', localStrategy );


// App setup
var app = express();
var server = app.listen(4000, function(){
    console.log('listening for requests on port 4000,');
});

// Static files
app.use(express.static('public'));


app.use( BodyParser.urlencoded( { extended: false } ) );
app.use( BodyParser.json() );
app.use( Passport.initialize() );

app.post(
  '/login',
  Passport.authenticate( 'local', { session: false } ),
  function( req, res ) {
    res.send( 'User ID ' + req.user.id );
  }
);

// Socket setup & pass server
var io = socket(server);
io.on('connection', (socket) => {

    console.log('made socket connection', socket.id);

    // Handle chat event
    socket.on('chat', function(data){
        io.sockets.emit('chat', data);
    });

});
