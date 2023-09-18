export function fetchMessages(channel) {
  return fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`)
    .then(response => response.json())
    .then((data) => {
      return {
        type: 'FETCH_MESSAGES',
        payload: data
      };
    });
}

export function postMessage(channel, author, content) {
  const body = {
    author,
    content
  };
  const data = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json());
  return {
    type: 'POST_MESSAGE',
    payload: data
  };
}

export function selectChannel(channel) {
  return {
    type: 'SELECTED_CHANNEL',
    payload: channel
  };
}
