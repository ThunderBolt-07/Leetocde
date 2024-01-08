import express from "express";
import bodyParser from "body-parser";
const app = express();

const port = 4000;
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/SignUp", (req, res) => {
  res.send("hi");
  console.log(req);

  const email = req.body.email,
    password = req.body.password,
    confirmPassword = req.body.confirmPassword;
    
});

app.post("/LogIn", (req, res) => {
  
  const email = req.body.email,
    password = req.body.password;
    
});
app.get("/LogInRedirect", (req, res) => {
  res.redirect("http://localhost:3000/LogIn");
});

app.listen(port, () => {
  console.log("server runs at port " + port);
});
