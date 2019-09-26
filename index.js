const artService = require('./services/artService');
const artistService = require('./services/artistService');
const auctionService = require('./services/auctionService');
const customerService = require('./services/customerService');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());


app.get('/api/arts', function(req, res){
  artService.getAllArts(function(arts){
    return res.json(arts);
  });
});

app.get('/api/arts/:artId', function(req, res){
  const artId = req.params.artId;
  artService.getArtById(artId, function(art){
    return res.json(art);
  });
});

app.post('/api/arts', function(req, res){
  req.body.date = new Date();
  artService.createArt(req.body, function(art){
    return res.status(201).json(art);
  }, function(err){
    return res.status(400).json(err);
  });
});

app.get('/api/artists', function(req, res){
  artistService.getAllArtists(function(artists){
    return res.json(artists);
  });
});

app.get('/api/artists/:artistId', function(req, res){
  const artistId = req.params.artistId;
  artistService.getArtistById(artistId, function(artist){
    return res.json(artist);
  });
});

app.post('/api/artists', function(req, res){
  req.body.memberSince = new Date();
  artistService.createArtist(req.body, function(artist){
    return res.status(201).json(artist);
  }, function(err){
    return res.status(400).json(err);
  });
});


app.get('/api/customers', function(req, res){
  customerService.getAllCustomers(function(customers){
    return res.json(customers);
  });
});


app.get('/api/customers/:customerId', function(req, res){
  const customerId = req.params.customerId;
  customerService.getCustomerById(customerId, function(customer){
    return res.json(customer);
  });
});

app.post('/api/customers', function(req, res){
  customerService.createCustomer(req.body, function(customer){
    return res.status(201).json(customer);
  }, function(err){
    return res.status(400).json(err);
  });
});


app.get('/api/customers/:customerId/auction-bids', function(req, res){
  const customerId = req.params.customerId;
  customerService.getCustomerAuctionBids(customerId, function(auctionBid){
    return res.json(auctionBid);
  });
});


app.get('/api/auctions', function(req, res){
  auctionService.getAllAuctions(function(auctions){
    return res.json(auctions);
  });
});

app.get('/api/auctions/:auctionId', function(req, res){
  const auctionId = req.params.auctionId;
  auctionService.getAuctionById(auctionId, function(auction){
    return res.json(auction);
  });
});



// http://localhost:3000/api/ufos [GET]
// app.get('/api/ufos', function(req, res) {
//   ufoService.getAllUfos(function (ufos) {
//     return res.json(ufos);
//   });
// });
//
// app.get('/api/ufos/:ufoId', function(req, res) {
//   const ufoId = req.params.ufoId;
//   ufoService.getUfoById(ufoId, function(ufo) {
//     return res.json(ufo);
//   });
// });
//
// app.post('/api/ufos', function(req, res) {
//   ufoService.createNewUfo(req.body, function(ufo) {
//     return res.status(201).json(ufo);
//   }, function(err) {
//     return res.status(400).json(err);
//   });
// });
//
// app.put('/api/ufos/:ufoId', function(req, res) {
//   const ufoId = req.params.ufoId;
//   const body = req.body;
//   ufoService.updateUfo(body, ufoId, function() {
//     return res.status(204).send();
//   }, function(err) {
//     return res.status(400).json(err);
//   });
// });
//
// app.delete('/api/ufos/:ufoId', function(req, res) {
//   const ufoId = req.params.ufoId;
//   return res.json({ ufoId });
// });

// http://localhost:3000
app.listen(3000, function() {
  console.log('Server is listening on port 3000');
});// Here the web service should be setup and routes declared
