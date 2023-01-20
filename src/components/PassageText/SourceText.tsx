import React from 'react';

export const SourceText = (props: { verse: any; verseNumber: number }): JSX.Element => {
  return (
    <React.Fragment>
      {props.verseNumber ? (
        <b>
          {props.verseNumber === 1 || <br />}
          {`${props.verseNumber}. `}
        </b>
      ) : null}
      <span className='hover:bg-slate-300 rounded-md p-0.5'>{props.verse.word}</span>
      {`${props.verse.punctuation || ''} `}
    </React.Fragment>
  );
};
