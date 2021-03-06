import mongoose, {ObjectId} from '../mongoose';

// define the schema for our user model
let eventSchema = mongoose.Schema({
    uid: {type: String, required: true},
    name: {type: String, default: "Secret Santa " + new Date().getFullYear()},
    startDate: Date,
    endDate: Date,
    members: [{type: ObjectId, ref: 'User'}],
    pairs: [{
        from: ObjectId,
        to: ObjectId,
        isGiftSent: {type: Boolean, default: false},
        trackingNumber: {type: String},
        isGiftReceived: {type: Boolean, default: false}
    }]
}, { usePushEach: true });

// create the model for users and expose it to our app
module.exports = mongoose.model('Event', eventSchema);
