"use strict";

const express = require('express');
const ctrl = require('./home.ctrl');
const router = express.Router();

router.get('/', ctrl.home);

router.get("/login", ctrl.login);

module.exports = router; //외부파일에서 사용할 수 있도록 함.
