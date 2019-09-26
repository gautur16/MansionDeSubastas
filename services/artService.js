const Art = require('../data/db').Art;
const Artist = require('../data/db').Artist;
const artService = () => {
    const getAllArts = (cb, errorCb) => {
        Art.find({}, function(err, arts){
          if(err) {throw new Error(err); }
          cb(arts);
        });
    };

    const getArtById = (id, cb, errorCb) => {
        Art.findById(id, function(err, art){
          if(err) { return 0; }
          cb(art);
        });
    };

    const createArt = (art, cb, errorCb) => {
        if(Artist.findById(art.artistId, function(err, artist){
        }) !== null){
          Art.create(art, function(err, result){
            if(err){ console.log(err); }
            else {cb(result);}
          });
        }
    };

    return {
        getAllArts,
        getArtById,
        createArt
    };
};

module.exports = artService();


// const Ufo = require('../data/db').Ufo;
//
// function getAllUfos(cb) {
//   Ufo.find({}, function(err, ufos) {
//     if (err) { throw new Error(err); }
//     cb(ufos);
//   });
// };
//
// function getUfoById(id, cb) {
//   Ufo.findById(id, function(err, ufo) {
//     if (err) { throw new Error(err); }
//     cb(ufo);
//   });
// };
//
// function createNewUfo(ufo, successCb, errorCb) {
//   Ufo.create(ufo, function(err, result) {
//     if (err) { errorCb(err); }
//     else { successCb(result); }
//   });
// };
//
// function updateUfo(ufo, id, successCb, errorCb) {
//   Ufo.updateOne({ _id: id }, ufo, function(err, result) {
//     if (err) { errorCb(err); }
//     else { successCb(); }
//   });
// };
//
// function deleteUfo(id) {
//
// };
//
// module.exports = {
//   getAllUfos,
//   getUfoById,
//   createNewUfo,
//   updateUfo,
//   deleteUfo
// };
