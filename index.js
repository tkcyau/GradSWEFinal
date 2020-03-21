const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => res.render("index"));
app.get("/missionstatement", (req, res) => res.render("missionstatement"));
app.get("/exec", (req, res) => res.render("exec"));
app.get("/naomi", (req, res) => res.render("naomi"));
app.get("/ericah", (req, res) => res.render("ericah"));
app.get("/juliet", (req, res) => res.render("juliet"));
app.get("/xueying", (req, res) => res.render("xueying"));
app.get("/erical", (req, res) => res.render("erical"));
app.get("/tiffany", (req, res) => res.render("tiffany"));
app.get("/natalia", (req, res) => res.render("natalia"));
app.get("/upcomingevents", (req, res) => res.render("upcomingevents"));
app.get("/resources", (req, res) => res.render("resources"));
app.get("/professional", (req, res) => res.render("professional"));
app.get("/social", (req, res) => res.render("social"));
app.get("/outreach", (req, res) => res.render("outreach"));
app.get("/contact", (req, res) => res.render("contact"));

app.post("/send", (req, res) => {
  const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>Message: ${req.body.message}</p>
  `;
  // create reusable transporter object using the default SMTP transport
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "gradsweexec@gmail.com",
      pass: "gradswe8"
    },
    tls: { rejectUnauthorized: false }
  });

  const mailOptions = {
    from: "gradsweexec@gmail.com", // sender address
    to: "gradsweexec@gmail.com", // list of receivers
    subject: "GradSWE Page Contact", // Subject line
    html: output // plain text body
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      return console.log(err);
    }
    res.render("success");
  });
});
// app.listen(process.env.port || port, () => {
//   console.log("Server is running!");
// });
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port);
