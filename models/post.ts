import mongoose from 'mongoose';
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title']
  },
  description: String,
  imgUrl: String,
})

module.exports = mongoose.models.posts || mongoose.model('post', postSchema);