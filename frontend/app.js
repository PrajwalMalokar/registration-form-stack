require('dotenv').config();
var express = require('express');
var app= express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    res.render('index' ,{title: 'Registration Form'});
})

app.post('/submit', async (req, res) => {
    const formdata = req.body;
    
    try {
        const response = await fetch(process.env.BACKEND_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formdata)
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        res.send('Form submitted successfully');
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(3000, function(){
    console.log('Server is running on port 3000');
})