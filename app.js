const express = require('express');
const morgan = require('morgan')

const app = express();
app.use(morgan('dev'));

/*
app.get('/', (req, res) => {
    console.log('The rooth path was called')
    res.send('Hello Express!');
});

app.get('/pizza/pepperoni', (req, res) =>{
    res.send('Your pizza is on the way!');
});

app.get('/pizza/pineapple', (req, res) =>{
    res.send(`We don't serve that here. Never call again!`);
});

app.get('/echo', (req, res) =>{
    const responseText = `Here are some details about your request:
    Base URL: ${req.baseUrl}
    Host: ${req.hostname}
    Body: ${req.body}
    Cookies: ${req.cookies}
    I.P: ${req.ip}
    Path: ${req.path}`;
    res.send(responseText);
});

app.get('/queryViewer', (req, res) => {
    console.log(req.query);
    res.end(); //do not send any data back to the client
  });

  app.get('/greetings', (req, res)=>{
    const name = req.query.name;
    const race = req.query.race;

    if(!name) {
        return res.status(400).send('Please provide a name');
    }

    if(!race){
        return res.status(400).send('Please provide a race');
    }

    const greeting = `Greetings ${name} the ${race}, Welcome to our kingdom`;

    res.send(greeting);
});
  
*/

app.get('/sum', (req, res)=>{
    const a = req.query.a;
    const aInt = parseInt(a, 10);
    const b = req.query.b;
    const bInt = parseInt(b, 10);
    const cInt = aInt + bInt;
    const c = cInt.toString();

    if(!a){
        return res.status(400).send('Please input an a value') };
    if(!b){
        return res.status(400).send('Please input a b value')
    };

    const addition = `The sum of ${a} and ${b} is ${c}`;

    res.send(addition);

});

app.get('/cipher', (req, res)=>{
    const text = req.query.text;
    const shift = req.query.shift;
    const shiftInt = parseInt(shift, 10);
    const textUpper = text.toUpperCase();
    const textArray = [];

    for(let i=0; i < textUpper.length; i++){
        let code = textUpper.charCodeAt(i);
        textArray.push(code);
    }

   const textArray2 = textArray.map(x => x + shiftInt);

   const cipherText = textArray2.map(x => String.fromCharCode(x));

   const finsihedCipher = cipherText.join('')


    if(!text){
        return res.status(400).send('Please input a text to encrypt')
    }
    if(!shift){
        return res.status(400).send('Please input a cipher number')
    }

    const cipher = `Your Code: ${finsihedCipher}`;

    res.send(cipher)

});

app.get('/lotto', (req, res) => {
    const arr = req.query.arr;
    const over = arr.filter(x => { x > 20 });
    const unique = [...new Set(arr)]

    if(!arr){
        return res.status(400).send('Please input your favourite numbers')
    }

    if(arr.length > 6){
        return res.status(400).send('Please insert 6 numbers')
    }

    if(arr.filter(x => { x > 20 })){
    return res.status(400).send('Please input numbers lower than 20')
    }


    if(unique.length > 6){
        return res.status(400).send('Please insert unique numbers')
    }


const results = `${unique}`;

res.send(results)


});


app.listen(8000, ()=> {
    console.log('Express server is listening on port 8000!')
});

