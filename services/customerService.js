const Customer = require('../data/db').Customer;
const AuctionBid = require('../data/db').AuctionBid;
const customerService = () => {
    const getAllCustomers = (cb, errorCb) => {
        Customer.find({}, function(err, customers){
            if(err) {throw new Error(err); }
            cb(customers);
          });
    };

    const getCustomerById = (id, cb, errorCb) => {
        Customer.findById(id, function(err, customer){
            if(err) {errorCb(err); }
            cb(customer);
          });
    };

    const getCustomerAuctionBids = (customerId, cb, errorCb) => {
      AuctionBid.find({customerId : customerId}, function(err, auctionBids){
          if(err) {errorCb(err);; }
          cb(auctionBids);
        });
    };

	const createCustomer = (customer, cb, errorCb) => {
      Customer.create(customer, function(err, result){
        if(err){ errorCb(err); }
        else {cb(result);}
      });
    };

    return {
        getAllCustomers,
        getCustomerById,
        getCustomerAuctionBids,
		createCustomer
    };
};

module.exports = customerService();
