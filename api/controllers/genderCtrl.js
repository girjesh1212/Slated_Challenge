const e = require('express');
const express = require('express');
const https = require('https');

const validateInput = require('../../validation/name');

module.exports.test = (req, res) => {
    return res.status(200).json({ msg: 'Gender route works' });
}

module.exports.getGender = (req, res) => {

    //Check validation
    const { errors, isValid } = validateInput(req.body);
    if (!isValid) { return res.status(400).json(errors); }

    var url = 'https://api.genderize.io/?name=' + req.body.name;

    const request = https.request(url, (response) => {
        let data = '';
        response.on('data', (chunk) => {
            data = data + chunk.toString();
        });

        response.on('end', () => {
            const body = JSON.parse(data);
            return res.json({ name: req.body.name, gender: body.gender });
        });
    });

    request.on('error', (error) => {
        console.log('An error', error);
    });

    request.end();

}

