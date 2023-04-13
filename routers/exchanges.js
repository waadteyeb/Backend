const express = require('express');
const router = express.Router();
const { Exchange } = require('../models/exchange');
const { User } = require('../models/user');

router.get('/', async (req, res) => {
  try {
    const exchangeList = await Exchange.find();
    res.status(200).json(exchangeList);
  } catch (err) {
    res.status(500).json({ error: err, success: false });
  }
});

router.post('/', async (req, res) => {
  try {
    const user = await User.findById(req.body.userId);
    if (!user) {
      return res.status(400).json({ success: false, message: 'Invalid user' });
    }

    const exchange = new Exchange({
      name: req.body.name,
      type: req.body.type,
      quantity: req.body.quantity,
      location: req.body.location,
      userId: req.body.userId,
      status:req.body.status
    });

    const savedExchange = await exchange.save();

    // Send notification to user
    user.notifications.push(`You received a new exchange request for ${req.body.name}`);
    await user.save();

    res.status(201).json(savedExchange);
  } catch (err) {
    res.status(500).json({ error: err, success: false });
  }
});
router.put('/:id/status', async (req, res) => {
  try {
    const exchange = await Exchange.findById(req.params.id);
    if (!exchange) {
      return res.status(404).json({ success: false, message: 'Exchange not found' });
    }

    exchange.status = req.body.status;
    const updatedExchange = await exchange.save();

    res.status(200).json(updatedExchange);
  } catch (err) {
    res.status(500).json({ error: err, success: false });
  }
});


module.exports = router;
