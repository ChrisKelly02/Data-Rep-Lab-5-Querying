const express = require('express') //include express
const res = require('express/lib/response')
const app = express()
const port = 4000 //define port

//npm i body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/name', (req, res)=>{
    res.send('Hello '+req.query.fname+' '+req.query.lname) //outputting name from get
})

app.post('/name',(req, res)=>{
    res.send('Hello '+req.query.fname+' '+req.body.lname); //better way of sending information, much more secure

})
app.get('/', (req, res) => { //request, response
  res.send('Hello World!'); //response.send
})

app.get('/whatever',(req, res)=>{
    res.send("Good Bye!");
})

app.get('/datarep',(req, res)=>{
    res.send("Welcome to Data Representation & Querying"); //send back:
})

app.get('/hello/:name', (req, res)=>{
    req.send("Hello"+req.params.name);
})

app.get('/api/books',(req, res)=>{

    const data = [
        {
            "title": "Learn Git in a Month of Lunches",
            "isbn": "1617292419",
            "pageCount": 0,
            "thumbnailUrl":
            "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
            "status": "MEAP",
            "authors": ["Rick Umali"],
            "categories": []
            },
            {
            "title": "MongoDB in Action, Second Edition",
            "isbn": "1617291609",
            "pageCount": 0,
            "thumbnailUrl":
            "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
            "status": "MEAP",
            "authors": [
            "Kyle Banker",
            "Peter Bakkum",
            "Tim Hawkins",
            "Shaun Verch",
            "Douglas Garrett"
            ],
            "categories": []
            },
            {
            "title": "Getting MEAN with Mongo, Express, Angular, and Node",
            "isbn": "1617292036",
            "pageCount": 0,
            "thumbnailUrl":
            "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
            "status": "MEAP",
            "authors": ["Simon Holmes"],
            "categories": []
            }
    ];

    res.json({
        chris_books:data,
        "Message":"Hello from server.js"
    })
})

app.get('/test', (req, res)=>{
    res.sendFile(__dirname+'/index.html');
})

app.listen(port, () => { //listen at port () for a request coming in
  console.log(`Example app listening on port ${port}`)
})