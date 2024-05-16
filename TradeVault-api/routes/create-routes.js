const express = require('express');
const router = express.Router();
const Collectables = require('../db/collectables-models');


router.post('/', async (req, res) => {
  try {
    if (!req.body.name) {
      res.status(400).send('name must have a value.')
      return;
    }
    if (!req.body.description) {
      res.status(400).send('description must have a value.')
      return;
    }
    if (!req.body.age) {
      res.status(400).send('age must have a value.')
      return;
    }
    if (!req.body.condition) {
      res.status(400).send('condition must have a value.')
      return;
    }
    let newCollectable = await Collectables.create({
      name: req.body.name,
      description: req.body.description,
      age: req.body.age,
      condition: req.body.condition

    });
    res.status(201).send(newCollectable);

  } catch (error) {
    if(error.name === "SequelizeDatabaseError" && error.original.sqlMessage.includes('condition')){
      res.status(400).send("Condition can only be Mint, Excellent, Very Good and Poor")
    }
    console.log(error);
    res.status(500).send(`Internal Server Error ${error}`)
  }
})

module.exports = router;