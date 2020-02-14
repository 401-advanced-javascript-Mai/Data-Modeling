'use strict ';
const Products = require('../product/product.js');

describe(' Products Model', () => {

  let products;

  beforeEach(() => {
    products = new Products();
  });

  it('can post() a new Product', () => {
    let list = { price: 100 };
    return products.create(list)
      .then(record => {
        Object.keys(list).forEach(key => {
          expect(record[key]).toEqual(list [key]);
        });
      })
      .catch(error => console.error( error));
  });

  it('can get() a Product', () => {
    let list = { price: 100 };
    return products.create(list)
      .then(record => {
        return products.get(record._id)
          .then(results => {
            Object.keys(list).forEach(key => {
              expect(results[0][key]).toEqual(list[key]);
            });
          });
      });
  });

  it('can update() a product', () => {
    let list = { price: 100 };
    return products.create(list)
      .then(record => {
        return products.update(record._id, { price: 150 })
          .then(updated => {

            expect(updated).toEqual({ price: 150 });
          })
          .catch(error => console.error( error));

      });
  });



  it('can delete() a product', () => {
    let list = { price: 100 };
    return products.create(list
    )
      .then(record => {
        console.log('record-id', record);
        return products.delete(record._id)

          .then(results => {
            expect(results).toEqual(undefined);
          })
          .catch(error => console.error( error));

      });
  });
});