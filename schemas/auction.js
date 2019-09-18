const Schema = require('mongoose').Schema;

module.exports = new Schema({

  artId:{type: Schema.Types.ObjectId, required: true},
  minimumPrice:Number, //Default = 1000
  endDate:{type: Date, required: true},
  auctionWinner:Schema.Types.ObjectId

});
