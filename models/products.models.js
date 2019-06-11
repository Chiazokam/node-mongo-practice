import mongoose from 'mongoose';
import checkExistence from '../utils/checkExistence';

const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    name: {type: String, required: true, max: 100},
    price: {type: Number, required: true},
});

ProductSchema.plugin(checkExistence)

module.exports = mongoose.model('Product', ProductSchema);
