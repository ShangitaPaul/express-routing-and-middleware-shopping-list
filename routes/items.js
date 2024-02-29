/* Import and use the router*/

const express = require('express');
const Item = require('./item');
const router = express.Router();

//GET request to /items
router.get('', (req, res, next) => {
  try {
    return res.json({ items: Item.findAll() });
  } catch(err){
    return next(err)
  }
});

//POST request to /items
router.post('', (req, res, next) => {
    try {
      return res.json({ item: Item.create(req.body) });
    } catch(err){
      return next(err)
    }
});
//GET request to /[name] => item
router.get('/:name', (req, res, next) => {
  try {
    return res.json({ item: Item.find(req.params.name) });
  } catch(err){
    return next(err)
  }
})

// PATCH
router.patch('/:name', (req, res, next) => {
  try {
    return res.json({ item: Item.update(req.params.name, req.body) });
  } catch(err){
    return next(err)
  }
})

// DELETE
router.delete('/:name', (req, res, next) => {
  try {
    return res.json({ message: Item.remove(req.params.name) });
  } catch(err){
    return next(err)
  }
})

// Export the router
module.exports = router;

