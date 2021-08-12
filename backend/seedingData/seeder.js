import mongoose from 'mongoose';
import dotevn from 'dotenv'
import colors from 'colors'

import users from './userSeed.js'
import User from '../models/userModel.js'

import Product from '../models/productModel.js';
import products from './productSeeder.js'

import mantras from './mantraSeeder.js';
import Mantra from '../models/mantraModel.js';

import page from './contentSeeder.js';
import Content from '../models/contentModel.js';

// todo: product and mantras 

import connectDB from '../config/db.js';
dotevn.config()
connectDB()

const importData = async () => {
    try {
        await Content.deleteMany()
        await Content.insertMany(page)

        // await Mantra.deleteMany()
        // await Mantra.insertMany(mantras)
        
        // await Product.deleteMany()
        // await Product.insertMany(products)

    //     await User.deleteMany()
    //    const createdUsers = await User.insertMany(users)
    //    const adminUser = createdUsers[0]._id

        console.log('data imported'.green);
       process.exit()
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1)
    }
}


const destroyData = async () => {
    try {
        await User.deleteMany()
        await Product.deleteMany()
        console.log(`data destroyed!`.red.inverse);
       process.exit()
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1)
    }
}

if(process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}