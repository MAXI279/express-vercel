const express = require("express");
const app = express();
//const product = require("./apida/product");

app.use(express.json({ extended: false }));

app.use("/", (res, req) => {
    res.json({
        message: true,
    })
});


// app.use("/api/product", product);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
