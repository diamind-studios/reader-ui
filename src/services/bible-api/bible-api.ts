import { Parsing, Version } from '../../types/types';
import { sendRequest } from './request';

export const getVersePassage = async (params: any) => {
  const endpoint = '/verse';
  const passages = await sendRequest(params, endpoint);
  return passages[0];
};

export const getTranslationText = async (versionName: string, passage: any) => {
  const endpoint = '/translation_text';
  const params = { ...passage, translation: versionName };
  return await sendRequest(params, endpoint);
};

export const getSourceText = async (versionName: string, passage: any) => {
  const endpoint = '/source_text';
  const params = { ...passage, source: versionName };
  return await sendRequest(params, endpoint);
};

export const getTranslationList = async (): Promise<Version[]> => {
  const endpoint = '/translation';
  const params = { complete: 1 }; //change complete to active
  const response = await sendRequest(params, endpoint);
  return response.map((translation: any) => {
    return { ...translation, type: 'translation' };
  });
};

export const getSourceList = async (): Promise<Version[]> => {
  const endpoint = '/source';
  const params = { complete: 1 }; //change complete to active
  const response = await sendRequest(params, endpoint);
  return response.map((source: any) => {
    return { ...source, type: 'source' };
  });
};

export const getParsing = async (parsing_id: number): Promise<Parsing[]> => {
  const endpoint = '/parsing';
  const params = { parsing_id };
  return await sendRequest(params, endpoint);
};

export const getConcordance = async (words_id: number): Promise<Version[]> => {
  const endpoint = '/concordance';
  const params = { words_id };
  return await sendRequest(params, endpoint);
};
