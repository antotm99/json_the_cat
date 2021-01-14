const request = require('request');
const fetchBreedDescription = function(breedName, callback) {

  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, resp, body) => {

    if (error) {
      callback(`${error}`,null);
      return;
    }

  
    try {
      const data = JSON.parse(body);
      callback(null, data[0].description);

    } catch (error) {

      callback(`The breed ${breedName} does not exist.`, null);
    }
  });

};

module.exports = {fetchBreedDescription};