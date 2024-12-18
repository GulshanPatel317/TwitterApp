import express from 'express';
import morgan from 'morgan';

//Create anew express app/serverobject
const app = express();


app.use(morgan('combined'));

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded());


app.get('/ping', (req, res) => {
    return res.json({
        message: 'pong'

    });
});  //what to do if someone makes a get request to /ping 

app.post('/hello', (req, res) => {
    console.log("query params", req.query); //query params
    console.log("req body", req.body);  //req body
    return res.json({
        message: 'world'
    });
});

app.get('/tweets/:tweet_id/comments/comment_id', (req, res) => {
    console.log(req.params);  //url params
    return res.json({
        message: 'tweet details'
    });
});

//Define a PORT and attach it to the express app 
app.listen(3000, () => {
    console.log("Server is runing on port 3000");
});
