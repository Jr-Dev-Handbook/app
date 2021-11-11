import mongoose from 'mongoose';

const tipsSchema = mongoose.Schema({
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

const Tip = mongoose.model('tip', tipsSchema);

export default Tip;
