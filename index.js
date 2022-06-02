const fs = require("fs");
const superagent = require("superagent");

fs.readFile(`${__dirname}/dog.text`, (err, data) => {
  console.log(`Breed: ${data}`);

  superagent
    .get(`https://dog.ceo/api/breed/${data}/images/random`)
    .end((err, res) => {
      if (err) {
        console.log(err.message);
      }

      fs.writeFile("dog-image.txt", res.body.message, (err) => {
        if (err) {
          console.log(err.message);
        }
        console.log("Random dog image seved to fil");
      });
    });
});
