//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const express = require('express');
const router = express.Router();

// Step 01
const userList = [Rick, John, Bob];

// Step 02
router.post('/addUser', (req, res, next) => {
  const newPerson = req.body.newPerson;

  userList.push(newPerson);

  res.redirect('/ta02');
});

// Step 03
router.post('/removeUser', (req, res, next) => {
  const remPerson = req.body.remPerson;

  // With it being a const it is harder to remove things. you need to use a splice method to remove from a 
  // const array.
  const index = userList.indexOf(remPerson);
  if (index !== -1 ) {
    userList.splice(index, 1);
  }

  res.redirect('/ta02/');
})


router.get('/', (req, res, next) => {
  res.render('pages/ta02', {
    title: 'Team Activity 02',
    path: '/ta02', // For pug, EJS
    names: userList,
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
  });
});

module.exports = router;
