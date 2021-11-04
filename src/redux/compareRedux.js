/* selectors */
export const getAll = ({ compare }) => compare.products;
export const getCount = ({ compare }) => compare.products.length;

/* action name creator */
const reducerName = 'compare';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_PRODUCT = createActionName('ADD_PRODUCT');

/* action creators */
export const addProductToCompare = payload => ({ payload, type: ADD_PRODUCT });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_PRODUCT: {
      return {
        ...statePart,
        products: [...statePart.products, action.payload],
      };
    }
    default:
      return statePart;
  }
}
