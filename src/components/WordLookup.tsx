import { useEffect, useState } from 'react';
import { Word } from '../types/types';

export const WordLookup = (props: { wordData: Word }) => {
  const [data, setData] = useState('');
  useEffect(() => {
    setData('blah blah');
  }, [props.wordData]);
  return (
    <div
      tabIndex={10}
      className='wordLookup absolute z-10 bg-slate-100 rounded-md border-solid border-2 border-slate-200 shadow-md w-48'
    >
      {data}
    </div>
  );
};
