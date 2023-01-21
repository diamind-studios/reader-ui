import React from 'react';

export const SourceText = (props: { word: any; verseNumber: number }): JSX.Element => {
  return (
    <React.Fragment>
      {props.verseNumber ? (
        <b>
          {props.verseNumber === 1 || <br />}
          {`${props.verseNumber}. `}
        </b>
      ) : null}
      <span className='hover:bg-slate-300 rounded-md p-0.5 group relative'>{props.word.word}
      <span className='absolute scale-0 group-hover:scale-100 bg-slate-100 rounded-md border-solid border-2 origin-center top-0'>{props.word.words_id}</span></span>
      {`${props.word.punctuation || ''} `}
    </React.Fragment>
  );
};
