'use strict'
/* 
  Fallback server for supporting browserHistory
  in your React application. 
*/


//instantiate path and express
const debug = require('debug');
const express = require('express');
const path = require('path');
const app = express();

//use the public folder as the static directory. 
app.use( express.static(path.join(__dirname, 'public')));

//send any route to index.html where the react app is mounted
app.get('*', (req,res)=>{
  res.sendFile(path.join(__dirname,'public/index.html'));
})

app.set('port', process.env.PORT || 1337);

const server = app.listen(app.get('port'), function() {
  console.log('Server listening on localhost:' + server.address().port);
  debug('Express server listening on port ' + server.address().port);
});