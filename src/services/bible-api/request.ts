import axios from 'axios';

const headers = {
  'Content-type': 'application/json',
};
const url = process.env.REACT_APP_API_URL;

export const sendRequest = async (params: any, endpoint: string) => {
  console.log('requesting to:', url + endpoint);
  const config = { headers, params };
  const response = await axios.get(url + endpoint, config);
  return response.data.data;
};

// export class Service /*extends Api*/ {
//   url = 'http://localhost:3001';
//   constructor() {}
//   async getText() {}
//   async getTranslationText() {}
// }
