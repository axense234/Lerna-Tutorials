import express from "express";

const PORT = process.env.PORT || 4000;
const app = express();

app.get("/", (req, res) => {
  return res.status(200).send("ok");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port:${PORT}`);
});
