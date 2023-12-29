var express = require('express');
var router = express.Router();
const models = require("../models");

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send({ title: 'the app is ready to roll' });
});

router.get("/:InteractuableId/:ActionId", async (req, res) => {

  const InteractuableId = req.params.InteractuableId;
  const ActionId = req.params.ActionId;

  try {
    const output = await models.Output.findOne({
      where: {
        InteractuableId: InteractuableId,
        ActionId: ActionId
      },
    });
    res.send(output.output);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

router.get("/outputs", async (req, res) => {

  try {
    const outputs = await models.Outputs.findAll();
    res.send(outputs);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

module.exports = router;
