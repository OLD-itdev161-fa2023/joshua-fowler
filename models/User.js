import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    First_Name: {
        type: String,
        required: true
    },
    Last_Name: {
        type: String,
        required: true,
        unique: true
    },
    Science: {
        type: String,
        required: true
    },
    Math: {
        type: String,
        required: true
    },
    English: {
        type: String,
        required: true
    },
    History: {
        type: String,
        required: true
    },
    Gym: {
        type: String,
        required: true
    }
});

const User = mongoose.model('user', UserSchema);

export default User;