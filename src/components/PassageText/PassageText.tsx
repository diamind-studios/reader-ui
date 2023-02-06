import React from 'react';
import { Source, Version } from '../../types/types';
import { SourceText } from './SourceText';
import { TranslationText } from './TranslationText';

export const PassageText = (props: { selectedVersion: Version; passageData: any[] }): JSX.Element => {
  const translationText = () => <TranslationText passageData={props.passageData}></TranslationText>; //props.passageData.map((verse) => <div>{`${verse.verse}. ` + verse.text}</div>);
  const sourceText = () => (
    <SourceText passageData={props.passageData} sourceId={(props.selectedVersion as Source).source_id}></SourceText>
  );
  const getText = {
    translation: translationText,
    source: sourceText,
  };

  return <div className='leading-8 p-4 reader cursor-default'>{getText[props.selectedVersion.type]() || 'N/A'}</div>;
};
