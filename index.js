const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();
require("dotenv").config();

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
    <h3>Contact Details</h3>
    <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>Message: ${req.body.message}</p>
  `;
  // create reusable transporter object using the default SMTP transport
  // var transporter = nodemailer.createTransport({
  //   service: "gmail",
  //   auth: {
  //     user:
  //   },
  //   tls: { rejectUnauthorized: false }
  // });
  // const smtpTrans = nodemailer.createTransport({
  //   host: "smtp.gmail.com",
  //   port: 465,
  //   secure: true,
  //   auth: {
  //     user: process.env.user,
  //     pass: process.env.pass
  //   }
  // });
  // access token: ya29.a0Adw1xeXvZSyuAKDn7e_4ekz3xRU1c1ihmtME4T8rvG1TEwICQ0jC1Ea0cucft4WNLYqxlT-t3nI-GNI2XPFlQDA1fd8ZZmcBZP5aL_jr7iVFHqpMzWppiWL-G0Y8SUF20p2_aV3Ux8R1npPVagVqd6h_kmbQl--9SI4

  var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
      user: process.env.user,
      clientId: process.env.clientid,
      clientSecret: process.env.clientsecret,
      refreshToken: process.env.refreshtoken,
      accessToken: process.env.accesstoken
    }
  });
  var mail = {
    from: "gradsweexec@gmail.com",
    to: "gradsweexec@gmail.com",
    subject: "GradSWE Page Contact Email",
    text: "Email Contact",
    html: output
  };
  transporter.sendMail(mail, (err, info) => {
    if (err) {
      return console.log(err);
    } else {
      res.render("success");
    }
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
