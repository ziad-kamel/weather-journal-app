
// Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');
/* Middleware*/
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
const { get } = require('express/lib/response');
app.use(cors());

//Initialize the main project folder
app.use(express.static('website'));

const port = 8000;
const server = app.listen(port, listening);
function listening(){
    console.log(`server is running on localhost: ${port}`);
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//create JS object , endpoint for all routs
const projectData ={};

//[get rout]//

app.get('/all' , FinalData);
function FinalData(req, res) {
    console.log(projectData);
    res.send(projectData);
};

//[post rout]//
app.post('/return' , addData);

function addData(req , res) {

    projectData['date'] = req.body.date;
    projectData['temp'] = req.body.temp;
    projectData['feel'] = req.body.feel;
    
    res.send(projectData);
    }