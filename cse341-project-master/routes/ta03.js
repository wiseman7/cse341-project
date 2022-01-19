const http = require('http');

function processJson(req, res) {
  // read json
  var url = 'https://byui-cse.github.io/cse341-course/lesson03/items.json';

  http
    .get(url, function (response) {
      var body = '';

      response.on('data', function (chunk) {
        body += chunk;
      });

      response.on('end', function () {
        var jsonResponse = JSON.parse(body);
        // console.log("Got a response: ", jsonResponse);
        var stuff = { data: jsonResponse };

        res.render('results', stuff);

        // var outputFilename = 'my.json';

        //    fs.writeFile(outputFilename, JSON.stringify(jsonResponse, null, 4), function(err) {
        //       if(err) {
        //          console.log(err);
        //       } else {
        //          console.log("JSON saved to " + outputFilename);
        //       }
        //    });
      });
    })
    .on('error', function (e) {
      console.log('Got an error: ', e);
    });
}

module.exports = { processJson: processJson };


// //TA03 PLACEHOLDER
// const { INSPECT_MAX_BYTES } = require('buffer');
// const express = require('express');
// const router = express.Router();

// const item = []

// const fs = require('fs');

// const path = required('path');
// const p = path.join(path.dirname(require.main.filename), 'data', 'items.json');

// router.get('/', (req, res, next) => {
//   res.render('pages/ta03', {
//     title: 'Team Activity 03',
//     path: '/ta03', // For pug, EJS
//     activeTA03: true, // For HBS
//     contentCSS: true, // For HBS
//   });
// });

// router.post('/ta03/itemSearch', (req, res, next) => {
//   const item = req.body.itemSearch;
//   fs.readFile(p, (err, fileContent) => {
//     items = JSON.parse(fileContent);
//     console.log(items[0].tags);

//     for(let i of items) {
//       for(let tag of i.tags){
//         if(item === tag) {
//           console.log("search Results: " + );
//         }
//       }
//     }

//   });
//   res.redirect('/ta03');
// });

// module.exports = router;
