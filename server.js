const express = require('express');

app = express();


app.use(express.static('public'));
app.use('/', express.static(__dirname + '/public/Homepage.html'));

const port =3000 || process.env.PORT;

app.listen( port, () => {
    console.log('Server is running')
});