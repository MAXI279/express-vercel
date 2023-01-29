const express = require("express");
const app = express();
//const product = require("./apida/product");

app.use(express.json({ extended: false }));

app.use("/", (req, res) => {
    return res.json({
        message: true,
    })
});


// app.use("/api/product", product);

const PORT = process.env.PORT || 8030;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
