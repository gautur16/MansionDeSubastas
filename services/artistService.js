const Artist = require('../data/db').Artist;
const artistService = () => {
    const getAllArtists = (cb, errorCb) => {
        Artist.find({}, function(err, artists){
            if(err) {throw new Error(err); }
            cb(artists);
        });
    };

    const getArtistById = (id, cb, errorCb) => {
        Artist.findById(id, function(err, artist){
            if(err) {throw new Error(err); }
            cb(artist);
        });
    };

    const createArtist = (artist, cb, errorCb) => {
        if(Artist.findById(art.artistId, function(err, artist){
        }) !== null){
          Artist.create(artist, function(err, result){
            if(err){ errorCb(err); }
            else {cb(result);}
          });
        }
    };

    return {
        getAllArtists,
        getArtistById,
        createArtist
    };
};

module.exports = artistService();
