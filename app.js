const express = require('express'); 
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const formidable = require('express-formidable');
app.use(formidable());

morgan = require('morgan');
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.post('/', function (req, res) {
    console.log("Fields : ", req.fields);
    console.log("Files : ", req.files);
    console.log("Body : ", req.body);
    res.send('OK');
  });

app.listen(12345, function () {
   console.log('Listening on port 12345.');
});