const express = require('express');
const session = require('express-session');
const path = require("path");

const app = express();
const port = 3000;

let mySet = new Set();
 let obj = {};

app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/scripts', express.static(path.join(__dirname, 'public/scripts')));

app.use(session({
    secret: "Shh, its a secret!"
}));

/* app.get("/code", (req, res, next) => {
    console.log("code " + req.params.name);
    next();
}); */

app.get("/code", (req, res, next) => {

    //ternary condition operator (shorthand if)
    (req.session.page_views) ? req.session.page_views++: req.session.page_views = 1;

   
    
    let nm = req.query.name;
    

    obj[nm] = {
        method: "backend",
        passedData: req.query.name
    };

    mySet.add(obj);
    console.log("-----------------")
for (let item of mySet) console.log(item);
console.log("-----------------")
    console.log(mySet)
    console.log("size: " + mySet.size);



    res.send(obj);
    //  res.send({ name: "firebase", calls: counter });    
})

app.get('/spice', (req, res) => res.send('Hello World!'))


app.listen(port, () => console.log(`firebase app listening on port ${port}!`))