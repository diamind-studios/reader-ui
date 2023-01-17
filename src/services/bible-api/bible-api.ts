import { Version } from '../../types/types';
import { sendRequest } from './request';

export const getTranslationText = async (versionName: string) => {
  const endpoint = '/translation_text';
  const params = {
    book: 'Genesis',
    chapter: 1,
    translation: versionName,
  };
  return await sendRequest(params, endpoint);
};

export const getTranslationList = async (): Promise<Version[]> => {
  const endpoint = '/translation';
  const params = { complete: 1 }; //change complete to active
  return await sendRequest(params, endpoint);
};

export const getSourceList = async (): Promise<Version[]> => {
  const endpoint = '/source';
  const params = { complete: 1 }; //change complete to active
  return await sendRequest(params, endpoint);
};

