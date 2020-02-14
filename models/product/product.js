'use strict' ;

const DataModel = require('../memory-data-model.js');


class Products extends DataModel {
  constructor() {
    super();
    this.schema = {
  
      id: { type:'string' ,required: true },
      price: { type:'number',required: true },
      weight: {type:'number', required: true },
      quantityInStock: { type:'number',required: true },
    };
  }}
  
module.exports = Products;