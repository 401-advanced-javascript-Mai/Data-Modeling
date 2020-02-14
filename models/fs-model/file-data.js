'use strict';

const fs = require('fs');
const util = require('util');



const writedataInsiseFile = util.promisify(fs.writeFile) ;
const readDataFromTheFile = util.promisify(fs.readFile) ;


class Model {
    
    constructor() {
        this.schema = schema;
        this.file = file;
        this.db = []; 
       }

//   let file = `${__dirname}/data/categories.db`;
  
    async loadDataFromdb () {
    // read the file asynchronously and save the results in
    // contents
    let contents = await readDataFromTheFile(this.file);

    this.db = JSON.parse(contents.toString().trim());
    return this.database;
  }

  // CRUD: create
  async create(item) {
  

    let record = { id: uuid(), ...item };

    if (item) {
     
      this.database.push(record);

      // write my changed database back to the file
      await writedataInsiseFile(this.file, JSON.stringify(this.database));

      return record;
    }

    return 'Invalid schema';
  }

  // CRUD: read / search -
  async read(key, val) {
  

    let found = {};

    
    await this.loadDataFromdb();

    this.database.forEach(item => {
      if (item[key] === val) found = item;
    });

    return found;
  }


  // create(file , data) {
  //   return writedataInsiseFile(file , data);
  // }
    
  // read(file) {
  //   return readDataFromTheFile(file)
  //     .then( (data) => {
  //       return data ;
  //     });
  // }
  
}

module.exports = Model;