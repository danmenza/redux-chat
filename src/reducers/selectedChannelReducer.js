export default function(state, action) {
  if (state === undefined) {
    return null;
  }
  if (action.type === 'SELECTED_CHANNEL') {
    return action.payload;
  } else {
    return state;
  }
}
