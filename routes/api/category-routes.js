const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try {
    const category = await Category.findAll({
    include: [Product]
    });
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  };
  
});

router.get('/:id',async (req, res) => {
  // find one category by its `id` value
  try {
    const category = await Category.findByPk({
    include: [Product]
    });
  if (!category){
    res.status(404).json({message: 'No location found with this id!'});
    return;
  }
  res.status(200).json(category);
  }catch(err){
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try{
    const category = await Category.create(req.body);
    res.status(200).json(Category);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try{
    const category = await Location.destroy({
      where: {id: req.params.id}
    });
    
if(!Category) {
  res.status(404).json({message: 'No Category found'})
  return
}
res.status(200).json(Category);
}catch (err) {
  res.status(500).json(err)
}
});

module.exports = router;
