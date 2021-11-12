import express from 'express';

import mongoose from 'mongoose';

import Faq from '../db/faqs.js';

const faqRouter = express.Router();

faqRouter.get('/', async (req, res) => {
  try {
    const allFaqs = await Faq.find();
    res.json(allFaqs);
  } catch (error) {
    console.log(error);
  }
});

faqRouter.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const faq = await Faq.findById(id);
    if (!faq) return;
    res.status(200).json(faq);
  } catch (error) {
    console.log(error);
  }
});

faqRouter.post('/', async (req, res) => {
  try {
    const faq = req.body;
    const createdFaq = await Faq.create(faq);
    res.status(201).json(createdFaq);
  } catch (error) {
    console.log(error);
  }
});

faqRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Faq.findByIdAndRemove(id);
    res.json({ message: 'faq is deleted' });
  } catch (error) {
    console.log(error);
  }
});

export default faqRouter;
