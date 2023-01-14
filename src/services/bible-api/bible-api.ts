import axios, { AxiosRequestConfig } from 'axios';
import { Api } from '../api';

const url = 'http://localhost:3001';
export const getTranslationText = async () => {
  const endpoint = '/source_text';
  const headers = {
    'Content-type': 'application/json',
  };
  const params = {
    book: 'Genesis',
    chapter: 1,
    translation: 'KJV',
  };
  // const queryString = '?book=Genesis&translation=KJV';
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
