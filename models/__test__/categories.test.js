
const Categories = require('../categories/catogries.js');

describe('Categories Model', () => {

  let categories;

  beforeEach(() => {
    categories = new Categories();
  });

  it('can post() a new category', () => {
    let list = { name: 'Test Category' };
    return categories.create(list)
      .then(record => {
        Object.keys(list).forEach(key => {
          expect(record[key]).toEqual(list[key]);
        });
      })
      .catch(error => console.error( error));
  });

  it('can get() a category', () => {
    let list = { name: 'Test Category' };
    return categories.create(list)
      .then(record => {
        return categories.get(record._id)
          .then(results => {
            Object.keys(list).forEach(key => {
              expect(results[0][key]).toEqual(list[key]);
            });
          });
      });
  });
  
  it('can update() a category', () => {
    let list = { name: 'Test Category' };
    return categories.create(list)
      .then(record => {
        return categories.update(record._id, { name: 'test2' })
          .then(updated => {

            expect(updated).toEqual({ name: 'test2' });
          })
          .catch(error => console.error( error));

      });
  });



  it('can delete() a category', () => {
    let list = { name: 'Test Category' };
    return categories.create(list)
      .then(record => {
        console.log('record-id', record);
        return categories.delete(record._id)
          .then(results => {

            expect(results).toEqual(undefined);
          })
          .catch(error => console.error( error));

      });
  });

});