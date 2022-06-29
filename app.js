const express = require('express')
const app = express()
const port = 8080;

//Serve static content from public folder
app.use(express.static('public'));

//TODO: Requiere hbs
const hbs = require('hbs');

app.set('view engine', 'hbs');

app.get('/', function (req, resp) {
    resp.render('home', {
        title: 'Home',
        message: 'Node course'
        });
})


app.get('/generic', function (req, res) {
    res.sendFile(__dirname + '/public/generic.html');
})

app.get('/elements', function (req, res) {
    res.sendFile(__dirname + '/public/elements.html');
})

app.get('*', function (req, res) {
    res.sendFile(__dirname+'/public/404.html');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})