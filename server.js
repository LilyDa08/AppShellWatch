const express = require('express');

const app = express();


app.use(express.static('public'));
app.use('/', express.static(__dirname + '/public/offline.html'));

const port = process.env.PORT;

app.listen( port, () => {
    console.log('Server is running')
});