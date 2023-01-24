import React from 'react';
import { TranslationTextVerse } from './TranslationTextVerse';

export const TranslationText = (props: { passageData: any[] }): JSX.Element => {
  const translationText = props.passageData.map((verse) => {
    const uuid = crypto.randomUUID();
    return <TranslationTextVerse key={uuid} verse={verse}></TranslationTextVerse>;
  });
  console.log('getting translation text')
  return <React.Fragment>{translationText}</React.Fragment>;
};
