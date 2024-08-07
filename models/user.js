
const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    id: { type: String, required: true },
    name: String,
    company: String,
    phone: String,
    email: String,
    socials: [{ socialMedia: String, link: String }],
    website: String,
    location: String,
    profession: String,
});


// Export the model
const userModel = mongoose.model('user', UserSchema);
module.exports = {userModel}
