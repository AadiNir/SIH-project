const express = require('express');
const app = express();
const matlabf = require('./Matlab files/data/matlabData.json');
const port= 5000;


app.get("/api1", (req, res) => {
    try{
        res.json(matlabf);
    }
    catch(err){
        console.log(err);
    }

});

app.use('/blockchain',require('./Pages/blockchain'))

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'app', 'index.html'));
});

app.get("/api", (req, res) => {
    res.json({"users":["user1","user2","user3", "server9"]});
});

app.listen(5000, () => {
    console.log("Server started on port 5000");
});

