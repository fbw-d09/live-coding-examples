const { Schema, model } = require('mongoose');

const userProfileSchema = new Schema({
    darkmode: Boolean,
    client: String 
},
{
    timestamps: true,
    _id: false // mit _id: false geben wir an, das dieses subdokument keine eigene ID hat.
});

const userProfileModel = new model('UserProfile', userProfileSchema, 'userProfiles');

module.exports = { userProfileSchema, userProfileModel }
