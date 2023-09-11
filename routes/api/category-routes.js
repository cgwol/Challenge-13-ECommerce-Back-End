const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// Get route for all categories
router.get('/', async (req, res) => {
  try{
    const categoryData = await Category.findAll({
      include: [{model: Product}]
    });
    res.status(200).json(categoryData);
  }catch(error){
    res.status(500).json(error);
  }
  
});

// get route for 1 category
router.get('/:id', async (req, res) => {
  try{
    const categoryData = await Category.findByPk(req.params.id,{
      include: [{model: Product}]
    });

    if(!categoryData){
      res.status(404).json({ message: `No category found with id of ${req.params.id}`});
      return;
    }

    res.status(200).json(categoryData);

  }catch(error){
    res.status(500).json(error);
  }
});

// Post route to create a category
router.post('/', async (req, res) => {
  try{
    const categoryData = await Category.create({
      category_name: req.body.category_name
    });

    res.status(200).json(categoryData);

  }catch(error){
    res.status(500).json(error);
  }

});

// Put route to update a category by its id
router.put('/:id', async (req, res) => {
  try{
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    });

    if(!categoryData[0]){
      res.status(404).json({ message: `No category found with id of ${req.params.id}`});
      return;
    }

    res.status(200).json(categoryData);

  }catch(error){
    res.status(500).json(error);
  }
});

// Delete route to delete a category by its id
router.delete('/:id', async (req, res) => {
  try{

    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if(!categoryData[0]){
      res.status(404).json({ message: `Category with id of ${req.params.id} deleted`});
      return;
    }

    res.status(200).json(categoryData)

  }catch(error){
    res.status(500).json(error);
  }
});

module.exports = router;
