import express from 'express';
import dotenv from 'dotenv';
import { searchRouter } from './src/routes/search.route.js';
import { searchService } from './src/routes/search.route.js';
dotenv.config();


import { Login } from './src/controller/search.controller.js';

const app = express()
//const port = 4000;

app.use("/searchRouter", searchRouter);

app.use("/search/Service", searchService);

app.use("/auth", Login);


//***************************** Method 3******************************/
const StudentRouter = express.Router()
app.use('/search/SearchStudentRouter', StudentRouter)

StudentRouter.get('/', (req, res) => {
    res.send({
        Message: "i am GET from ./search/StudentRouter ............!",
        Url: req.baseUrl,
        Method: req.method
    });
});
StudentRouter.post('/', (req, res) => {
    res.send({
        Message: "i am GET from ./search/StudentRouter ............!",
        Url: req.baseUrl,
        Method: req.method
    });
});

StudentRouter.put('/', (req, res) => {
    res.send({
        Message: "i am GET from ./search/StudentRouter ............!",
        Url: req.baseUrl,
        Method: req.method
    });
});

StudentRouter.delete('/', (req, res) => {
    res.send({
        Message: "i am GET from ./search/StudentRouter ............!",
        Url: req.baseUrl,
        Method: req.method
    });
});


//****************************** Method 1 ******************************/

app.get('/search', (req, res) => {
    res.send("hello i am GET from root")
});

app.post('/search', (req, res) => {
    res.send("Hello I am POST from root")
});

app.put('/search', (req, res) => {
    res.send("Hello I am PUT from root")
});

app.delete('/search', (req, res) => {
    res.send("Hello I am DELETE from root")
});

//******************************** Method 2*******************************/
app.route('/search/route')
    .get((req, res) => {
        res.send("hello i am ./search/route");
    })
    .post((req, res) => {
        res.send("hello i am ./search/route");
    })
    .put((req, res) => {
        res.send("hello i am ./search/route");
    })
    .delete((req, res) => {
        res.send("hello i am ./search/route");
    });

// app.listen(process.env.PORT, () => {
//     console.log(`"its a port ${process.env.PORT}"`);
// })

app.listen(4000, () => {
    console.log(`"its a port ${process.env.PORT}"`);
})