const express = require('express');
const app = express();

// Serve static files from the current directory
app.use(express.static(__dirname));

app.listen(8080, function(){
    console.log('Running your webpage!');
});