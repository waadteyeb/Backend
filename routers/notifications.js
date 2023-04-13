const express = require('express');
const router = express.Router();
const { User } = require('../models/user');
const { Notification } = require('../models/notification');

router.get('/', async (req, res) => {
  try {
    const notifications = await Notification.find({ recipient: req.user.id }).sort({ createdAt: -1 });
    return res.status(200).json(notifications);
  } catch (err) {
    return res.status(500).json({ error: err });
  }
});

router.post('/', async (req, res) => {
  try {
    const recipient = await User.findById(req.body.recipient);
    if (!recipient) {
      return res.status(400).json({ success: false, message: 'Invalid recipient' });
    }
    const notification = new Notification({
      recipient: recipient._id,
      message: req.body.message,
      createdAt:req.body.createdAt
    });
    const savedNotification = await notification.save();
    return res.status(201).json(savedNotification);
  } catch (err) {
    return res.status(500).json({ error: err });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const notification = await Notification.findByIdAndRemove(req.params.id);
    if (!notification) {
      return res.status(404).json({ success: false, message: 'Notification not found' });
    }
    return res.status(200).json({ success: true, message: 'Notification deleted' });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
});

module.exports = router;