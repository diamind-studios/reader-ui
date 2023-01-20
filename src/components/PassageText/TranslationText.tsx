import React from 'react';

export const TranslationText = (props: { passageData: any[] }) => {
  return (
    <React.Fragment>
      {props.passageData.map((verse) => (
        <div>
          <b>{`${verse.verse}. `}</b>
          {verse.text}
        </div>
      ))}
    </React.Fragment>
  );
};
