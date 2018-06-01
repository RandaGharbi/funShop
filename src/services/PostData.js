import fetch from 'node-fetch';
async function PostData(type, userData) {
  const BaseURL = 'https://api.mailxengine.com/rest/';

  return fetch(BaseURL + type, {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
export default PostData;