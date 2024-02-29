/*This file contains the code for items in a shopping cart.*/

const items = require("./fakeDb")

class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;

    items.push(this);
  }

  static findAll(){
    return items
  }
  //Update found item with matching name to data. */

    static update(name, data) {
      // find item with matching name
    let foundItem = Item.find(name);
      if (foundItem === undefined) {
        // throw an error if item not found
      throw {message: "Not Found", status: 404}
    }
    foundItem.name = data.name;
    foundItem.price = data.price;

    return foundItem;
  }

  // Find and return item with matching name. 

  static find(name) {
    
      const foundItem = items.find(v => v.name === name);
      // throw an error if item not found (404)
    if(foundItem === undefined){
      throw { message: "Not Found", status: 404 }
    }
    return foundItem
  }

//Remove item with matching id
    static remove(name) {
        let foundIdx = items.findIndex(v => v.name === name);
        if (foundIdx === -1) {
            throw { message: "Not Found", status: 404 }
        }
        items.splice(foundIdx, 1);
    }
}
//export the Item class    
module.exports = Item;