import express from 'express';

import mongoose from 'mongoose';

import Tip from '../db/tips.js';

const tipRouter = express.Router();

tipRouter.get('/', async (req, res) => {
  try {
    const allTips = await Tip.find();
    res.json(allTips);
  } catch (error) {
    console.log(error);
  }
});

tipRouter.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const tip = await Tip.findById(id);
    if (!tip) return;
    res.status(200).json(tip);
  } catch (error) {
    console.log(error);
  }
});

tipRouter.post('/', async (req, res) => {
  try {
    const tip = req.body;
    const createdTip = await Tip.create(tip);
    res.status(201).json(createdTip);
  } catch (error) {
    console.log(error);
  }
});

tipRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Tip.findByIdAndRemove(id);
    res.json({ message: 'tip is deleted' });
  } catch (error) {
    console.log(error);
  }
});

export default tipRouter;
