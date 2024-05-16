const express = require('express');
const router = express.Router();
const Collectables = require('../db/collectables-models');
const { validateToken } = require('../utils/authentication');



router.get('/:id', validateToken , async (req, res) => {
  try {
    const viewCollectables = await Collectables.findByPk(req.params.id)
    if (!viewCollectables) {
      res.status(404).send('Collectable is not found.');
      return;
    }
    res.send(viewCollectables);
  } catch (error) {
    console.log(error);
    res.status(500).send(`Internal Server Error ${error}`)
  }
})







module.exports = router;