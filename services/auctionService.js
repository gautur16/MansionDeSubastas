const Auction = require('../data/db').Auction;
const Art = require('../data/db').Art;

const auctionService = () => {
    const getAllAuctions = (cb, errorCb) => {
      Auction.find({}, function(err, auctions){
          if(err) {throw new Error(err); }
          cb(auctions);
      });
    };

    const getAuctionById = (id, cb, errorCb) => {
      Auction.findById(id, function(err, auction){
          if(err) {throw new Error(err); }
          cb(auction);
      });
    };

    const getAuctionWinner = (auctionId, cb, errorCb) => {
        // Your implementation goes here
    };

	const createAuction = (auction, cb, errorCb) => {
    if(Art.findById(auction.artId, function(err, auction){
    }) === null){ errorCb(err); }
    if(Art.findById(auction.artId, function(err, art){
    }).isAuctionItem === false){
      //throw 412
      throw new Error(err);
    }
    if(Auction.find({artId : auction.artId}, function(err, auction){
      if(auction){return auction.status(409).json(err);}
    }) !== null){}
      Auction.create(auction, function(err, result){
        if(err){ errorCb(err); }
        else {cb(result);}
      });
    };

	const getAuctionBidsWithinAuction = (auctionId, cb, errorCb) => {
        // Your implementation goes here
    };

	const placeNewBid = (auctionId, customerId, price, cb, errorCb) => {
		// Your implementation goes here
	}

    return {
        getAllAuctions,
        getAuctionById,
        getAuctionWinner,
		createAuction,
		getAuctionBidsWithinAuction,
		placeNewBid
    };
};

module.exports = auctionService();
