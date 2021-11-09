/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;
export const getPromoted = ({ products }) => products.filter(item => (item.price > item.oldPrice));
export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
