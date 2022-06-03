const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express()
app.use(cors());
app.use(express.json())

const PORT = process.env.PORT || 5000;




//mongoose.connect('mongodb+srv://namal:namal123@cluster0.atwy4.mongodb.net/mydatabase?retryWrites=true&w=majority')

mongoose.connect('mongodb+srv://vibhujay99:codelyoko99@cluster0.zibrl.mongodb.net/panel_Member?retryWrites=true&w=majority')

.then(()=>{
    console.log("MongoDB connected");
}).catch((err) => {
  alert(err.message);
});

app.get('/', (req, res) =>{
  res.send("<b> Store Backend API </b>")
});

//http://localhost:5000/api/panel
app.use("/api/panel",require("./routes/Panel.routes"));

//cerating port
app.listen(PORT, () => {
  console.log(`Server is running on port number:${PORT}`);

});