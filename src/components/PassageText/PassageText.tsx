import React from 'react';
import { SourceText } from './SourceText';
import { TranslationText } from './TranslationText';

export const PassageText = (props: { versionType: 'translation' | 'source'; passageData: any[] }): JSX.Element => {
  const translationText = () => <TranslationText passageData={props.passageData}></TranslationText>; //props.passageData.map((verse) => <div>{`${verse.verse}. ` + verse.text}</div>);
  const sourceText = () => {
    let verseNumber = 0;
    return props.passageData.map((verse) => {
      const newVerse = verseNumber !== verse.verse ? verse.verse : null;
      verseNumber = newVerse || verseNumber;
      return <SourceText verse={verse} verseNumber={newVerse}></SourceText>;
    });
  };
  const getText = {
    translation: translationText,
    source: sourceText,
  };

  return <div className='leading-8 p-4 reader cursor-default'>{getText[props.versionType]() || 'N/A'}</div>;
};
