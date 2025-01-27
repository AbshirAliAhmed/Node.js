// import express
const express = require('express');
const app = express();
app.use(express.json());

// Variable
let userDetails = {
    id: 131690,
    name: "Abshir Ali Ahmed",
    phone: "+252 0616271871",
    address: "Dayniinle",
    gender: "Male"
};

// GET Method
app.get('/index', (req, res) => {
    res.json(userDetails);
});

// POST Method
app.post('/index', (req, res) => {
    const { id, name, phone, address, gender } = req.body;

    // Update the userDetails 
    userDetails = {
        id,
        name,
        phone,
        address,
        gender
    };

    res.json({ message: "User details updated successfully", userDetails });
});

// Port number
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



