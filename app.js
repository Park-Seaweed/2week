"use strict";

const express = require("express");
const app = express();

app.set("view engine", "html");
app.set("views", "views");
app.use('/',express.static("public"));

/* localhost:3000/ 접속시 나올 메시지 */
app.get("/", (req, res) => { 
  res.sendFile("public/index.html");
});

/* localhost:3000/main 접속시 나올 메시지 */
app.get("/main", (req, res) => {  
  res.send(`
    <h1>Hello World</h1>
    <p>This is main page</p>
    `);
});

/* localhost:3000/ 혹은 localhost:3000/main 외의
get하지 않은 페이지 접속시 나올 메시지. */
app.use((req, res) => {
  res.send(`<h1>Sorry, page not found :(</h1>`);
});

/* 3000포트에서 서버 구동 */
app.listen(3000, () => {
  console.log("localhost:3000 에서 서버가 시작됩니다.");
});
