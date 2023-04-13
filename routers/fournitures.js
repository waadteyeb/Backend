const express=require('express');
const router=express.Router();

const {Fourniture}=require('../models/fourniture');
const {Category} = require('../models/category')

router.get('/', async (req, res) => {
  const location = req.query.location;
  const category = req.query.category;

  let filter = {};
  if (location) {
    filter.location = location;
  }
  if (category) {
    filter.category = category;
  }

  try {
    const fournitureList = await Fourniture.find(filter);
    if (fournitureList.length === 0) {
      return res.status(404).json({ success: false, message: 'No furniture found' });
    }
    res.status(200).json(fournitureList);
  } catch (err) {
    return res.status(500).json({ success: false, error: err });
  }
});

 router.get('/:id', async(req, res) => {
  try {
    const fourniture = await Fourniture.findById(req.params.id);
    if (fourniture) {
      return res.status(200).json({ success: true, message: 'the fourniture is founded' });
    } else {
      return res.status(404).json({ success: false, message: 'fourniture not found' });
    }
  } catch (err) {
    return res.status(400).json({ success: false, error: err });
  }
});

 
router.post(`/`, async (req, res) => {
  try {
    const category = await Category.findById(req.body.category);
    if (!category) {
      return res.status(400).json({ success: false, message: 'Invalid category' });
    }
    let fourniture = new Fourniture({
      name: req.body.name,
      image: req.body.image,
      location: {
        type: 'Point',
        coordinates: [req.body.longitude, req.body.latitude],
      },
      availability: req.body.availability,
      description: req.body.description,
      isFeatured: req.body.isFeatured,
      category: req.body.categoryId,
    });
    fourniture = await fourniture.save();
    if (!fourniture) {
      return res.status(500).json({ success: false, message: 'Failed to create the furniture item' });
    }
    res.status(200).json(fourniture);
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Failed to create the furniture item', error: err.message });
  }
});


router.put('/:id', async (req, res) => {
  const fourniture = await Fourniture.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      image: req.body.image,
      location: req.body.location,
      availability: req.body.availability,
      description: req.body.description,
      isFeatured: req.body.isFeatured,
      category: req.body.category,
    },
    { new: true }
  );
  if (!fourniture) {
    return res.status(400).json({ success: false, message: 'The furniture item cannot be updated!' });
  }
  res.status(200).json(fourniture);
});

router.delete('/:id', async (req, res) => {
  try {
    const fourniture = await Fourniture.findByIdAndRemove(req.params.id);
    if (fourniture) {
      return res.status(200).json({ success: true, message: 'The furniture item is deleted' });
    } else {
      return res.status(404).json({ success: false, message: 'Furniture item not found' });
    }
  } catch (err) {
    return res.status(400).json({ success: false, error: err });
  }
});


 module.exports=router;