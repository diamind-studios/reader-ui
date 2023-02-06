import { StateSetter, Word } from '../../types/types';

export const SourceTextWord = (props: {
  setLoadWord: StateSetter<boolean>;
  setWordData: StateSetter<Word | undefined>;
  word: Word;
  sourceId: number;
}) => {
  const padding = props.sourceId === 12 ? 'py-0.5' : 'p-0.5';
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
      className={`hover:bg-slate-300 rounded-md ${padding} group relative`}
    >
      {props.word.word}
    </span>
  );
};
