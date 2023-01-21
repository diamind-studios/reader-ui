import { Word } from '../types/types';

export const WordLookup = (props: { wordData: Word }) => {
  return (
    <div tabIndex={10} className='wordLookup absolute z-10 bg-slate-100 rounded-md border-solid border-2 w-48'>
      {props.wordData.word}
    </div>
  );
};
