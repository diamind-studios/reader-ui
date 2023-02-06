import React, { useState } from 'react';
import { Word } from '../../types/types';
import { WordPanel } from '../WordDetails';
import { SourceTextWord } from './SourceTextWord';

export const SourceText = (props: { passageData: Word[] }): JSX.Element => {
  const [loadWord, setLoadWord] = useState(false);
  const [wordData, setWordData] = useState<Word>();
  let verseNumber = 0;
  return (
    <React.Fragment>
      {loadWord && wordData ? <WordPanel wordData={wordData} setLoadWord={setLoadWord}></WordPanel> : null}
      {props.passageData?.map((word) => {
        const newVerse = verseNumber !== word.verse ? word.verse : null;
        verseNumber = newVerse || verseNumber;
        return (
          <React.Fragment key={crypto.randomUUID()}>
            {newVerse ? (
              <b>
                {newVerse === 1 || <br />}
                {`${newVerse}. `}
              </b>
            ) : null}
            <SourceTextWord setLoadWord={setLoadWord} setWordData={setWordData} word={word}></SourceTextWord>
            {`${word.punctuation || ''} `}
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};
