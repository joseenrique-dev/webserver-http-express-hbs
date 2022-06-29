const express = require('express')
const app = express()
const port = 8080;
const hbs = require('hbs');

//Serve static content from public folder
app.use(express.static('public'));

hbs.registerPartials(__dirname + '/views/partials', function(err) {
    if (err) {
        console.log(err);
    }
});

app.set('view engine', 'hbs');

app.get('/', function (req, resp) {
    resp.render('home', {
        title: 'Home',
        message: 'Node course'
        });
})


app.get('/generic', function (req, res) {
    res.render('generic', {
        title: 'Generic',
        message: 'Generic Node course'
        });
})

app.get('/elements', function (req, res) {
    res.render('elements', {
        title: 'Elements',
        message: 'Elements Node course'
        });
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