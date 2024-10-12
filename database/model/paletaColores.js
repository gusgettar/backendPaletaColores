import mongoose, {Schema} from "mongoose";

const colorSchema =  new Schema({
    nombreColor:{
        type: String,
        required: true,
        minLength: 2,
        maxLength: 50,
        unique: true
    }
})

const Color = mongoose.model('color', colorSchema)

export default Color