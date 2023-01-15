import axios, { AxiosRequestConfig } from 'axios';
import { Api } from '../api';

const url = process.env.REACT_APP_API_URL;
export const getTranslationText = async (versionName: string) => {
  const endpoint = '/translation_text';
  const headers = {
    'Content-type': 'application/json',
  };
  const params = {
    book: 'Genesis',
    chapter: 1,
    translation: versionName,
  };
  // const queryString = '?book=Genesis&translation=KJV';
  console.log('requesting to:', url + endpoint);
  const config: AxiosRequestConfig = { headers, params };
  const response = await axios.get(url + endpoint, config);
  return response.data.data;
};

export class Service /*extends Api*/ {
  url = 'http://localhost:3001';
  constructor() {}
  async getText() {}
  async getTranslationText() {}
}
