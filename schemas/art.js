const Schema = require('mongoose').Schema;

module.exports = new Schema({
  title:{type: String, required: true},
  artistId:{type: Schema.Types.ObjectId, required: true},
  date:{type: Date, required: true}, //Default = Now
  images:[String],
  description:String,
  isAuctionItem: Boolean //Default = false

});


// module.exports = new Schema({
//   name: { type: String, required: true },
//   description: String,
//   type: { type: Schema.Types.ObjectId, required: true },
//   dateOfDiscovery: { type: Date, required: true }
// });
