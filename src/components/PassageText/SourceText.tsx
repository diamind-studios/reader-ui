import React, { useState } from 'react';
import { Word } from '../../types/types';
import { WordLookup } from '../WordLookup';

export const SourceText = (props: { passageData: Word[] }): JSX.Element => {
  const [loadWord, setLoadWord] = useState(false);
  const [wordData, setWordData] = useState<Word>();
  let verseNumber = 0;
  return (
    <React.Fragment>
      {loadWord && wordData ? <WordLookup wordData={wordData}></WordLookup> : null}
      {props.passageData.map((word) => {
        const newVerse = verseNumber !== word.verse ? word.verse : null;
        verseNumber = newVerse || verseNumber;
        return (
          <React.Fragment>
            {newVerse ? (
              <b>
                {newVerse === 1 || <br />}
                {`${newVerse}. `}
              </b>
            ) : null}
            <span
              tabIndex={100}
              onFocus={() => {
                setLoadWord(true);
                setWordData(word);
              }}
              onBlur={(e) => {
                if (!e.relatedTarget?.classList.contains('wordLookup')) setLoadWord(false);
              }}
              className='hover:bg-slate-300 rounded-md p-0.5 group relative'
            >
              {word.word}
            </span>
            {`${word.punctuation || ''} `}
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};
