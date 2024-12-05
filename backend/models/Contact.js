import mongoose from 'mongoose';
const { Schema } = mongoose;

const contactSchema = new Schema({
    name: {
        type: String,
        required: [true,"Full Name is Required!"]
    },
    email: {
        type: String,
        required: [true, "email address is Required!"],
        unique: [true, "email address is already taken!"],
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"please enter a valid email address!"]
    },
    number: {
        type: Number,
        required: [true, "Contact Number is required!"],
    },
    message: {
        type: String,
        required: [true, "Please enter your queries"]
    }
});

const Contact = mongoose.model("Contact",contactSchema);
export default Contact;