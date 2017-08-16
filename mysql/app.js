/**
 * Created by wangxiaohui on 17/8/7.
 */
const express = require('express');
const app = express();
const client = require('./sequelize').client;

app.get('/aliPay', function (req, res) {
    console.log(req.query);

    res.send(req.query);
});

app.post('/aliPay', function (req, res) {

    console.log(req.body);
    res.send(req.body);
});

app.listen(3000);