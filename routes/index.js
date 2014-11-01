
/*
 * GET home page.
 */

var dataJS = require('./data'),

    data_arr = dataJS.zoo_data,

    meta_data = dataJS.meta_data;


exports.index = function(req, res){
  res.render('index', { title:      meta_data.title,
                        link_site:   meta_data.link_site,
                        twitter:     meta_data.twitter,
                        soundboard:  meta_data.soundboard,
                        farm:        data_arr.farm,
                        forest:      data_arr.forest,
                        countryside: data_arr.countryside,
                        country :    data_arr.country,
                        jungle:      data_arr.jungle,
                        savannah:    data_arr.savannah,
                        lagoon:      data_arr.lagoon,
                        ocean:       data_arr.ocean,
                        mountain:    data_arr.mountain
                       });
};
