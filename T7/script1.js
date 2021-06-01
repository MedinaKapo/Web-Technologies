const express = require('express');
const app = express();
const PORT = 8085;

app.use(express.static('public'));

app.listen(PORT);