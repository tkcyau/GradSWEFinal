const express = require("express");
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

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

// app.listen(process.env.port || port, () => {
//   console.log("Server is running!");
// });
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port);
