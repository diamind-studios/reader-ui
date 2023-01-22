import React from 'react';
import { TranslationTextVerse } from './TranslationTextVerse';

export const TranslationText = (props: { passageData: any[] }): JSX.Element => {
  const translationText = props.passageData.map((verse) => {
    const uuid = `t_${verse.book}_${verse.translation_id}`;
    return <TranslationTextVerse key={uuid} verse={verse}></TranslationTextVerse>;
  });
  return <React.Fragment>{translationText}</React.Fragment>;
};
