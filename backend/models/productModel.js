import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    header: {
        type: String,
        required: true
    },
    mantraListName: {
        required: true,
        type: String
    },
     image: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
})

const Product = mongoose.model('Product', productSchema)

export default Product