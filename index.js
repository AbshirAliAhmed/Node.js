// import express
const express = require('express');
const app = express();
// GET Methods
app.get('/index', (req, res) => {
    res.json({
        id: 131690,
        name: "Abshir Ali Ahmed",
        phone: "+252 0616271871",
        address: "Dayniinle",
        gender: "Male"
    });
});

// Port numberka 
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});


