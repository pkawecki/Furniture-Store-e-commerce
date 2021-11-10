/* selectors */
export const getMode = ({ mode }) => mode;

/* action name creator */
const reducerName = 'mode';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const UPDATE = createActionName('UPDATE');

/* action creators */
export const updateMode = payload => ({ payload, type: UPDATE });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case UPDATE: {
      return action.payload;
    }
    default:
      return statePart;
  }
}
