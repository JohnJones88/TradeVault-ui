const express = require('express');
const router = express.Router();
const { Sequelize } = require('sequelize');
const Collectables = require('../db/collectables-models');
const { validateToken } = require('../utils/authentication');
//const { Col } = require('react-bootstrap');





router.get('/',validateToken, async (req, res) => {
  try {
    //console.log(req.query.random)
    if(!req.query.random){
      const collectables = await Collectables.findAll();
      res.send(collectables)
    }
    else{
      const randcollectables = await Collectables.findAll({ order: Sequelize.literal('rand()') })
      res.send(randcollectables)
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(`Internal Server Error ${error}`)
  }
})

router.get('/:id',validateToken, async (req, res) => {
  try {
    const findCollectables = await Collectables.findByPk(req.params.id)
    if (!findCollectables) {
      res.status(404).send('Collectable is not found.');
      return;
    }
    res.send(findCollectables);
  } catch (error) {
    console.log(error);
    res.status(500).send(`Internal Server Error ${error}`)
  }
})

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
    console.log(error);
    res.status(500).send(`Internal Server Error ${error}`)
  }
})

module.exports = router;