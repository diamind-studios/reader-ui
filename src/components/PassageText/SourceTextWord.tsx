import { StateSetter, Word } from '../../types/types';

export const SourceTextWord = (props: {
  setLoadWord: StateSetter<boolean>;
  setWordData: StateSetter<Word | undefined>;
  word: Word;
}) => {
  return (
    <span
      tabIndex={100}
      onFocus={() => {
        props.setLoadWord(true);
        props.setWordData(props.word);
      }}
      onBlur={(e) => {
        if (!e.relatedTarget?.classList.contains('wordLookup')) props.setLoadWord(false);
      }}
      className='hover:bg-slate-300 rounded-md p-0.5 group relative'
    >
      {props.word.word}
    </span>
  );
};
