import mongoose from 'mongoose';

// const singleMantraSchema = mongoose.Schema({
//     title: {
//         type: String,
//     }
// }, {
//     timestamps: true
// })

const mantraSchema = mongoose.Schema({
     name: {
        type: String,
        required: true
    },
    mantraList: Array,

}, {
    timestamps: true
})

const Mantra = mongoose.model('Mantra', mantraSchema)

export default Mantra