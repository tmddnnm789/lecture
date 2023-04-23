"use strict";

const express = require("express");
const app = express();
const home = require('./routes/home')//라우팅
//앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

app.use('/', home);//미들웨어 등록하는 메소드

module.exports = app;
