const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// Get route to get all tags
router.get('/', async (req, res) => {
  try {

    const tagData = await Tag.findAll({
      include: [{ model: Product, through: ProductTag }]
    });

    res.status(200).json(tagData)

  } catch (error) {
    res.status(500).json(error);
  }
});

// Get route to get a tag by its id
router.get('/:id', async (req, res) => {
  try {

    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product, through: ProductTag }]
    });

    if(!tagData){
      res.status(404).json({ message: `No tag found with id of ${req.params.id}`});
      return;
    }

    res.status(200).json(tagData)

  } catch (error) {
    res.status(500).json(error);
  }

});

// Post route to create a tag
router.post('/', async (req, res) => {
  try{
    const tagData = await Tag.create({
      tag_name: req.body.tag_name
    });

    res.status(200).json(tagData)
  }
  catch(error){
    res.status(500).json(error);
  }
});

// put route to update a tag by its id
router.put('/:id', async (req, res) => {
  try{
    const tagData = await Tag.update(req.body, {
      where: {
        id: req.params.id
      }
    });

    if(!tagData[0]){
      res.status(404).json({ message: `No tag found with id of ${req.params.id}`});
      return;
    }

    res.status(200).json(tagData)
  }
  catch(error){
    res.status(500).json(error);
  }
});

// Deleet route to delete a tag by its id
router.delete('/:id', async (req, res) => {
  try{
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });

    if(!tagData){
      res.status(404).json({ message: `No tag found with id of ${req.params.id}`});
      return;
    }

    res.status(200).json({ message: `Tag with id of ${req.params.id} deleted`})
  }
  catch(error){
    res.status(500).json(error);
  }

});

module.exports = router;
