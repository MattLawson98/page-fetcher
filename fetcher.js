const request = require('request');
const fs = require('fs');


const url = process.argv[2];
const path = process.argv[3];

request(`${url}`, (error,response, body) => {
  if (error) {
    console.log("errror:",error);
  };
  fs.writeFile(`${path}`,body, function(error) {
    if (error) {
      console.log("errror:",error);
    } else {
    console.log(`downloaded and saved ${response.headers["content-length"]} bytes to ${path}`);
    }
  });
});