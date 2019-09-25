const Costumer = require('../data/db').Costumer;
const customerService = () => {
    const getAllCustomers = (cb, errorCb) => {
        Costumer.find({}, function(err, costumers){
            if(err) {throw new Error(err); }
            cb(costumers);
          });
    };

    const getCustomerById = (id, cb, errorCb) => {
        Costumer.findById(id, function(err, costumer){
            if(err) {throw new Error(err); }
            cb(costumer);
          });
    };

    const getCustomerAuctionBids = (customerId, cb, errorCb) => {
        // Your implementation goes here
    };

	const createCustomer = (customer, cb, errorCb) => {
        // Your implementation goes here
    };

    return {
        getAllCustomers,
        getCustomerById,
        getCustomerAuctionBids,
		createCustomer
    };
};

module.exports = customerService();
