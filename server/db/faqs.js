import mongoose from 'mongoose';

const faqsSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  creator: {
    type: String,
    required: true
  },
  tags: {
    type: Array,
    required: true
  }
});

const Faq = mongoose.model('faq', faqsSchema);

export default Faq;
