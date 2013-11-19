
var ACS = require('acs').ACS;

/*
 * GET users listing.
 */

exports.list = function(req, res){
  ACS.Places.query({
    }, function(data) {
        if(data.success) {
            res.send(data);
        } else {
            res.send(
                'Error occured. Error code: ' + data.error + '. Message: ' + data.message);
        }
    });
};