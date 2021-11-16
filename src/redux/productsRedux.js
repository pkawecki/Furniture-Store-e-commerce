/* selectors */
export const getAllProducts = ({ products }) => products;
export const getCount = ({ products }) => products.length;
export const getPromoted = ({ products }) => products.filter(item => (item.price > item.oldPrice));
export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

/* action name creator */
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
export const ADD_TO_FAVORITES = createActionName('ADD_TO_FAVORITES');
export const REMOVE_FROM_FAVORITES = createActionName('REMOVE_FROM_FAVORITES');
export const ADD_RATING = createActionName('ADD_RATING');

/* action creators */
export const createAction_addFavorites = payload => ({
  payload,
  type: ADD_TO_FAVORITES,
});
export const createAction_removeFavorites = payload => ({
  payload,
  type: REMOVE_FROM_FAVORITES,
});
export const addRating = payload => ({
  payload,
  type: ADD_RATING,
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return statePart.map(product => {
        if (product.id === action.payload.id) {
          product.favorites = true;
        }
        return product;
      });
    case REMOVE_FROM_FAVORITES:
      return statePart.map(product => {
        if (product.id === action.payload.id) {
          product.favorites = false;
        }
        return product;
      });
    case ADD_RATING:
      return statePart.map(rating => {
        if (rating.id !== action.payload.id) {
          return rating;
        }
        return {
          ...rating,
          userRating: action.payload.userRating,
        };
      });
    default:
      return statePart;
  }
}
