const express = require('express');
const Signup = require('../db/sign-up-models');
const bcrypt = require('bcrypt');
const validator = require('validator');
const { createToken } = require('../utils/authentication')
const router = express.Router();


router.post('/', async (req, res) => {

    try {

        if (!req.body.first_name) {
            res.status(400).send("FirstName must exist");
            return;
        }

        if (!req.body.last_name) {
            res.status(400).send("LastName must exist");
            return;
        }

        if (!req.body.user_name) {
            res.status(400).send("UserName must exist");
            return;
        }

        if (!req.body.email) {
            res.status(400).send("Email must exist");
            return;
        }

        if (!validator.isEmail(req.body.email)) {
            res.status(400).send("Email is not an valid email format");
            return;
        }

        if (!req.body.password) {
            res.status(400).send("Password must exist");
            return;
        }


        const signUpToCreate = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            user_name: req.body.user_name,
            email: req.body.email,
            password: req.body.password,
        };

        const createdNewUser = await Signup.create(signUpToCreate);

        createdNewUser.password = undefined;

        res.status(201).send(createdNewUser);
    } catch (error) {

        console.log(error);
        res.status(500).send(`Internal Server Error ${error}`);
    }
})


module.exports = router;