const request = require('request');
const args = process.argv.splice(2);

const url = `https://api.thecatapi.com/v1/breeds/search?q=${args}`;
  request(url, (error, resp, body) => {
  //console.log(body);
  //console.log(typeof body);

  
  try {
    const data = JSON.parse(body);
    console.log(data[0].description);

  } catch(error) {

    console.log(`The breed ${args} does not exist.`);
  }
})

