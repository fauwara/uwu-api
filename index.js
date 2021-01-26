let express = require('express');

let app = express();
port = 3000;

app.get('/', (req,res) => {
    res.send('uwu');
});

app.listen( port, () => {
    console.log(`uwu. app listening at ${port}`);
});