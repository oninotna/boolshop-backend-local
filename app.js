require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;

const clientUrl = process.env.CLIENT_URL;

const sneakerRouter = require("./routers/sneakersRouter.js");

const errorHandler = require("./middleware/errorhandler.js");
const cors = require("cors");

const errorNotFound = require("./middleware/errorNotFound.js");

//STATIC ASSEST

app.use(cors({ origin: clientUrl }));
app.use(express.static("public"));
app.use(express.json());
//ROUTERS

app.get('/', (req, res) => {
  res.json({});
});

app.use("/sneakers", sneakerRouter);

//MIDDLEWARE

app.use(errorHandler);
app.use(errorNotFound);

// IL SERVER E IN ASCOLTO SULLA PORTA 3000

app.listen(port, (err) => {
  if (!err) {
    console.log("il server è in ascolto sulla porta " + port);
  }
  else {
    console.error(err);
  }
});