import mongoose from 'mongoose';

const contentSchema = mongoose.Schema({
    title: {
        type: String,
    },
     directions: {
        type: String,
    },
      img: {
        type: String,
        required: true,
    },
    subTitle: {
        type: String,
    },
  
}, {
    timestamps: true
})

const pageSchema = mongoose.Schema({
     user: {
        type: mongoose.Schema.Types.ObjectId,
        // required: true,
        ref: 'User'
    },
    pageName: {
        type: String,
        required: true
    },
    pageContent: [{
          title: {
        type: String,
    },
     directions: {
        type: String,
    },
      img: {
        type: String,
        required: true,
    },
    subTitle: {
        type: String,
    }
    }]
}, {timestamps: true})


const Content = mongoose.model('Content', pageSchema)

export default Content