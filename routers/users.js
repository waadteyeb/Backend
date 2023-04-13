const express = require('express');
const router = express.Router();
const { User } = require('../models/user');

router.get('/', async (req, res) => {
  try {
    const userList = await User.find();
    res.status(200).json(userList);
  } catch (err) {
    res.status(500).json({ error: err, success: false });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err, success: false });
  }
});

router.post('/', async (req, res) => {
  try {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      notifications: [],
    });

    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err, success: false });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err, success: false });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    res.status(200).json({ success: true, message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err, success: false });
  }
});

router.post('/:id/notifications', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(400).json({ success: false, message: 'Invalid user' });
    }

    user.notifications.push(req.body.notification);
    await user.save();

    res.status(201).json({ success: true, message: 'Notification sent successfully' });
  } catch (err) {
    res.status(500).json({ error: err, success: false });
  }
});

module.exports = router;
