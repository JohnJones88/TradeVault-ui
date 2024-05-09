const express = require('express');
const router = express.Router();
const Collectables = require('../db/collectables-models');


router.get('/:id', async (req, res) => {
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







module.exports = router;