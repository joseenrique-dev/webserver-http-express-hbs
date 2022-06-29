const express = require('express')
const app = express()
const hbs = require('hbs');
const port = process.env.PORT || 8082;
console.log(`ENV ${process.env}`);
// Register Partials
app.set('view engine', 'hbs');

//Serve static content from public folder
app.use(express.static('public'));

//Set view engine to handlebars
hbs.registerPartials(__dirname + '/views/partials', function(err) {
    if (err) {
        console.log(err);
    }
});

//Created relatives routes
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