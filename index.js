const express = require('express');
const session = require('express-session');
const path = require("path");

const app = express();
const port = 3000;


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
    (req.session.page_views) ? req.session.page_views++ : req.session.page_views = 1;
       
    
     res.send({
         method: "backend",
         visits: req.session.page_views,
         passedData: req.query.name
     });
  //  res.send({ name: "firebase", calls: counter });    
})

app.get('/spice', (req, res) => res.send('Hello World!'))


app.listen(port, () => console.log(`firebase app listening on port ${port}!`))
