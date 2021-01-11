const express = require('express');
const app = express();

const { config } = require('./config/index');

app.get('/', function (req, res){
    res.send("hello world");
});

app.get('/json', function (req, res){
    res.json({hello: 'world'});
});

app.listen(config.port, function () {
    console.log(`Listening http://localhost:${config.port}`)
}
);

app.get('/year/:year', function (req, res) {
    
    const year = Number(req.params.year);
    if (year % 4 === 0) {
        return res.send(`${year} es año bisiesto`);
    }
    else {
        res.send(`${year} es un año normal`)
    }
});