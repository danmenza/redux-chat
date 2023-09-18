export default function(state, action) {
  if (state === undefined) {
    return null;
  }
  if (action.type === 'SET_USER') {
    return action.payload;
  } else {
    return state;
  }
}
