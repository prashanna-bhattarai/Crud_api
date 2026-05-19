const express = require("express");
const router = express.Router();
const User = require("../models/User");

// 1. CREATE - Add a new user
router.post("/", async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

// 2. READ ALL - Get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

// 3. READ SPECIFIC - Get one user by id (for stalking 😄)
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

// 4. UPDATE - Update a user by id
router.put("/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

// 5. DELETE - Delete a user by id
router.delete("/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ msg: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});
// Search by name
router.get('/search/name/:name', async (req, res) => {
  try {
    const users = await User.find({ 
      name: { $regex: req.params.name, $options: 'i' } 
    });
    if (users.length === 0) {
      return res.status(404).json({ msg: 'No user found with that name' });
    }
    res.json(users);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});
// Search by phone
router.get('/search/phone/:phone', async (req, res) => {
  try {
    const user = await User.findOne({ phone: req.params.phone });
    if (!user) {
      return res.status(404).json({ msg: 'No user found with that phone number' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});
// Update by name
router.put('/update/name/:name', async (req, res) => {
  try {
    const updatedUser = await User.findOneAndUpdate(
      { name: { $regex: req.params.name, $options: 'i' } },
      req.body,
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ msg: 'No user found with that name' });
    }
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

module.exports = router;
