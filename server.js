const cors = require("cors");
const express = require("express");
const app = express();
const PORT = 3000;
const USERS = require("./data.json");
const axios = require("axios");

app.use(cors());

app.get("/", async (req, res) => {
  try {
    // response e a resposta do axios mas eu tiro o data de detro do response
    const { data } = await axios("https://jsonplaceholder.typicode.com/users");

    // return res.json(USERS)
    return res.json(data);
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => {
  console.log(`servidor rodando na porta: ${PORT}`);
});
