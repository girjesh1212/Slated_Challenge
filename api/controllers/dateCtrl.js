const e = require('express');
const express = require('express');

module.exports.test = (req, res) => {
    return res.status(200).json({ msg: 'Date route works' });
}

module.exports.getDates = (req, res) => {

    const d = req.body.date.split(' ');
    const date = new Date(d[2], d[1] - 1, d[0]);

    var arr = [];

    const startIndex = date.getDay();

    let previous = new Date(date - 1);
    for (let i = startIndex; i > 0; i--) {
        arr.unshift(previous.toDateString());
        previous.setDate(previous.getDate() - 1);
    }

    let next = new Date(date + 1);
    for (let i = startIndex; i <= 6; i++) {
        arr.push(next.toDateString());
        next.setDate(next.getDate() + 1);
    }


    return res.json(arr);
}

