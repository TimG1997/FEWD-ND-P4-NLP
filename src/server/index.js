const path = require('path')
const express = require('express')
const validator = require('validator');
const dotenv = require('dotenv');
const fetch = require("node-fetch");
const bodyParser = require('body-parser')
const cors = require('cors');

const app = express()
dotenv.config();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors());

app.use(express.static('dist'))

app.get('/', (req, res) => {
    res.sendFile('dist/index.html')
})

app.post('/analyzeText', async (req, res) => {

    if (validator.isURL(req.body.textToAnalyze)) {
        reqType = 'url';
    } else {
        reqType = 'txt';
    }

    console.log('analyzing text...');
    const response = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&lang=auto&${reqType}=${req.body.input}`);
    console.log('...finished analyzing!');

    try {
        const data = await response.json();
        res.send(data);
    } catch (error) {
        console.log("error", error);
    }
});

app.listen(8081, () => {
    console.log('NLP App listening on port 8081!');
})
