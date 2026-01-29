const express = require('express');
const app = express();

app.get('/personal', (req, res) => {
    res.send('Welcome to the Personal Path!');
});
app.get('/personal/info', (req, res) => {
    res.send('This is some personal information.');
});
app.get('/personal/details', (req, res) => {
    res.send('This is some personal information.');
});
app.post('/personal/update', (req, res) => {
    res.send('Personal information updated.');
});

app.get('/findsummtion/:num1/:num2' , (req , res) =>{
    console.log(req.params);
    
    res.send('This is find summation path');

});

app.get('/sumation2' , (req , res) =>{
    res.send('This is find summation path 2');
});



//module.exports = app;   
app.listen(3000, () => {
    console.log('Server is running on port 3000');
}); 

